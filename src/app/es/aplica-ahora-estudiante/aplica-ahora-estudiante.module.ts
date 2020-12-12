import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AplicaAhoraEstudianteComponent } from './aplica-ahora-estudiante.component'

@NgModule({
  declarations: [AplicaAhoraEstudianteComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AplicaAhoraEstudianteComponent }])],
})
export class AplicaAhoraEstudianteModule {}
