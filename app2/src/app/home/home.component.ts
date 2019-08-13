import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [ OfertasService ],

})
export class HomeComponent implements OnInit {
	public ofertas: Oferta[]

	constructor(private ofertasService: OfertasService) { }

	ngOnInit() {
		this.ofertas = this.ofertasService.getOfertas()
		console.log(this.ofertas)


		// // Maneira errada de fazer uma injeção nesse arquivo
		// let ofertas = new OfertasService()
		// console.log(ofertas.getOfertas())
	}

}
