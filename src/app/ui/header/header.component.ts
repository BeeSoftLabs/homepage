import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() lang: 'en' | 'es' = 'es'
  @Input() links: { label: string; path: string }[] = []
}
