import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lang-switcher',
  template: ``,
})
export class LangSwitcherComponent {
  @Input() lang: 'en' | 'es' = 'es';
}
