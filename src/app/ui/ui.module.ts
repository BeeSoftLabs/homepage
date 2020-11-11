import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LangSwitcherComponent } from './lang-switcher/lang-switcher.component';
import { LayoutComponent } from './layout/layout.component';
import { UiService } from './ui.service';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    LangSwitcherComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [UiService],
})
export class UiModule {}