import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AliadosComponent } from './aliados.component'

@NgModule({
  declarations: [AliadosComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AliadosComponent }])],
})
export class AliadosModule {}
