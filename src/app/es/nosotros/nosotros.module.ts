import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { NosotrosComponent } from './nosotros.component'

@NgModule({
  declarations: [NosotrosComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: NosotrosComponent }])],
})
export class NosotrosModule {}
