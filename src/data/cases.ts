export interface Study {
  number: string; title: string; dek: string; intro: string; challenge: string;
  approach: string[]; result: string; tags: string[]; note: string;
}

export const cases: Record<string, Study> = {
  onvy: {
    number: '01', title: 'ONVY Mobile Health Platform', dek: 'Building and evolving a production health experience across mobile platforms.',
    intro: 'At ONVY HealthTech, I work across product engineering and mobile architecture, helping turn complex connected-health experiences into software people can rely on.',
    challenge: 'Health products combine evolving product requirements, multiple data sources, platform-specific behavior, privacy expectations, and a high bar for reliability. The engineering challenge is to make that complexity feel calm and coherent to the user.',
    approach: ['Create clear architectural boundaries so product work can evolve safely.', 'Treat iOS and Android as first-class platforms while sharing the right foundations.', 'Build quality, release confidence, and observability into everyday delivery.', 'Partner across product and engineering to turn ambiguity into shippable increments.'],
    result: 'A maintainable product foundation designed for steady iteration—balancing user experience, platform capability, and engineering sustainability.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Mobile architecture', 'Health integrations'], note: 'This case study intentionally stays at a high level and includes no confidential code, customer data, internal metrics, or proprietary architecture.'
  },
  'frontend-products': {
    number: '02', title: 'Frontend Product Engineering', dek: 'Building product interfaces across financial services, enterprise AI, and technology organizations.',
    intro: 'From 2017 to 2022, my frontend career in Munich included roles at ZEISS, DataRobot, and Finanzchef24—three different product contexts connected by the craft of making complex software clear and usable.',
    challenge: 'Frontend work changes with the domain, but the central responsibility remains consistent: translate product and technical complexity into interfaces that are understandable, maintainable, and dependable.',
    approach: ['Understand the product domain before choosing an interface solution.', 'Build reusable frontend foundations without losing sight of the user journey.', 'Collaborate across design, product, and engineering boundaries.', 'Balance iteration speed with code quality and long-term maintainability.'],
    result: 'A broad frontend perspective shaped by financial services, enterprise AI, and established technology products—and a stronger ability to adapt engineering decisions to the product in front of me.',
    tags: ['Frontend engineering', 'Product interfaces', 'Web', 'Munich'], note: 'This career overview is based on public role and employment information. It intentionally avoids private project details, internal technology claims, and non-public outcomes.'
  },
  'web-commerce': {
    number: '03', title: 'Web & Commerce Foundations', dek: 'Early frontend roles across customer-facing services and Magento e-commerce.',
    intro: 'My professional frontend foundation includes Vodafone International Services and RaceChip, where my role focused on frontend development and, at RaceChip, its Magento e-commerce website.',
    challenge: 'Customer-facing web and commerce experiences have a direct job to do. They need to communicate clearly, work reliably across browsers and devices, and support users through complete journeys rather than isolated screens.',
    approach: ['Treat responsive behavior and browser compatibility as product requirements.', 'Build interfaces around complete customer journeys.', 'Work within established platforms while improving the frontend experience.', 'Use each delivery cycle to deepen practical web engineering judgment.'],
    result: 'A practical foundation in frontend delivery and e-commerce that continues to shape how I approach product interfaces today.',
    tags: ['Frontend development', 'Magento', 'E-commerce', 'Responsive web'], note: 'This overview uses public employment information and the publicly stated RaceChip e-commerce focus. It contains no employer code, internal systems, or confidential results.'
  }
};
