import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesSercice, Heroe } from '../services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesSercice, 
    private router:Router) { 

  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(id:number){
    this.router.navigate(['/heroe',id])
  }

}
