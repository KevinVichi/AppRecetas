import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private readonly favoritosActualizados = new Subject<void>();
  favoritosActualizados$ = this.favoritosActualizados.asObservable();
  private readonly baseUrl = 'http://localhost:4000/api/favoritos';

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  obtenerFavoritos(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.baseUrl, { headers });
  }

  esFavorito(recetaId: string): Observable<boolean> {
    const token = this.authService.getToken();
    if (!token) {
      return of(false); // Retornar false si no hay token
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('Verificando favorito para:', recetaId); // Agregar log
    return this.http.get<boolean>(`${this.baseUrl}/check/${recetaId}`, {
      headers,
    });
  }

  agregarFavorito(recetaId: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(this.baseUrl, { recetaId }, { headers });
  }

  eliminarFavorito(recetaId: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(this.baseUrl, {
      headers,
      body: { recetaId },
    });
  }

  notificarCambiosFavoritos() {
    this.favoritosActualizados.next();
  }
}
