import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ApplyNowComponent } from './apply-now.component'

@NgModule({
  declarations: [ApplyNowComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: ApplyNowComponent }])],
})
export class ApplyNowModule {}
