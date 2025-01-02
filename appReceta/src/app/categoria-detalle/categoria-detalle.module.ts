import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaDetallePage } from './categoria-detalle.page';
import { CategoriaDetalleRoutingModule } from './categoria-detalle-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CategoriaDetalleRoutingModule,
    RouterModule,
  ],
  declarations: [CategoriaDetallePage],
})
export class CategoriaDetalleModule {}
