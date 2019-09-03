import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	private heroesUrl = 'api/heroes';  // URL to web api
	private log(message: string) {
		this.messageService.add(`HeroService: ${message}`);
	}

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
		return this.http.get<Hero[]>(this.heroesUrl)
			.pipe(
				catchError(this.handleError<Hero[]>('getHeroes', []))
			);
	}

	getHero(id: number): Observable<Hero> {
		// TODO: send the message _after_ fetching the hero
		this.messageService.add(`Buscando heroi com o id = ${id}`);
		return of(HEROES.find(hero => hero.id === id));
	}

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
