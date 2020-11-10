import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [NavbarComponent, LayoutComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
