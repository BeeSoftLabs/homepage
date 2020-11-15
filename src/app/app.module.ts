import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { routes } from './app-routing.module'
import { AppComponent } from './app.component'
import { UiModule } from './ui/ui.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
    UiModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
