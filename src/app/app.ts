import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoPokemon } from './listado-pokemon/listado-pokemon';
import { ObservablesHttp } from './observables-http/observables-http';
import { ListadoEstados } from './listado-estados/listado-estados';
import { ListadoToSignal } from './listado-to-signal/listado-to-signal';
import { PokemonLista } from './pokemon-lista/pokemon-lista';
import { PokemonSeleccionado } from './pokemon-seleccionado/pokemon-seleccionado';
import { Paginacion } from './paginacion/paginacion';
import { RespuestaCompleta } from './respuesta-completa/respuesta-completa';
import { PublicacionesCrud } from './publicaciones-crud/publicaciones-crud';
import { DetalleAnidado } from './detalle-anidado/detalle-anidado';
import { DetalleSwitchmap } from './detalle-switchmap/detalle-switchmap';
import { BuscadorPokemon } from './buscador-pokemon/buscador-pokemon';
import { InicialesForkjoin } from './iniciales-forkjoin/iniciales-forkjoin';
import { ErroresDemo } from './errores-demo/errores-demo';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ListadoPokemon,
    ObservablesHttp,
    ListadoEstados,
    ListadoToSignal,
    PokemonLista,
    PokemonSeleccionado,
    Paginacion,
    RespuestaCompleta,
    PublicacionesCrud,
    DetalleAnidado,
    DetalleSwitchmap,
    BuscadorPokemon,
    InicialesForkjoin,
    ErroresDemo,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
