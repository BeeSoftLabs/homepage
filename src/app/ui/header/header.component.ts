import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div>
      <ng-container *ngFor="let link of links">
        <a [routerLink]="link.path">{{ link.label }}</a> &nbsp;
      </ng-container>
    </div>
  `,
})
export class HeaderComponent {
  @Input() links: { label: string; path: string }[] = [];
}
