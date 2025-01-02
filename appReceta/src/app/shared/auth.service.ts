import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:4000/api/usuarios';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.isAuthenticatedSubject.next(!!token);
  }

  login(correo: string, contrasenia: string): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/login`, { correo, contrasenia })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('nombre', response.nombre); // Almacenar el nombre del usuario
          this.isAuthenticatedSubject.next(true);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre'); // Eliminar el nombre del usuario
    this.isAuthenticatedSubject.next(false);
  }

  register(
    nombre: string,
    correo: string,
    contrasenia: string
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, {
      nombre,
      correo,
      contrasenia,
    });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getNombre(): string | null {
    return localStorage.getItem('nombre');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
