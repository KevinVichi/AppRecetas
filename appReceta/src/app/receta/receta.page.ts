import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecetaService } from '../shared/http.service';
import { FavoritosService } from '../shared/favoritos.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RecetaPage implements OnInit {
  receta: any = {};
  esFavorito: boolean = false;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly recetaService: RecetaService,
    private readonly favoriteService: FavoritosService,
    private readonly authService: AuthService,
    private readonly alertController: AlertController
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerRecetaPorId(id);
      this.verificarFavorito(id);
    }
  }

  obtenerRecetaPorId(id: string): void {
    this.recetaService.obtenerRecetaPorId(id).subscribe(
      (data) => {
        this.receta = data;
        this.verificarFavorito(id);
      },
      (error) => {
        console.error('Error al obtener la receta', error);
      }
    );
  }

  verificarFavorito(id: string): void {
    this.favoriteService.esFavorito(id).subscribe(
      (esFavorito) => {
        console.log('Es favorito:', esFavorito); // Agregar log para debug
        this.esFavorito = esFavorito;
      },
      (error) => {
        console.error('Error al verificar favorito:', error);
      }
    );
  }

  async toggleFavorito(): Promise<void> {
    if (!this.authService.isAuthenticated()) {
      await this.mostrarAlertaLogin();
      return;
    }

    if (this.esFavorito) {
      this.favoriteService.eliminarFavorito(this.receta.id).subscribe(() => {
        this.esFavorito = false;
        this.favoriteService.notificarCambiosFavoritos();
      });
    } else {
      this.favoriteService.agregarFavorito(this.receta.id).subscribe(() => {
        this.esFavorito = true;
        this.favoriteService.notificarCambiosFavoritos();
      });
    }
  }

  private async mostrarAlertaLogin(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Iniciar Sesión Requerido',
      message: 'Para agregar a favoritos, por favor inicie sesión',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Ir a Login',
          handler: () => {
            // Navegar a la pestaña de login
            window.location.href = '/tabs/tab3';
          },
        },
      ],
    });

    await alert.present();
  }
}
