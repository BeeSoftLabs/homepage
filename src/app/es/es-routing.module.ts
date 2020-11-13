import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'inicio' },
      {
        path: '',
        children: [
          {
            path: 'aliados',
            loadChildren: () => import('./aliados/aliados.module').then((m) => m.AliadosModule),
          },
          {
            path: 'aplica-ahora',
            loadChildren: () => import('./aplica-ahora/aplica-ahora.module').then((m) => m.AplicaAhoraModule),
          },
          {
            path: 'donaciones',
            loadChildren: () => import('./donaciones/donaciones.module').then((m) => m.DonacionesModule),
          },
          {
            path: 'inicio',
            loadChildren: () => import('./inicio/inicio.module').then((m) => m.InicioModule),
          },
          {
            path: 'nosotros',
            loadChildren: () => import('./nosotros/nosotros.module').then((m) => m.NosotrosModule),
          },
          {
            path: 'patrocinadores',
            loadChildren: () => import('./patrocinadores/patrocinadores.module').then((m) => m.PatrocinadoresModule),
          },
        ],
      },
    ]),
  ],
})
export class EsRoutingModule {}