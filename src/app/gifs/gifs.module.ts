import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifspageComponent } from './gifspage/gifspage.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifspageComponent,
    BuscarComponent,
    ResultadosComponent
  ],
  exports: [
    GifspageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
