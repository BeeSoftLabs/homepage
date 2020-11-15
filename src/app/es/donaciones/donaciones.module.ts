import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { DonacionesComponent } from './donaciones.component'

@NgModule({
  declarations: [DonacionesComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DonacionesComponent }])],
})
export class DonacionesModule {}
