import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { OfertasService} from '../../ofertas.service'

@Component({
	selector: 'app-onde-fica',
	templateUrl: './onde-fica.component.html',
	styleUrls: ['./onde-fica.component.css'],
	providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

	public descricao: string = ''

	constructor(private router: ActivatedRoute, private ofertasService: OfertasService) { }

	ngOnInit() {
		this.router.parent.params.subscribe((parametros: Params) => {
			this.ofertasService.getOndeFicaId(parametros.id)
			.then((descricao: any) => this.descricao = descricao)
		})

	}

}
