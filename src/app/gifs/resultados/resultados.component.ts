import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { IGif } from '../interfaces/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  constructor(private GifsService: GifsService) { }

  get arrObjImagenes(): IGif[] {
    return this.GifsService.arrObjImagenes;
  }


}
