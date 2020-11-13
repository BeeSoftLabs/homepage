import { Component, OnInit } from '@angular/core'
import { UiService } from '@app/ui'

@Component({
  template: ` <p>en/home</p> `,
})
export class HomeComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Home' })
  }
}
