import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.css'],
	providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

	public oferta: Oferta

	constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

	ngOnInit() {
		// // snapshot
		// console.log('Aqui e params: ', this.route.snapshot.params['id'])

		// // snapshot com dois parametros
		// this.route.params.subscribe((parametro: any) => {
		// 	console.log(parametro.sub)
		// 	console.log(parametro.id)
		// })
		
		this.ofertasService.getOfertaId(this.route.snapshot.params['id'])
			.then(( oferta: Oferta ) => {
				this.oferta = oferta
				// console.log(this.oferta)
			})
	}

}
