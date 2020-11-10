import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <small [innerHTML]="text"></small>
    </footer>
  `,
})
export class FooterComponent {
  @Input() text?: string;
}
