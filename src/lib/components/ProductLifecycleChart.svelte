<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import {
		Chart,
		ScatterController,
		LineElement,
		PointElement,
		LinearScale,
		CategoryScale,
		Tooltip,
		Filler,
		Legend
	} from 'chart.js';
	import annotationPlugin from 'chartjs-plugin-annotation';

	// Register once
	Chart.register(
		ScatterController,
		LineElement,
		PointElement,
		LinearScale,
		CategoryScale,
		Tooltip,
		Filler,
		Legend,
		annotationPlugin
	);

	let canvasEl: HTMLCanvasElement;
	let chart: Chart | null = null;

	// === Reference curve (same as your SVG path d) ===
	const lifecyclePathD =
		'M28 373C28 373 95.1179 348.784 129 318C178.51 273.017 182.966 224.437 224.5 172C264.5 121.5 297.12 105.433 363 99.5524C450.329 91.7576 508.119 110.483 572.5 170';

	type Pt = { x: number; y: number; len: number };

	function samplePath(d: string, n = 1200): Pt[] {
		const svgNS = 'http://www.w3.org/2000/svg';
		const path = document.createElementNS(svgNS, 'path');
		path.setAttribute('d', d);
		document.body.appendChild(path);
		const L = path.getTotalLength();
		const out: Pt[] = [];
		for (let i = 0; i <= n; i++) {
			const l = (i / n) * L;
			const p = path.getPointAtLength(l);
			out.push({ x: p.x, y: p.y, len: l });
		}
		path.remove();
		return out;
	}

	let samples: Pt[] = [];

	// === Helpers to find y on the sampled curve ===
	function yOnCurveAtX(x: number) {
		let best = samples[0],
			bestDx = Math.abs(samples[0].x - x);
		for (let i = 1; i < samples.length; i++) {
			const dx = Math.abs(samples[i].x - x);
			if (dx < bestDx) {
				bestDx = dx;
				best = samples[i];
			}
		}
		return best.y;
	}

	// === Band geometry (same as your SVG) ===
	const bands = {
		introduction: { x: 25, w: 130 },
		growth: { x: 165, w: 130 },
		maturity: { x: 305, w: 130 },
		decline: { x: 445, w: 130 }
	} as const;

	const X = {
		introduction: {
			early: bands.introduction.x + bands.introduction.w * 0.25,
			mid: bands.introduction.x + bands.introduction.w * 0.5,
			late: bands.introduction.x + bands.introduction.w * 0.75
		},
		growth: {
			early: bands.growth.x + bands.growth.w * 0.25,
			mid: bands.growth.x + bands.growth.w * 0.5,
			late: bands.growth.x + bands.growth.w * 0.75
		},
		maturity: {
			early: bands.maturity.x + bands.maturity.w * 0.25,
			mid: bands.maturity.x + bands.maturity.w * 0.5,
			late: bands.maturity.x + bands.maturity.w * 0.75
		},
		decline: {
			early: bands.decline.x + bands.decline.w * 0.25,
			mid: bands.decline.x + bands.decline.w * 0.5,
			late: bands.decline.x + bands.decline.w * 0.75
		}
	} as const;

	const stageByLetter = { A: 'introduction', B: 'growth', C: 'maturity', D: 'decline' } as const;

	// === Public API (called by parent) ===
	export function plotFromAnswers(answers: ('A' | 'B' | 'C' | 'D' | null)[]) {
		if (!chart || !samples.length) return;

		const counts = { A: 0, B: 0, C: 0, D: 0 };
		for (const a of answers) if (a) counts[a]++;

		const nonZero = Object.values(counts).filter((v) => v > 0).length;
		const fragmented = nonZero >= 3 && !Object.values(counts).includes(3);

		let summaryStage: keyof typeof X | 'fragmented' = 'fragmented';
		let summaryPosition: 'beginning' | 'end' | null = null;

		if (counts.A === 3) {
			summaryStage = 'introduction';
			summaryPosition = 'beginning';
		} else if (counts.A === 2 && counts.B === 1) {
			summaryStage = 'introduction';
			summaryPosition = 'end';
		} else if (counts.B === 3) {
			summaryStage = 'growth';
			summaryPosition = 'beginning';
		} else if (counts.B === 2 && counts.C === 1) {
			summaryStage = 'growth';
			summaryPosition = 'end';
		} else if (counts.C === 3) {
			summaryStage = 'maturity';
			summaryPosition = 'beginning';
		} else if (counts.C === 2 && counts.D === 1) {
			summaryStage = 'maturity';
			summaryPosition = 'end';
		} else if (counts.D === 3) {
			summaryStage = 'decline';
			summaryPosition = 'end';
		} else if (counts.D === 2) {
			summaryStage = 'decline';
			summaryPosition = 'beginning';
		} else if (fragmented) {
			summaryStage = 'fragmented';
			summaryPosition = null;
		} else {
			const max = Math.max(counts.A, counts.B, counts.C, counts.D);
			const letter = (Object.entries(counts).find(([, v]) => v === max)?.[0] ?? 'C') as
				| 'A'
				| 'B'
				| 'C'
				| 'D';
			summaryStage = stageByLetter[letter];
			summaryPosition = 'beginning';
		}

		const el =
			summaryStage === 'fragmented' ? 'mid' : summaryPosition === 'beginning' ? 'early' : 'late';
		const pickedStages = answers
			.filter(Boolean)
			.map((a) => stageByLetter[a as 'A' | 'B' | 'C' | 'D']);

		const pts = pickedStages.map((stg, i) => {
			if (summaryStage !== 'fragmented' && new Set(pickedStages).size === 1) {
				const baseX = X[stg][el as 'early' | 'late'];
				const x = baseX + [-6, 0, 6][i];
				return { x, y: yOnCurveAtX(x) };
			}
			const which =
				summaryStage !== 'fragmented' && stg === summaryStage ? (el as 'early' | 'late') : 'mid';
			const x = X[stg][which];
			return { x, y: yOnCurveAtX(x) };
		});

		chart.data.datasets[1].data = pts as any;
		chart.update();
	}

	onMount(() => {
		// Only runs in the browser (avoids SSR 500s)
		samples = samplePath(lifecyclePathD, 1200);

		chart = new Chart(canvasEl, {
			type: 'scatter',
			data: {
				datasets: [
					{
						label: 'Lifecycle Curve',
						data: samples.map((p) => ({ x: p.x, y: p.y })),
						showLine: true,
						pointRadius: 0,
						borderWidth: 2,
						borderColor: 'rgba(255,255,255,0.12)'
					},
					{
						label: 'Result',
						data: [],
						showLine: true,
						pointRadius: 5,
						borderWidth: 2,
						borderColor: '#10B981',
						backgroundColor: '#10B981'
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
				layout: { padding: 0 },
				scales: {
					x: {
						type: 'linear',
						min: 0,
						max: 600,
						grid: { display: false },
						ticks: { display: false }
					},
					y: {
						type: 'linear',
						min: 0,
						max: 400,
						reverse: true,
						grid: { display: false },
						ticks: { display: false }
					}
				},
				plugins: {
					legend: { display: false },
					tooltip: { mode: 'nearest', intersect: false },
					annotation: {
						annotations: {
							intro: {
								type: 'box',
								xMin: 25,
								xMax: 155,
								yMin: 25,
								yMax: 375,
								backgroundColor: 'rgba(229,231,235,0.10)',
								borderWidth: 0,
                            label: {
                                display: true,
                                content: 'INTRODUCTION',
                                position: { x: 'center', y: 'start' },
                                yAdjust: 16,
                                color: 'rgba(255,255,255,0.25)',
                                font: { family: 'Inter, system-ui, sans-serif', size: 10, weight: '600' },
                                backgroundColor: 'transparent',
                                padding: 0
                            }
							},
							growth: {
								type: 'box',
								xMin: 165,
								xMax: 295,
								yMin: 25,
								yMax: 375,
								backgroundColor: 'rgba(229,231,235,0.10)',
								borderWidth: 0,
                                label: {
                                display: true,
                                content: 'GROWTH',
                                position: { x: 'center', y: 'start' },
                                yAdjust: 16,
                                color: 'rgba(255,255,255,0.25)',
                                font: { family: 'Inter, system-ui, sans-serif', size: 10, weight: '600' },
                                backgroundColor: 'transparent',
                                padding: 0
                            }
							},
							maturity: {
								type: 'box',
								xMin: 305,
								xMax: 435,
								yMin: 25,
								yMax: 375,
								backgroundColor: 'rgba(229,231,235,0.10)',
								borderWidth: 0,
                                label: {
                                display: true,
                                content: 'MATURITY',
                                position: { x: 'center', y: 'start' },
                                yAdjust: 16,
                                color: 'rgba(255,255,255,0.25)',
                                font: { family: 'Inter, system-ui, sans-serif', size: 10, weight: '600' },
                                backgroundColor: 'transparent',
                                padding: 0
                            }
							},
							decline: {
								type: 'box',
								xMin: 445,
								xMax: 575,
								yMin: 25,
								yMax: 375,
								backgroundColor: 'rgba(229,231,235,0.10)',
								borderWidth: 0,
                                label: {
                                display: true,
                                content: 'DECLINE',
                                position: { x: 'center', y: 'start' },
                                yAdjust: 16,
                                color: 'rgba(255,255,255,0.25)',
                                font: { family: 'Inter, system-ui, sans-serif', size: 10, weight: '600' },
                                backgroundColor: 'transparent',
                                padding: 0
                            }
							}
						}
					}
				},
				elements: { line: { tension: 0 } }
			}
		});
	});

	onDestroy(() => {
		chart?.destroy();
		chart = null;
	});
</script>

<canvas bind:this={canvasEl} class="h-auto w-full"></canvas>
