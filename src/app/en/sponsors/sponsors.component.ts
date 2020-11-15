import { Component, OnInit } from '@angular/core'
import { UiService } from '@app/ui'

@Component({
  template: ` <p>en/sponsors</p> `,
})
export class SponsorsComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Sponsors' })
  }
}
