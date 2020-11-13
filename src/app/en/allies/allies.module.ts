import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AlliesComponent } from './allies.component'

@NgModule({
  declarations: [AlliesComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AlliesComponent }])],
})
export class AlliesModule {}
