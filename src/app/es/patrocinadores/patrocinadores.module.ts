import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { PatrocinadoresComponent } from './patrocinadores.component'

@NgModule({
  declarations: [PatrocinadoresComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: PatrocinadoresComponent }])],
})
export class PatrocinadoresModule {}
