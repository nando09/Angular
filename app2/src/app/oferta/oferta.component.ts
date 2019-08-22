import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../ofertas.service'
// import { Observable } from 'rxjs'
// import { Observer } from 'rxjs'
// import { interval } from 'rxjs'
// import { Subscription } from 'rxjs'


@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: ['./oferta.component.css'],
	providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

	private tempoObservableSubscription: Subscription
	private meuObservableTesteSubscrition: Subscription

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

		// // Observables fica assistindo a roda
		// this.route.params.subscribe(
		// 	(parametro: any) => console.log(parametro),
		// 	(error: any) => console.log(error),
		// 	() => console.log('Processamento foi classificado como concluido!')
		// )



		// let tempo = interval(2000)

		// this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
		// 	console.log(intervalo)
		// })


		// // Observavel
		// let meuObservableTeste = Observable.create((observer: Observer<string>) => {
		// 	observer.next('Primeiro evento da stream')
		// 	observer.next('Segundo evento da stream')
		// 	observer.complete()
		// 	observer.next('Segundo evento da stream')
		// 	observer.error('Algum erro foi achado na stream de event!')
		// });

		// // Observador
		// this.meuObservableTesteSubscrition = meuObservableTeste.subscribe(
		// 	(resultado: string) => console.log(resultado),
		// 	(Error: string) => console.log(Error),
		// 	() => console.log('Processamento foi classificado como concluido!')
		// )

	}

	ngOnDestroy() {
		this.meuObservableTesteSubscrition.unsubscribe()
		this.tempoObservableSubscription.unsubscribe()
	}

}
