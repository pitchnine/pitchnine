
export type Letter = 'A' | 'B' | 'C' | 'D';
export type MaybeLetter = Letter | null;
export type Domain = 'sales' | 'team' | 'competition';

export type ResultContent = {
  title: string;
  summary: string; 
  risks: string;    
  help: string;     
  cta?: { label: string; href: string };
};

const AAA_DISCOVERY: ResultContent = {
  title: 'Prove your worth.',
  summary:
    'You’re squarely in Discovery, high experimentation, low traction, and fast learning. This is the phase where disciplined velocity matters most: every iteration should move you closer to proof, not just motion.',
  risks:
    'You’re operating on thin ice between insight and chaos. Move too fast and you’ll misread noise as signal; move too slow and you’ll lose the one advantage that matters — speed.',
  help:
    'We help early teams turn pace into precision — establishing the right validation signals, aligning every backlog item to measurable learning, and embedding disciplined product cycles that turn momentum into proof.',
  cta: { label: 'Continue the conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const BBB_GROWTH: ResultContent = {
  title: 'Protect your edge',
  summary:
    'You’ve hit Growth — customers are converting, demand is compounding, and the flywheel is turning. The real challenge now is keeping focus as you scale delivery, complexity, and expectations all at once.',
  risks:
    'Momentum hides cracks. Without clarity and prioritization, growth turns into noise — more people, more features, but less signal.',
  help:
    'We help growth-stage teams scale without drift — building the systems, ownership models, and delivery rhythms that protect your edge while preparing you to expand into the next market with confidence.',
  cta: { label: 'Continue the conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const CCC_MATURITY: ResultContent = {
  title: 'Defend the core',
  summary:
    'You’re firmly in Maturity — predictable revenue, clear market position, and deeply embedded customers. Stability has a shelf life; growth now depends on efficiency, innovation, and defending the core from disruption.',
  risks:
    'Success can breed stagnation. If process overtakes purpose, you’ll optimize yesterday’s wins instead of creating tomorrow’s advantage.',
  help:
    'We modernize from within — aligning teams to fresh value signals, pruning low-impact work, and introducing measured innovation that keeps your advantage sharp without disrupting operations.',
  cta: { label: 'Continue the conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const DDD_DECLINE: ResultContent = {
  title: 'Reclaim the spark',
  summary:
    'You’re in Decline — slowing growth, rising churn, and a product that’s lost its edge. This isn’t the end; it’s the moment for renewal, and the next move decides whether you sunset or engineer a comeback.',
  risks:
    'The biggest risk isn’t failure — it’s denial. Waiting to reframe erodes morale, talent, and opportunity at the same time.',
  help:
    'We guide strategic restart — diagnosing where value eroded, designing a renewal plan, and leading the transition from slow decline to sustainable reinvention.',
  cta: { label: 'Continue the conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const FRAGMENTED: ResultContent = {
  title: 'Find the signal',
  summary:
    'Your product is sending mixed messages — sales, team focus, and market signals don’t agree. Some parts are experimenting while others are preparing for scale or decline, creating a blur of effort that hides opportunity.',
  risks:
    'When everything’s important, nothing is. Teams burn out chasing conflicting goals while leadership loses clarity on what’s actually working.',
  help:
    'We map signals across product, market, and delivery to expose real friction, then guide a reset that unifies priorities and rebuilds confidence in direction.',
  cta: { label: 'Continue the conversation', href: 'https://cal.com/joellstocchero/30min' }
};

// Partial alignments
const PARTIAL_COMPETITION_OFF: ResultContent = {
  title: 'Right product, wrong arena',
  summary:
    'Your team is building the right thing the right way — but the market isn’t rewarding it. Execution is strong, yet the competitive landscape is too crowded or too cold for traction to compound.',
  risks:
    'Strong teams can waste years perfecting a product in the wrong fight. Market misfit shows up late — in sales slowdowns, pricing pressure, or buyer confusion.',
  help:
    'We test your advantage against sharper wedges — uncovering markets where your strengths differentiate, and guiding repositioning that preserves focus while reigniting growth.',
  cta: { label: 'Continue the conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const PARTIAL_TEAM_OFF: ResultContent = {
  title: 'Momentum without rhythm',
  summary:
    'You’ve found your market and earned traction — but internal focus hasn’t kept pace. The opportunity is real, yet delivery rhythm or prioritization is holding back consistent execution.',
  risks:
    'Misalignment between opportunity and delivery quietly stalls growth. When teams chase urgency without clarity, quality dips and velocity becomes noise.',
  help:
    'We rebuild delivery rhythm — tightening product operations, clarifying ownership, and reframing goals around measurable signals so hard-won traction compounds.',
  cta: { label: 'Continue the conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const PARTIAL_SALES_OFF: ResultContent = {
  title: 'Strong story, weak signal',
  summary:
    'Your team is focused and your market position makes sense — but sales aren’t following. The product story isn’t landing, the buyer path is unclear, or commercial strategy hasn’t caught up.',
  risks:
    'When sales lag strategy, teams over-rotate on features while leadership loses confidence in what’s blocking growth.',
  help:
    'We clarify your value signal — tightening the product narrative, aligning GTM with buyer behavior, and reconnecting daily work to commercial outcomes.',
  cta: { label: 'Continue the conversation', href: 'https://cal.com/joellstocchero/30min' }
};


// Classifier
// --------------------

type Classification =
  | { kind: 'high_alignment'; stage: Letter }
  | { kind: 'fragmented' }
  | { kind: 'partial'; misalignedDomain: Domain; dominant: Letter }
  | { kind: 'incomplete' };

export function classify(answers: MaybeLetter[]): Classification {
  const [q1, q2, q3] = answers;
  if (!q1 || !q2 || !q3) return { kind: 'incomplete' };

  // High alignment
  if (q1 === q2 && q2 === q3) {
    return { kind: 'high_alignment', stage: q1 };
  }

  // Fragmented (all different)
  const uniq = new Set([q1, q2, q3]);
  if (uniq.size === 3) {
    return { kind: 'fragmented' };
  }

  // Partial (two the same, one different)
  // Domains: q1=sales, q2=team, q3=competition
  // Determine dominant letter and which domain deviates
  const counts: Record<Letter, number> = { A: 0, B: 0, C: 0, D: 0 };
  [q1, q2, q3].forEach(l => { if (l) counts[l]++; });
  const dominant = (Object.keys(counts) as Letter[]).reduce((acc, k) =>
    counts[k] > counts[acc] ? k : acc, 'A');

  let misalignedDomain: Domain | null = null;
  if (q1 !== q2 && q1 !== q3 && q2 === q3) misalignedDomain = 'sales';
  else if (q2 !== q1 && q2 !== q3 && q1 === q3) misalignedDomain = 'team';
  else if (q3 !== q1 && q3 !== q2 && q1 === q2) misalignedDomain = 'competition';

  if (misalignedDomain) return { kind: 'partial', misalignedDomain, dominant };
  return { kind: 'fragmented' }; // safe catch-all
}

// Selector
// --------------------

export function selectContent(answers: MaybeLetter[]): ResultContent {
  const c = classify(answers);

  if (c.kind === 'high_alignment') {
    switch (c.stage) {
      case 'A': return AAA_DISCOVERY;
      case 'B': return BBB_GROWTH;
      case 'C': return CCC_MATURITY;
      case 'D': return DDD_DECLINE;
    }
  }

  if (c.kind === 'fragmented') return FRAGMENTED;

  if (c.kind === 'partial') {
    switch (c.misalignedDomain) {
      case 'competition': return PARTIAL_COMPETITION_OFF; // sales+team aligned
      case 'team':        return PARTIAL_TEAM_OFF;        // sales+competition aligned
      case 'sales':       return PARTIAL_SALES_OFF;       // team+competition aligned
    }
  }

  return FALLBACK;
}
