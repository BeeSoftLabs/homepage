import { Component, OnInit } from '@angular/core'
import { UiService } from '@app/ui'

@Component({
  templateUrl: `./aliados.component.html`,
})
export class AliadosComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Aliados' })
  }
}
