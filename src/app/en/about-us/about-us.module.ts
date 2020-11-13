import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AboutUsComponent } from './about-us.component'

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: AboutUsComponent }])],
})
export class AboutUsModule {}
