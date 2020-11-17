import { Component, OnInit } from '@angular/core'
import { UiService } from '@app/ui'

@Component({
  templateUrl: `./nosotros.component.html`,
})
export class NosotrosComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  // tslint:disable-next-line: no-any
  team: Array<any> = [
    { name: 'Lorem ipsum', position: 'Mentor' },
    { name: 'Lorem ipsum', position: 'CEO' },
    { name: 'Lorem ipsum', position: 'Staff' },
    { name: 'Lorem ipsum', position: 'Volunteer' },
  ]

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Nosotros' })
  }
}
