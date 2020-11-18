import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-layout',
  template: `
    <div class="flex flex-col h-screen justify-between">
      <app-header [lang]="lang$ | async" [links]="links$ | async"></app-header>
      <div class="flex-grow">
        <router-outlet></router-outlet>
      </div>
      <app-footer [text]="footerText$ | async"></app-footer>
    </div>
  `,
})
export class LayoutComponent {
  public readonly footerText$ = this.route.data.pipe(map((res) => res.footerText))
  public readonly links$ = this.route.data.pipe(map((res) => res.links))
  public readonly lang$ = this.route.data.pipe(map((res) => res.lang))
  constructor(private readonly route: ActivatedRoute) {}
}
