import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DonationsComponent } from './donations.component'

@NgModule({
  declarations: [DonationsComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DonationsComponent }])],
})
export class DonationsModule {}
