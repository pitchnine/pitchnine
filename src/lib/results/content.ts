
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
    'You’re squarely in Discovery, which is classically defined by high experimentation, low traction, and fast learning. At this stage, the goal isn’t scale or polish; it’s survive long enough to keep trying. Teams often confuse activity with progress here, but what truly matters is disciplined learning velocity.\n\nCommon symptoms of this phase include blurry or vague problem definition (pain points surface as broad themes rather than specific burning issues), unclear measures of success as the product continues to take shape, and frequent iterations that may not feel anchored to explicit hypotheses.',
  risks:
    'You’re skating a thin line between insight and chaos. Move too fast and you’ll mistake noise for signal; move too slow and you’ll lose your only real advantage (speed of insight). Many teams in this phase over-index on manic building instead of rapid testing, or misinterpret what truly qualifies as an MVP experience.\n\nAs Cagan often says: ‘Validate the problem before you validate the solution,’ and in an era of AI agents and no-code platforms, there are more ways than ever to make your bets feel real without sinking precious time into building in the wrong direction.',
  help:
    'Zero-to-one is our specialty. Pitch Nine’s partners have built their careers proving and validating early theories and ideas. We help teams channel pace into precision by establishing clear validation signals, aligning the backlog around assumptions and hypotheses, and turning every feature request into an experiment.\n\nWhen needed, we also provide execution support — from full-stack design and research synthesis to full-stack development.',
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const BBB_GROWTH: ResultContent = {
  title: 'Protect your (w)edge',
  summary:
    'You’ve entered Growth phase, a notoriously optimistic yet subtly challenging period often called the messy middle. Customers are converting, demand is compounding, and the flywheel is finally turning. The challenge now is maintaining focus while scaling delivery, complexity, and expectations all at once.\n\nThis is where product–market fit meets organizational stress: what once felt nimble now starts to feel heavy under the weight of cross-team coordination, shifting priorities, and the first layers of process. The goal isn’t to slow down but instead to build the foundation for sustainable speed.',
  risks:
    'Momentum can mask cracks in the product experience. These cracks are what we often call "death by a thousand cuts" moments. They appear quickly and quietly: inconsistent styling in form fields, broken error states, or messy architecture left over from early experimentation. Individually, they seem harmless; together, they accumulate into mounting tech debt.',
  
  help:
    'We help you introduce just enough structure to scale properly: paying down the most hurtful debt today to help you scale tomorrow, shaping your first design system, tightening architecture to remain compliant, and reinforcing a delivery culture that keeps customer signal at the center of every sprint.',
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const CCC_MATURITY: ResultContent = {
  title: 'Defend the core',
  summary:
    'Welcome to Maturity: predictable revenue, strong margins, and deeply embedded customers. But stability creates a paradox. The same processes that protect your earned turf can quietly suffocate innovation.\n\nAs Marty Cagan notes, great product organizations balance *two competing systems*: the machine that delivers value today, and the discovery engine that defines tomorrow. The challenge now isn’t about resources or vision, it’s creating the conditions for both to thrive without impeding each other.',
  risks:
    'When everything competes for the same backlog priority, urgency always wins. Technical debt accumulates under the surface, “quick fixes” crowd out meaningful bets, and the roadmap becomes a mirror of the past instead of a map to the future.',
  help:
    'We specialize in restoring the equilibrium, establishing a dual-track rhythm where discovery and delivery can work alongside and inform each other. Our work realigns teams around evidence-based prioritization, modernizes systems for faster learning, and introduces measured innovation that keeps your edge sharp while safeguarding the trust you’ve earned.',
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const DDD_DECLINE: ResultContent = {
  title: 'Reclaim the spark',
  summary:
    'You’re in Decline — slowing growth, rising churn, and a product that’s lost its edge. This isn’t the end; it’s the moment for renewal, and the next move decides whether you sunset or engineer a comeback.',
  risks:
    'The biggest risk isn’t failure — it’s denial. Waiting to reframe erodes morale, talent, and opportunity at the same time.',
  help:
    'We guide strategic restart — diagnosing where value eroded, designing a renewal plan, and leading the transition from slow decline to sustainable reinvention.',
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const FRAGMENTED: ResultContent = {
  title: 'Find the signal',
  summary:
    'Your product is sending mixed messages — sales, team focus, and market signals don’t agree. Some parts are experimenting while others are preparing for scale or decline, creating a blur of effort that hides opportunity.',
  risks:
    'When everything’s important, nothing is. Teams burn out chasing conflicting goals while leadership loses clarity on what’s actually working.',
  help:
    'We map signals across product, market, and delivery to expose real friction, then guide a reset that unifies priorities and rebuilds confidence in direction.',
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
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
  cta: { label: 'Book conversation', href: 'https://cal.com/joellstocchero/30min' }
};

const PARTIAL_TEAM_OFF: ResultContent = {
  title: 'Momentum without rhythm',
  summary:
    'You’ve found your market and earned traction — but internal focus hasn’t kept pace. The opportunity is real, yet delivery rhythm or prioritization is holding back consistent execution.',
  risks:
    'Misalignment between opportunity and delivery quietly stalls growth. When teams chase urgency without clarity, quality dips and velocity becomes noise.',
  help:
    'We rebuild delivery rhythm — tightening product operations, clarifying ownership, and reframing goals around measurable signals so hard-won traction compounds.',
  cta: { label: 'Book conversation', href: '/contact#contact' }
};

const PARTIAL_SALES_OFF: ResultContent = {
  title: 'Strong story, weak signal',
  summary:
    'Your team is focused and your market position makes sense — but sales aren’t following. The product story isn’t landing, the buyer path is unclear, or commercial strategy hasn’t caught up.',
  risks:
    'When sales lag strategy, teams over-rotate on features while leadership loses confidence in what’s blocking growth.',
  help:
    'We clarify your value signal — tightening the product narrative, aligning GTM with buyer behavior, and reconnecting daily work to commercial outcomes.',
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
