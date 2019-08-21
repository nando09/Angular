import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService} from '../../ofertas.service'

@Component({
	selector: 'app-como-usar',
	templateUrl: './como-usar.component.html',
	styleUrls: ['./como-usar.component.css'],
	providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

	public comoUsar: string = ''

	constructor(private router: ActivatedRoute, private ofertasService: OfertasService) { }

	ngOnInit() {
		this.ofertasService.getComoUsarId(this.router.parent.snapshot.params['id'])
		.then((descricao: any) => this.comoUsar = descricao )
	}

}
