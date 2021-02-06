import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AplicaAhoraMentorComponent } from './aplica-ahora-mentor.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [AplicaAhoraMentorComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AplicaAhoraMentorComponent }])],
})
export class AplicaAhoraMentorModule {}
