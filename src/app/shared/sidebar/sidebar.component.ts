import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private GifsService: GifsService) { }

  get arrHistorialBusqueda(): string[] {
    return this.GifsService.arrHistorialBusqueda;
  }

  buscarDesdeHistorial(palabra: string): void {
    this.GifsService.buscarGif(palabra);
  }

  eliminarHistorial() {
    this.GifsService.eliminarHistorial();
  }

}
