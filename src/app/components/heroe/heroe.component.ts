import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesSercice } from '../services/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor( private _activatedRoter:ActivatedRoute,
    private _heroe:HeroesSercice) { 
    this._activatedRoter.params.subscribe(params => {
      this.heroe =  _heroe.getHeroe(params['id'])
    })
  }

  ngOnInit(): void {
  }

}
