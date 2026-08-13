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
  'whitelabel-platform': {
    number: '02', title: 'Whitelabel Platform', dek: 'Creating shared product foundations without erasing what makes each experience distinct.',
    intro: 'Multi-product systems create a deceptively hard problem: reuse enough to move quickly, while preserving the flexibility each product needs.',
    challenge: 'When visual identity, content, feature availability, and platform behavior vary, ordinary reuse can become a maze of branches. The goal is a system that makes variation intentional and visible.',
    approach: ['Separate stable product capabilities from brand and market configuration.', 'Use design tokens and shared primitives to keep experiences coherent.', 'Make extension points explicit instead of accumulating one-off conditions.', 'Keep build and release paths repeatable as the product family grows.'],
    result: 'A platform mindset that reduces drift, clarifies ownership, and makes the next product variation less expensive than the last.',
    tags: ['Product platforms', 'Design systems', 'Configuration', 'Mobile'], note: 'The examples are generalized to protect employer intellectual property and describe reusable engineering principles rather than an internal implementation.'
  },
  'engineering-systems': {
    number: '03', title: 'Engineering Systems', dek: 'Improving the path from an idea to a reliable, observable release.',
    intro: 'The software around the product—tooling, checks, release automation, conventions, and feedback loops—has a direct effect on what a team can ship.',
    challenge: 'As products and teams grow, slow or fragile delivery paths quietly tax every change. Small inconsistencies compound into longer reviews, riskier releases, and less time for meaningful product work.',
    approach: ['Automate repeatable checks where they give fast, useful feedback.', 'Design release workflows for confidence, traceability, and recovery.', 'Standardize the common path while leaving room for informed exceptions.', 'Use production feedback to guide engineering priorities.'],
    result: 'A healthier delivery system: shorter feedback loops, clearer release practices, and more attention available for product decisions.',
    tags: ['CI/CD', 'Release engineering', 'Quality', 'Observability'], note: 'This narrative is intentionally technology-agnostic where implementation details are not public.'
  }
};
