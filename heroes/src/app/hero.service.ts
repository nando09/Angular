import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { URL_API } from './app.api'

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	private heroesUrl = 'http://localhost:3000/heroes';  // URL to web api
	// private heroesUrl = 'api/heroes';  // URL to web api

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};


	constructor(private http: HttpClient, private messageService: MessageService) { }


	// public getHeroes(): Observable<Hero[]>{
	// 	this.messageService.add("HeroService: Buscando Herois!");
	// 	return of(HEROES);
	// }

	// getHeroes(): Observable<Hero[]> {
	// 	return of(HEROES);
	// }

	// /** GET heroes from the server */
	// getHeroes (): Observable<Hero[]> {
	// 	return this.http.get<Hero[]>(this.heroesUrl)
	// }


	getHeroes (): Observable<Hero[]> {
		let returno = this.http.get<Hero[]>(this.heroesUrl)
			.pipe(
				catchError(this.handleError<Hero[]>('getHeroes', []))
			);
		// console.log(returno);
		return returno
	}

	getHero(id: number): Observable<Hero> {
		// TODO: send the message _after_ fetching the hero
		this.messageService.add(`Buscando heroi com o id = ${id}`);
		// console.log(this.http.get<Hero>(`${this.heroesUrl}?id=${id}`).pipe(catchError(this.handleError<Hero[]>('getHeroes', []))));
		return this.http.get<Hero>(`${this.heroesUrl}?id=${id}`);
	}

	private log(message: string) {
		this.messageService.add(`HeroService: ${message}`);
	}

	// 	/ **
	//   * Lidar com a operação Http que falhou.
	//   * Deixe o aplicativo continuar.
	//   * operação @param - nome da operação que falhou
	//   * resultado @param - valor opcional a ser retornado como resultado observável
	//   * /

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: envia o erro para a infraestrutura de log remoto
			console.error(error); // log to console instead

			// TODO: melhor trabalho de transformação de erro para consumo do usuário
			this.log(`${operation} failed: ${error.message}`);

			// Deixe o aplicativo continuar em execução retornando um resultado vazio.
			return of(result as T);
		};
	}

	/** PUT: update the hero on the server */
	updateHero (hero: Hero): Observable<any> {
		let id = hero.id;
		console.log(hero.id);
		return this.http.put(`${this.heroesUrl}/${id}`, hero, this.httpOptions).pipe(
			tap(_ => this.log(`Atualizando Herói id=${hero.id}`)),
			catchError(this.handleError<any>('updateHero'))
		);
	}

	/** POST: add a new hero to the server */
	addHero (hero: Hero): Observable<Hero> {
		return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
			tap((newHero: Hero) => this.log(`Adicionando Herói w/ id=${newHero.id}`)),
			catchError(this.handleError<Hero>('addHero'))
		);
	}

	/** DELETE: delete the hero from the server */
	deleteHero (hero: Hero | number): Observable<Hero> {
		const id = typeof hero === 'number' ? hero : hero.id;
		const url = `${this.heroesUrl}/${id}`;

		return this.http.delete<Hero>(url, this.httpOptions).pipe(
			tap(_ => this.log(`Deletando o Herói id=${id}`)),
			catchError(this.handleError<Hero>('deleteHero'))
		);
	}

	/* GET heroes whose name contains search term */
	searchHeroes(term: string): Observable<Hero[]> {
		if (!term.trim()) {
			// if not search term, return empty hero array.
			console.log('Vazio!');
			return of([]);
		}
		return this.http.get<Hero[]>(`${this.heroesUrl}?nome_like=${term}`).pipe(
			tap(_ => this.log(`found heroes matching "${term}"`)),
			catchError(this.handleError<Hero[]>('Pesquisar Herói', []))
		);
	}

}
