import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetaPage } from './receta.page';

const routes: Routes = [
  {
    path: '',
    component: RecetaPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaRoutingModule {}
