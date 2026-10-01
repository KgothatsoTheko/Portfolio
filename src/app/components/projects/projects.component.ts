import { Component } from '@angular/core';
interface Project {
  name: string;
  category: string;
  kind: string;
  summary: string;
  stack: string;
  url: string;
  action: string;
  image?: string;
  mark?: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly filters = [
    'All work',
    'Software',
    'GTM & automation',
    'Salesforce',
    'Security',
  ];
  activeFilter = 'All work';
  readonly projects: Project[] = [
    {
      name: 'CampusHub',
      category: 'Software',
      kind: 'Hackathon-winning team project',
      summary:
        'A campus communication app bringing notices, events, a virtual student card, and JWT-based sign-in into one place.',
      stack: 'Ionic · Angular · REST APIs',
      url: 'https://groups.google.com/g/campushub-testers',
      action: 'Android testing page',
      image: 'assets/projects/project9.png',
    },
    {
      name: 'Beta-Tester Recruitment Engine',
      category: 'GTM & automation',
      kind: 'Developer sourcing workflow',
      summary:
        'A Python workflow that sources developer profiles with the GitHub API, enriches records in Clay, and exports them for outreach.',
      stack: 'Python · GitHub API · Clay · Smartlead',
      url: 'https://github.com/KgothatsoTheko/Beta-Tester-Recruitment-Engine',
      action: 'Explore the code',
      mark: 'find → enrich → connect',
    },
    {
      name: 'SA-Digital App',
      category: 'Software',
      kind: 'SA digital identity and license project',
      summary:
        'South African secure digital identity wallet with your profile photo, signature, optional driver license details, and mobile verification QR.',
      stack: 'Ionic · Angular · REST APIs',
      url: 'https://groups.google.com/g/campushub-testers',
      action: 'Android testing page',
      image: 'assets/projects/SA-Digital-logo1.png',
    },
    {
      name: 'Sales Dashboard',
      category: 'Salesforce',
      kind: 'CRM development project',
      summary:
        'An interactive view of sales data across Opportunities, Accounts, and Users, built with reusable Lightning components.',
      stack: 'LWC · Apex · SOQL · Reports',
      url: 'https://github.com/KgothatsoTheko/Sales-Dashboard-App-in-Salesforce-Lightning-Experience',
      action: 'Explore the code',
      mark: 'Data. Context. Decisions.',
    },
    {
      name: 'Focused Network',
      category: 'Software',
      kind: 'NGO mentorship & community platform',
      summary:
        'A mobile platform connecting mentorship, announcements, scheduling, and community coordination for Focused Network.',
      stack: 'Ionic · Angular · REST APIs',
      url: 'https://groups.google.com/g/focused-network-testers',
      action: 'Android testing page',
      image: 'assets/projects/project8.png',
    },
    {
      name: 'Account-Opportunity Interface',
      category: 'Salesforce',
      kind: 'Connected CRM records',
      summary:
        'A Visualforce interface that brings related Accounts and Opportunities into one view, with Apex controllers and SOQL queries.',
      stack: 'Visualforce · Apex · SOQL',
      url: 'https://github.com/KgothatsoTheko/Visualforce-Account-Opportunity-Interface-Salesforce',
      action: 'Explore the code',
      mark: 'One view. Related records.',
    },
    {
      name: 'OSINT Information Gathering',
      category: 'Security',
      kind: 'Security learning project',
      summary:
        'Python-based information gathering and reconnaissance automation, developed as part of my security learning.',
      stack: 'Python · OSINT · Reconnaissance',
      url: 'https://github.com/KgothatsoTheko/OSINT-Information-Gathering-Script',
      action: 'Explore the code',
      mark: 'Observe. Investigate. Understand.',
    },
  ];
  readonly archive = [
    {
      name: 'SA-Digital Portal',
      note: 'Digital identity & document-verification project',
      url: 'https://sa-digital-portal.web.app/',
    },
    {
      name: '1947 on Vilakazi Street',
      note: 'Restaurant website with online booking',
      url: 'https://nineteen47onvilakazistreet.web.app/',
    },
    {
      name: 'Lead & Opportunity Tracking',
      note: 'Salesforce data, validation, and reporting',
      url: 'https://github.com/KgothatsoTheko/Lead-Opportunity-Tracking-System-Salesforce',
    },
    {
      name: 'FAN Mobile Hair Salon',
      note: 'Web project',
      url: 'https://fan-mobile.web.app/',
    },
    {
      name: '4WM Innovations',
      note: 'Web project',
      url: 'https://fourwminnovations.web.app/',
    },
    {
      name: 'Bakkie For Hire',
      note: 'Web project',
      url: 'https://bakkieforhire-v1.web.app/',
    },
    {
      name: 'cashFlow',
      note: 'Android testing page',
      url: 'https://play.google.com/apps/testing/za.co.varsitycollege.st10092141.cashflow_v1',
    },
    {
      name: 'Weather App',
      note: 'Web application',
      url: 'https://kgothatsotheko.github.io/myWeatherApp/',
    },
    {
      name: 'Basic Port Scanner',
      note: 'Python security learning project',
      url: 'https://github.com/KgothatsoTheko/basicScanner-EH-Project',
    },
    {
      name: 'Random Quiz',
      note: 'Web application',
      url: 'https://kgothatsotheko.github.io/randomQuizApp/',
    },
    {
      name: 'CitizenHelper',
      note: 'WPF application',
      url: 'https://github.com/KgothatsoTheko/citizenHelper',
    },
  ];
  get visibleProjects(): Project[] {
    return this.activeFilter === 'All work'
      ? this.projects
      : this.projects.filter(
          (project) => project.category === this.activeFilter,
        );
  }
}
