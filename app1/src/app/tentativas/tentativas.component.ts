import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model'

@Component({
	selector: 'app-tentativas',
	templateUrl: './tentativas.component.html',
	styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
	public coracaoVazio: string = "/assets/coracao_vazio.png";
	public coracaoCheio: string = "/assets/coracao_cheio.png";

	@Input() public tentativas: number

	public coracoes: Coracao[] = [ new Coracao(true), new Coracao(true), new Coracao(true) ]

	constructor() {
		// console.log(this.coracoes)
	}

	ngOnChanges() {
		if (this.tentativas) {
			// let indice: number = this.coracoes.length - this.tentativas
			this.coracoes[this.tentativas - 1].cheio = false
		}

		// console.log('Tentativas vinda do Painel: ', this.tentativas)
	}

	ngOnInit() {
		// console.log('Tentativas vinda do Painel: ', this.tentativas)
	}
}
