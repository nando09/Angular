import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

import { URL_API } from './app.api'

import { Injectable } from '@angular/core'
import { Pedido } from './shared/pedido.model'

import { map } from 'rxjs/operators'

@Injectable()
export class OrdemCompraService{

	constructor(private http: HttpClient) {}

	public efetivarCompra(pedido: Pedido): Observable<any>{
		// console.log(pedido)

		let headers = new HttpHeaders({
			'Content-Type':'application/json',
		})

		let options = {
			headers,
		}

		// let headers = new HttpHeaders()

		return this.http.post(`${URL_API}/pedidos`,JSON.stringify(pedido),options).pipe(
			map((resposta: any) => resposta.id)
		)
	}
}