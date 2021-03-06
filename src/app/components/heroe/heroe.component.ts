import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {}
  idHeroe: string = null
  suscribeService : any = null
  deleted: Boolean = false

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private heroesService: HeroesService
    ) {
    this.activatedRoute.params.subscribe( params => {
      this.idHeroe = params['id']
      this.heroesService.getHeroe(this.idHeroe).subscribe(data => {
        this.heroe = data['heroe'];
      });
    });
  }

  eliminarHeroe()
  {
    this.heroesService.deleteHeroe(this.idHeroe).subscribe(data => {
      console.log(data);
    });
    this.deleted = true;
  }
}
