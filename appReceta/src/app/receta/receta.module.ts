import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecetaPage } from './receta.page';
import { RecetaRoutingModule } from './receta-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RecetaRoutingModule,
    RecetaPage,
    RouterModule,
  ],
})
export class RecetaModule {}
