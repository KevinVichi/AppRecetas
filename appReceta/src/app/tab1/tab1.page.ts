import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../shared/favoritos.service';
import { AuthService } from '../shared/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  favoritos: any[] = [];
  isAuthenticated: boolean = false;
  private readonly subscription: Subscription = new Subscription();

  constructor(
    private readonly favoritosService: FavoritosService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
        if (isAuthenticated) {
          this.cargarFavoritos();
        }
      })
    );

    this.subscription.add(
      this.favoritosService.favoritosActualizados$.subscribe(() => {
        this.cargarFavoritos();
      })
    );
  }

  ionViewWillEnter() {
    if (this.isAuthenticated) {
      this.cargarFavoritos();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  cargarFavoritos(): void {
    this.favoritosService.obtenerFavoritos().subscribe(
      (data) => {
        this.favoritos = data;
      },
      (error) => {
        console.error('Error al obtener favoritos:', error);
      }
    );
  }
}
