import { Component, OnInit } from '@angular/core'
import { UiService } from '@app/ui'

@Component({
  templateUrl: `./nosotros.component.html`,
})
export class NosotrosComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  team: { name: string; position: string; avatarUrl: string }[] = [
    { name: 'Bram Borggreve', position: 'Fundador', avatarUrl: 'assets/team/beeman.png' },
    { name: 'David Londoño', position: 'Staff', avatarUrl: 'assets/team/david.png' },
    { name: 'Angel Velez', position: 'Staff', avatarUrl: 'assets/team/angel.png' },
    { name: 'Arturo Dangond', position: 'Staff', avatarUrl: 'assets/team/arturo.png' },
    { name: 'Derlys Dominguez', position: 'Staff', avatarUrl: 'assets/team/derlys.png' },
  ]

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Nosotros' })
  }
}
