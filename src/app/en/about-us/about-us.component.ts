import { Component, OnInit } from '@angular/core'
import { UiService } from '@app/ui'

@Component({
  template: ` <p>en/about-us</p> `,
})
export class AboutUsComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'About Us' })
  }
}
