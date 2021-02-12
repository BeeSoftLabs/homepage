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
            children: [
              {
                path: '',
                loadChildren: () => import('./aplica-ahora/aplica-ahora.module').then((m) => m.AplicaAhoraModule),
              },
              {
                path: 'estudiante',
                loadChildren: () =>
                  import('./aplica-ahora-estudiante/aplica-ahora-estudiante.module').then(
                    (m) => m.AplicaAhoraEstudianteModule,
                  ),
              },
              {
                path: 'mentor',
                loadChildren: () =>
                  import('./aplica-ahora-mentor/aplica-ahora-mentor.module').then((m) => m.AplicaAhoraMentorModule),
              },
            ],
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
          {
            path: 'faq',
            loadChildren: () => import('./faq/faq.module').then((m) => m.FaqModule),
          },
        ],
      },
    ]),
  ],
})
export class EsRoutingModule {}
