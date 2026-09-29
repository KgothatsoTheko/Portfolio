import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  isDark = false;
  menuOpen = false;
  readonly menuItems = [
    { label: 'Work', target: 'projects' },
    { label: 'About', target: 'about' },
    { label: 'What I do', target: 'services' },
    { label: 'Contact', target: 'contact' },
  ];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    try {
      this.isDark = localStorage.getItem('kg-theme') === 'dark';
    } catch {
      this.isDark = false;
    }
    this.applyTheme();
  }
  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.applyTheme();
    try {
      localStorage.setItem('kg-theme', this.isDark ? 'dark' : 'light');
    } catch {
      /* Theme works even when storage is unavailable. */
    }
  }
  private applyTheme(): void {
    document.body.classList.toggle('dark', this.isDark);
    this.api.setTheme(this.isDark);
  }
  closeMenu(): void {
    this.menuOpen = false;
  }
  @HostListener('document:keydown.escape') onEscape(): void {
    if (this.menuOpen) {
      this.closeMenu();
      document.getElementById('menu-toggle')?.focus();
    }
  }
}
