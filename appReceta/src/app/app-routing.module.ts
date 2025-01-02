import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'categoria-detalle/:categoria',
    loadChildren: () =>
      import('./categoria-detalle/categoria-detalle.module').then(
        (m) => m.CategoriaDetalleModule
      ),
  },
  {
    path: 'receta/:id',
    loadChildren: () =>
      import('./receta/receta.module').then((m) => m.RecetaModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
