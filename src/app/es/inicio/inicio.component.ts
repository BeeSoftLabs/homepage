import { Component, OnInit } from '@angular/core';
import { UiService } from '@app/ui';

@Component({
  template: `
    <p>
      es/inicio
    </p>
  `,
})
export class InicioComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Inicio' });
  }
}
