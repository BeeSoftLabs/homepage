import { Component, OnInit } from '@angular/core';
import { UiService } from '@app/ui';

@Component({
  template: `
    <p>
      es/donaciones
    </p>
  `,
})
export class DonacionesComponent implements OnInit {
  constructor(private readonly ui: UiService) {}

  public ngOnInit(): void {
    this.ui.setMetaData({ title: 'Donaciones' });
  }
}
