import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecetaService {
  private readonly baseUrl = 'http://localhost:4000/api/recetas';

  constructor(private readonly http: HttpClient) {}

  obtenerRecetas(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  obtenerCategorias(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categorias`);
  }

  crearReceta(receta: any): Observable<any> {
    return this.http.post(this.baseUrl, receta);
  }
  obtenerRecetasPorCategoria(categoria: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?categoria=${categoria}`);
  }
  obtenerRecetaPorId(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
