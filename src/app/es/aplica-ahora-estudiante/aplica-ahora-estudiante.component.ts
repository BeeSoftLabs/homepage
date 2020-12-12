import { Component, OnInit } from '@angular/core'
import { UiService } from '@app/ui'

@Component({
  templateUrl: `./aplica-ahora-estudiante.component.html`,
})
export class AplicaAhoraEstudianteComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Aplica Ahora' })
  }
}
