import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

	getHeroes(): Observable<Hero[]> {
		return of(HEROES);
	}

	getHero(id: number): Observable<Hero> {
		// TODO: send the message _after_ fetching the hero
		this.messageService.add(`Buscando heroi com o id = ${id}`);
		return of(HEROES.find(hero => hero.id === id));
	}
}
