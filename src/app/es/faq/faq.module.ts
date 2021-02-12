import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FaqComponent } from './faq.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [FaqComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: FaqComponent }])],
})
export class FaqModule {}
