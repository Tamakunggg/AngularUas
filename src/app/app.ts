import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { TarjetaMenu } from './components/tarjeta-menu/tarjeta-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TarjetaMenu],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  mensaje: string = '';

  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.apiService.obtenerMensaje().subscribe({

      next: (respuesta: any) => {

        console.log(respuesta);

        this.mensaje = respuesta.mensaje;

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error(error);

        this.mensaje = 'ERROR AL CONECTAR CON LARAVEL';

        this.cdr.detectChanges();

      }

    });

  }

}