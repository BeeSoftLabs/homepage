import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "inicio"
      },
      {
        path: "",
        component: LayoutComponent,
        children: [
        {
          path: "inicio",
          loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
        }
      ]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}