import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'


@Component({
	selector: 'app-painel',
	templateUrl: './painel.component.html',
	styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

	public frases: Frase[] = FRASES
	public instrucao: string = "Traduza a frase:"
	public resposta: string = ''

	public rodada: number = 0
	public rodadaFrase: Frase

	public progresso: number = 0

	public tentativas: number = 0

	@Output() public encerrarJogo: EventEmitter<string> = new EventEmitter

	constructor() {
		this.atualizaRodada()
		// console.log(this.rodadaFrase)
	}

	ngOnInit() {
	}

	ngOnDestroy(){
		// console.log('Componente Painel foi desctruido!')
	}

	public atualizaResposta(resposta: Event): void {
		this.resposta = (<HTMLInputElement>resposta.target).value
		// console.log(this.resposta)
	}

	public verifiqueResposta(): void {

		if (this.rodadaFrase.fransePtBr == this.resposta) { 
			// alert('Acertou mizeravi!')
			this.rodada++
			this.progresso = this.progresso + (100 / this.frases.length)

			if(this.rodada === 4){
				this.encerrarJogo.emit('vitoria')
			}

			this.atualizaRodada()

		}else{
			// alert('Frase incorreta!')

			this.tentativas++

			if (this.tentativas === 4) {
				this.encerrarJogo.emit('derrota')
			}
		}

		// console.log(this.tentativas)

	}

	public atualizaRodada(): void{
		this.rodadaFrase = this.frases[this.rodada]
		this.resposta = ''
	}
}
