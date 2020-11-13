import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AplicaAhoraComponent } from './aplica-ahora.component'

@NgModule({
  declarations: [AplicaAhoraComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AplicaAhoraComponent }])],
})
export class AplicaAhoraModule {}
