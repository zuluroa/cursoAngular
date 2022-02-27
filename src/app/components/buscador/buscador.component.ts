import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesSercice } from '../services/heroes.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino?:string;

  constructor(private _activatedRoute:ActivatedRoute, private _heroeService:HeroesSercice) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['heroe'];
      this.heroes = this._heroeService.buscarHeroes(params['heroe'])
      console.log(this.heroes);
    })
  }

}
