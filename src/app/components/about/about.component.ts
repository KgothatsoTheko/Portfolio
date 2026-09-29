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
      logo: '../../../../assets/exp/inboxlyai_logo.jpg',
      role: 'Technical Account Manager / GTM Strategist',
      date: 'Feb 2026 — Present',
      description:
        'Translate client requirements into Clay workflows and outreach campaigns. Coordinate onboarding, delivery, and performance tracking for approximately 25 B2B software clients.',
    },
    {
      company: 'KÁRITA Education Services',
      logo: '../../../../assets/exp/karita_ed_logo.jpg',
      role: 'Systems Integration Specialist',
      date: 'Jun 2025 — Present',
      description:
        'Build administrative software with Vue.js, Node.js, and PostgreSQL. Connect business APIs, automate recurring work, and improve the code and interfaces people depend on.',
    },
    {
      company: 'Heidi Systems',
      logo: '../../../../assets/exp/Heidi-logo.jpg',
      role: 'Junior Engineer',
      date: 'Jan 2026 — Feb 2026',
      description:
        'Contributed to a Next.js utility-monitoring dashboard: Supabase account workflows, responsive interfaces, configurable charts, and email templates for Make automation.',
    },
    { company: 'MetBrains Inc.', 
      logo: '../../../../assets/exp/Metbrains-logo.jpg', 
      role: 'Cyber Security Intern', 
      date: 'Oct 2025 — Dec 2025', 
      description: 'Applied penetration testing, vulnerability assessment, reconnaissance, and social engineering techniques. Built a Python file-signature analyzer for malware triage and compared Windows Server vulnerabilities using Nessus and OpenVAS.', 
    },
    {
      company: 'Project Y',
      logo: '../../../../assets/exp/projecty_logo.jpg',
      role: 'Salesforce Developer Candidate',
      date: 'Jul 2025 — Dec 2025',
      description:
        'Built Salesforce projects using Apex, SOQL, Visualforce, and LWC, alongside custom objects, validation rules, automation, and reporting.',
    },
    {
      company: 'Hack Secure',
      logo: '../../../../assets/exp/hacksecureofficial_logo.jpeg',
      role: 'Cyber Security Intern',
      date: 'Apr 2025 — May 2025',
      description:
        'Practised penetration testing, reconnaissance, traffic analysis, and vulnerability assessment through hands-on exercises and CTF challenges.',
    },
    {
      company: 'Cognifyz Technologies',
      logo: '../../../../assets/exp/cognifyz_techonologies_logo.jpeg',
      role: 'C/C++ Programming Intern',
      date: 'Mar 2025 — Apr 2025',
      description:
        'Developed and debugged C/C++ applications using core programming concepts, data structures, and algorithms.',
    },
    {
      company: 'Neutrinos',
      logo: '../../../../assets/exp/neutrinos.jpeg',
      role: 'Software Engineer Intern',
      date: 'May 2024 — Sep 2024',
      description:
        'Worked on low-code platform features, Node.js APIs, cloud integrations, and GitHub Actions delivery workflows.',
    },
    {
      company: 'Afrika Tikkun Services',
      logo: '../../../../assets/exp/afrikatikkun.jpeg',
      role: 'Full-Stack Web Development Candidate',
      date: 'Nov 2023 — Apr 2024',
      description:
        'Built MEAN-stack applications through practical training, including responsive interfaces and database query improvements.',
    },
  ];
}
