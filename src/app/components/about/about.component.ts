import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly experience = [
    {
      company: 'Inboxly LLC',
      role: 'Technical Account Manager / GTM Strategist',
      date: 'Feb 2026 — Present',
      description:
        'Translate client requirements into Clay workflows and outreach campaigns. Coordinate onboarding, delivery, and performance tracking for approximately 25 B2B software clients.',
    },
    {
      company: 'KÁRITA Education Services',
      role: 'Systems Integration Specialist',
      date: 'Jun 2025 — Present',
      description:
        'Build administrative software with Vue.js, Node.js, and PostgreSQL. Connect business APIs, automate recurring work, and improve the code and interfaces people depend on.',
    },
    {
      company: 'Heidi Systems',
      role: 'Junior Engineer',
      date: 'Jan 2026 — Feb 2026',
      description:
        'Contributed to a Next.js utility-monitoring dashboard: Supabase account workflows, responsive interfaces, configurable charts, and email templates for Make automation.',
    },
    {
      company: 'Project Y',
      role: 'Salesforce Developer Candidate',
      date: 'Jul 2025 — Dec 2025',
      description:
        'Built Salesforce projects using Apex, SOQL, Visualforce, and LWC, alongside custom objects, validation rules, automation, and reporting.',
    },
    {
      company: 'Hack Secure',
      role: 'Cyber Security Intern',
      date: 'Apr 2025 — May 2025',
      description:
        'Practised penetration testing, reconnaissance, traffic analysis, and vulnerability assessment through hands-on exercises and CTF challenges.',
    },
    {
      company: 'Cognifyz Technologies',
      role: 'C/C++ Programming Intern',
      date: 'Mar 2025 — Apr 2025',
      description:
        'Developed and debugged C/C++ applications using core programming concepts, data structures, and algorithms.',
    },
    {
      company: 'Neutrinos',
      role: 'Software Engineer Intern',
      date: 'May 2024 — Sep 2024',
      description:
        'Worked on low-code platform features, Node.js APIs, cloud integrations, and GitHub Actions delivery workflows.',
    },
    {
      company: 'Afrika Tikkun Services',
      role: 'Full-Stack Web Development Candidate',
      date: 'Nov 2023 — Apr 2024',
      description:
        'Built MEAN-stack applications through practical training, including responsive interfaces and database query improvements.',
    },
  ];
}
