import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetaService } from '../shared/http.service';

@Component({
  selector: 'app-categoria-detalle',
  templateUrl: './categoria-detalle.page.html',
  styleUrls: ['./categoria-detalle.page.scss'],
  standalone: false,
})
export class CategoriaDetallePage implements OnInit {
  categoria: string = '';
  recetas: any[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly recetaService: RecetaService
  ) {}

  ngOnInit(): void {
    const categoria = this.route.snapshot.paramMap.get('categoria');
    this.categoria = categoria ?? ''; // Manejar el caso null
    this.obtenerRecetasPorCategoria(this.categoria);
  }

  obtenerRecetasPorCategoria(categoria: string): void {
    this.recetaService.obtenerRecetasPorCategoria(categoria).subscribe(
      (data) => {
        this.recetas = data;
      },
      (error) => {
        console.error('Error al obtener recetas por categoría', error);
      }
    );
  }
}
