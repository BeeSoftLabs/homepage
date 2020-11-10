import { Component, OnInit } from '@angular/core';
import { UiService } from '@app/ui';

@Component({
  template: `
    <p>
      es/aplica-ahora
    </p>
  `,
})
export class AplicaAhoraComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Aplica Ahora' });
  }
}
