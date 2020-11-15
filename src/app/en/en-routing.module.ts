import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: '',
        children: [
          {
            path: 'allies',
            loadChildren: () => import('./allies/allies.module').then((m) => m.AlliesModule),
          },
          {
            path: 'apply-now',
            loadChildren: () => import('./apply-now/apply-now.module').then((m) => m.ApplyNowModule),
          },
          {
            path: 'donations',
            loadChildren: () => import('./donations/donations.module').then((m) => m.DonationsModule),
          },
          {
            path: 'home',
            loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
          },
          {
            path: 'about-us',
            loadChildren: () => import('./about-us/about-us.module').then((m) => m.AboutUsModule),
          },
          {
            path: 'sponsors',
            loadChildren: () => import('./sponsors/sponsors.module').then((m) => m.SponsorsModule),
          },
        ],
      },
    ]),
  ],
})
export class EnRoutingModule {}
