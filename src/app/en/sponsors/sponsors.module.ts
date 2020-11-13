import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SponsorsComponent } from './sponsors.component'

@NgModule({
  declarations: [SponsorsComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: SponsorsComponent }])],
})
export class SponsorsModule {}
