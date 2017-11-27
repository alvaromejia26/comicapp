import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino'])
    });
  }

  verHeroe(codigo:string){
    this.router.navigate(['/heroe',codigo]);console.log(codigo);
  }

}
