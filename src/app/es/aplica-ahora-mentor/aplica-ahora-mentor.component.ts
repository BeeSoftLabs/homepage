import { Component, OnInit } from '@angular/core'
import { UiService } from '@app/ui'

@Component({
  selector: 'app-aplica-ahora-mentor',
  templateUrl: './aplica-ahora-mentor.component.html',
  styleUrls: ['./aplica-ahora-mentor.component.scss'],
})
export class AplicaAhoraMentorComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Aplica Ahora' })
  }
}
