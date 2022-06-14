import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  constructor(private GifsService: GifsService) { }


  get arrObjImagenes(): any[] {
    return this.GifsService.arrObjImagenes;
  }


}
