
export type Letter = 'A' | 'B' | 'C' | 'D';
export type MaybeLetter = Letter | null;
export type Domain = 'sales' | 'team' | 'competition';

export type ResultContent = {
  title: string;
  summary: string; 
  sideEffects: string;    
  help: string;     
  cta?: { label: string; href: string };
};

const AAA_DISCOVERY: ResultContent = {
  title: 'Prove your worth',
  summary:
    'You’re squarely in Discovery, which is classically defined by high experimentation, low traction, and fast learning. At this stage, the goal isn’t scale or polish; it’s survival. Teams often confuse activity with progress here, but what truly matters is disciplined learning velocity.\n\nCommon symptoms of this phase include blurry or vague problem definition (pain points surface as broad themes rather than specific burning issues), unclear measures of success as the product continues to take shape, and frequent iterations that may not feel anchored to explicit hypotheses.',
  sideEffects:
    'Without deliberate test design, teams more easily mistake noise for signal and burn time on the wrong bets. “MVPs” inflate into mini-builds, learning slows, and the backlog fills with guesses instead of experiments. Morale may start to dip as effort outpaces insight.',
  help:
    'Zero-to-one experimentation is our specialty. We help teams channel pace into precision by establishing clear validation signals, aligning the backlog around assumptions and hypotheses, and turning every feature request into an experiment.\n\nWhen needed, we also provide execution support — from full-stack design and research synthesis to full-stack development.',
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const BBB_GROWTH: ResultContent = {
  title: 'Protect your (w)edge.',
  summary:
    'You’ve entered Growth phase, a notoriously optimistic yet subtly challenging period often called the messy middle. Customers are converting, demand is compounding, and the flywheel is finally turning. The challenge now is maintaining focus while scaling delivery, complexity, and expectations all at once.\n\nThis is where product–market fit meets organizational stress: what once felt nimble now starts to feel heavy under the weight of cross-team coordination, shifting priorities, and the first layers of process. The goal isn’t to slow down but instead to build the foundation for sustainable speed.',
  sideEffects:
  'Momentum and energy can sometimes mask a “death by a thousand cuts”: inconsistent UI, brittle error states, and experimental scaffolding that never got rebuilt. Individually harmless, together they compound into tech debt, sap engineering focus, and quietly erode user trust.',
  
  help:
    'We add just enough structure to scale: pay down the debt that hurts most, establish your first design system, tighten architecture for compliance, and reinforce a delivery culture that keeps customer signal at the center of every sprint.',
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const CCC_MATURITY: ResultContent = {
  title: 'Defend the core.',
  summary:
    'Welcome to Maturity: predictable revenue, strong margins, and deeply embedded customers. But stability creates a paradox. The same processes that protect your earned turf can quietly suffocate innovation.\n\nAs Marty Cagan notes, great product organizations balance two competing systems: the machine that delivers value today, and the discovery engine that defines tomorrow. The challenge now isn’t about resources or vision, it’s creating the conditions for both machines to thrive without impeding each other.',
  sideEffects:
    'When everything competes for the same backlog, urgency wins. Quick fixes crowd out meaningful bets, technical debt calcifies, experimentation slows, and the roadmap begins to feel small and meaningless.',
  help:
    'We restore the equilibrium, establishing a dual-track rhythm where discovery and delivery can work alongside and inform each other. Our work realigns teams around evidence-based prioritization, modernizes systems for faster learning, and introduces measured innovation that keeps your edge sharp while safeguarding the trust you’ve earned.',
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const DDD_DECLINE: ResultContent = {
  title: 'Reclaim the spark.',
  summary:
    'Growth is slowing, churn is rising, and the product that once led now feels reactive. You’ve entered Decline and although this may feel like the end of an era, it’s actually the perfect moment for renewal.\n\nEvery enduring product eventually drifts from its edge. Markets and technology evolve, teams optimize for maintenance, and the discovery engine that once fueled innovation goes quiet. The question now isn’t if you can recover but how fast you can rebuild momentum without breaking what still works.',
  sideEffects:
    'On the surface, technical debt can look like the biggest blocker to innovation in aging products. But in truth, the most common barrier we see at this stage is denial. The longer a team waits to confront drift, the harder it becomes to attract talent, retain customers, or inspire belief internally.\n\nStagnation compounds just like technical debt and if you wait too long to act it will become too expensive to undo.',
  help:
    'We help organizations engineer their comeback by re-establishing a healthy dual-track rhythm to product work. This means restoring the discovery engine alongside reliable delivery so innovation and improvement run parallel.\n\nWe act as a fractional R&D team: diagnosing where value has eroded, re-defining the product’s edge, and guiding a pragmatic reinvention that balances new bets with operational reality.',
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const FRAGMENTED: ResultContent = {
  title: 'Find the signal.',
  summary:
    'Your product is sending mixed messages. Sales, product, and competitive signals are out of sync. This fragmentation isn’t failure; it’s a symptom of growth without shared alignment. As Marty Cagan notes, strong product organizations align around problems to solve, not features to build.\n\nRight now, your teams may be trying to solve different problems at the same time, which makes market analysis and competitive positioning difficult to read',
  sideEffects:
    'When everything is a priority, nothing is. Teams burn out chasing conflicting goals, quality wobbles, and leadership loses clarity on what’s actually working. Small decisions pull in opposite directions and drift compounds.',
  help:
    'We help teams reconnect the dots between product, market, and delivery. We map cross-functional signals to surface where friction and duplication live in the product, then guide a structured reset that re-establishes shared priorities and rebuilds confidence in direction.\n\nThink of us as a fractional R&D and strategy partner: bringing the discipline of discovery back into the fold, tightly aligned with core delivery, so every team is learning from the same signals.',
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
};

// Partial alignments
const PARTIAL_COMPETITION_OFF: ResultContent = {
  title: 'Internal alignment, external drift.',
  summary:
    'Your team is building the right thing the right way, but the market isn’t rewarding it. Execution is strong, yet competitive dynamics have shifted faster than your learning loops. The landscape may now be too crowded, too empty, or simply moving in a different direction for traction to compound.',
  sideEffects:
    'Late-arriving market misfit: longer sales cycles, pricing pressure, and buyer confusion that polish can’t fix. Teams with this mismatch tend to double-down on delivery while the discovery engine stays quiet — reinforcing this gap.',
  help:
    'We help teams reconnect internal excellence with external truth. Through competitive analysis and rapid-fit validation, we test your product’s wedge against sharper opportunities and guide a repositioning that preserves focus while reigniting growth.\n\nOur goal is to re-establish a dual-track rhythm, keeping delivery strong while embedding discovery so your market insight compounds as fast as your execution.',
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const PARTIAL_TEAM_OFF: ResultContent = {
  title: 'Momentum without rhythm.',
  summary:
    'You’ve found your market and earned traction with sales and competition data signaling clear opportunity. But internal focus hasn’t kept pace. The opportunity is real, yet delivery rhythm, prioritization, or ownership gaps are holding back consistent execution.',
  sideEffects:
  'Roadmaps wobble, context switching multiplies, handoffs fray, and quality dips. Velocity can seem high on the surface but internally feels noisy and fractured; wins are hard to come by as every iteration feels more "just in time" than it should.',
  help:
    'We help teams translate external momentum into internal rhythm. That means tightening product learning loops, clarifying process, and aligning discovery and delivery around measurable signals so hard-won traction compounds.\n\nOur goal is to turn reactive energy into disciplined execution where every sprint reinforces your market advantage instead of eroding it.',
  cta: { label: 'Book conversation', href: '/contact#contact' }
};

const PARTIAL_SALES_OFF: ResultContent = {
  title: 'Strong story, weak signal.',
  summary:
    'Your team is focused and your market position makes sense, but sales aren’t following. The product story isn’t landing, the buyer path is unclear, or your commercial strategy hasn’t caught up. As Gibson Biddle notes: great products fail when the ‘delight gap’ between what’s built and what’s understood widens. You may be delivering real value, but the market can’t yet see it.',
  sideEffects:
   'Feature thrash, discount reflexes, and anecdotal feedback loops. Confidence erodes as teams debate root causes instead of instrumenting proof, breaking the link between discovery, delivery, and demand.',
  help:
    'We clarify your value signal by tightening the product narrative and reconnecting daily work to commercial outcomes. Our role is to rebuild the dual-track motion that creates a bridge between product and sales, ensuring your discovery insights flow through to how you sell, not just what you ship.',
  cta: { label: 'Book conversation', href: '/contact#contact' }
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
