import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs'

import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'

import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'

@Component({
	selector: 'app-topo',
	templateUrl: './topo.component.html',
	styleUrls: ['./topo.component.css'],
	providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

	public ofertas: Observable<Oferta[]>
	public ofertas2: Oferta[]
	private subjectPesquisa: Subject<string> = new Subject<string>()

	constructor(private ofertasService: OfertasService ) { }

	ngOnInit() {
		this.ofertas = this.subjectPesquisa // retorno de Oferta[]
		.pipe(
			debounceTime(1000),
			distinctUntilChanged(),
			switchMap((termo: string) => {
				console.log('Requisição HTTP para API: ', termo)
				if (termo.trim() === '') {
					// Observable Array de Ofertas vazio
					return of<Oferta[]>([])
				}

				return this.ofertasService.pesquisaOfertas(termo)
			}),
			catchError((erro: any) => {
				console.log(erro)
				return of<Oferta[]>([])
			})
		)

		this.ofertas.subscribe((ofertas: Oferta[]) => {
			this.ofertas2 = ofertas
			console.log(ofertas)
		})
	}

	public pesquisa(termoDaBusca: string): void{
		console.log('Keyup Caracter: ', termoDaBusca)
		this.subjectPesquisa.next(termoDaBusca)

		// this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)

		// this.ofertas.subscribe(
		// 	(ofertas: Oferta[]) => console.log(ofertas),
		// 	(erro: any) => console.log('Erro status: ', erro.status),
		// 	() => console.log('Fluxo de eventos concluido...')
		// )

		// console.log(this.ofertas)
	}

}
