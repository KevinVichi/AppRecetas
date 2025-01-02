import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../shared/http.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {
  recetas: any[] = [];
  categorias: any[] = [];

  constructor(private recetaService: RecetaService) {}

  ngOnInit(): void {
    this.recetaService.obtenerRecetas().subscribe((data) => {
      this.recetas = data;
    });

    this.recetaService.obtenerCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  agregarReceta(nuevaReceta: any): void {
    this.recetaService.crearReceta(nuevaReceta).subscribe((data) => {
      this.recetas.push(data);
    });
  }
}
