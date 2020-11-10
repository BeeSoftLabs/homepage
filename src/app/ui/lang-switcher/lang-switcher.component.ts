import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lang-switcher',
  template: `
    <small>
      <a routerLink="/en" *ngIf="lang === 'es'">English</a>
      <a routerLink="/es" *ngIf="lang === 'en'">Spanish</a>
    </small>
  `,
})
export class LangSwitcherComponent {
  @Input() lang: 'en' | 'es' = 'es';
}
