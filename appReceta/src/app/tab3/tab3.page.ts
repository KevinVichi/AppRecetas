import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  correo: string = '';
  contrasenia: string = '';
  isAuthenticated: boolean = false;
  nombre: string | null = '';

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      if (isAuthenticated) {
        this.nombre = this.authService.getNombre();
      } else {
        this.nombre = null;
      }
    });
  }

  login(): void {
    this.authService.login(this.correo, this.contrasenia).subscribe(
      () => {
        // Login successful
        this.nombre = this.authService.getNombre();
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
      }
    );
  }

  logout(): void {
    this.authService.logout();
    this.nombre = null;
    this.correo = '';
    this.contrasenia = '';
  }
}
