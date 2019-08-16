import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Oferta } from './shared/oferta.model'

// import 'rxjs/add/operator/toPromise'

@Injectable()
export class OfertasService {

	constructor(private http: HttpClient){

	}

	public getOfertas(): Promise<Oferta[]> {
		return this.http.get('http://localhost:3000/ofertas?destaque=true')
			.toPromise()
			.then((responta: any) => responta)
		// return this.ofertas
	}

	public getOfertasPorCategoria(categoria: string): Promise<Oferta[]>{
		return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}` )
			.toPromise()
			.then((responta: any) => responta)
		// return this.ofertas
	}

	// public ofertas: Oferta[] = [
	// 	{
	// 		id: 1,
	// 		categoria: "restaurante",
	// 		titulo: "Super Burger",
	// 		descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
	// 		anunciante: "Original Burger",
	// 		valor: 29.90,
	// 		destaque: true,
	// 		imagens: [
	// 			{url: "/assets/ofertas/1/img1.jpg"},
	// 			{url: "/assets/ofertas/1/img2.jpg"},
	// 			{url: "/assets/ofertas/1/img3.jpg"},
	// 			{url: "/assets/ofertas/1/img4.jpg"}
	// 		]
	// 	},
	// 	{
	// 		id: 2,
	// 		categoria: "restaurante",
	// 		titulo: "Cozinha Mexicana",
	// 		descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
	// 		anunciante: "Mexicana",
	// 		valor: 32.90,
	// 		destaque: true,
	// 		imagens: [
	// 			{url: "/assets/ofertas/2/img1.jpg"},
	// 			{url: "/assets/ofertas/2/img2.jpg"},
	// 			{url: "/assets/ofertas/2/img3.jpg"},
	// 			{url: "/assets/ofertas/2/img4.jpg"}
	// 		]
		
	// 	},
	// 	{
	// 		id: 4,
	// 		categoria: "diversao",
	// 		titulo: "Estância das águas",
	// 		descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
	// 		anunciante: "Estância das águas",
	// 		valor: 31.90,
	// 		destaque: true,
	// 		imagens: [
	// 			{url: "/assets/ofertas/3/img1.jpg"},
	// 			{url: "/assets/ofertas/3/img2.jpg"},
	// 			{url: "/assets/ofertas/3/img3.jpg"},
	// 			{url: "/assets/ofertas/3/img4.jpg"},
	// 			{url: "/assets/ofertas/3/img5.jpg"},
	// 			{url: "/assets/ofertas/3/img6.jpg"}
	// 		]
	// 	}
	// ]

	// public getOfertas2(): Promise<Oferta[]> {
	// 	return new Promise((resolve, reject) => {
	// 		// Algum tipo de processamento, que chama a funcao resolve ou reject
	// 		// console.log('Sera?')
	// 		let deuCerto = true
	// 		if (deuCerto) {
	// 			setTimeout(() => resolve( this.ofertas ), 3000)
	// 		}else{
	// 			reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado XYZ!' })
	// 		}
	// 	})
	// 	.then((ofertas: Oferta[]) => {
	// 		// Quando o resolve() esta acabado ele vem direto para esse .then() e aqui podemos fazer mais coisas
	// 		console.log('Primeiro THEN')
	// 		return ofertas
	// 	})
	// 	.then((ofertas: Oferta[]) => {
	// 		// Quando o resolve() esta acabado ele vem direto para esse .then() e aqui podemos fazer mais coisas
	// 		console.log('Segundo THEN')
	// 		return new Promise((resolve2, reject2) => {
	// 			setTimeout(() => { resolve2( ofertas ) }, 3000)
	// 		})
	// 	})
	// 	.then((ofertas: Oferta[]) => {
	// 		console.log('Terceiro THEN execultado após três segundos!')
	// 		return ofertas
	// 	})
	// }
}
