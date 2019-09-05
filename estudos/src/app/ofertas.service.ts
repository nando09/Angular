import { Injectable } from '@angular/core';
import { Oferta } from './model/oferta'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class OfertasService {
	URL = 'http://localhost:3000/ofertas';

	constructor(private http: httpClient) { }

	getOfertas(): Observable<Oferta[]>{
		return this.http.get(this.URL)
			.map
	}
}
