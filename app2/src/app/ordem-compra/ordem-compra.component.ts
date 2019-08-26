import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ordem-compra',
	templateUrl: './ordem-compra.component.html',
	styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

	public endereco: string = ''
	public numero: string = ''
	public complemento: string = ''
	public formPag: string = ''

	// Controle de validação
	public enderecoValidar: boolean
	public numeroValidar: boolean
	public complementoValidar: boolean
	public formPagValidar: boolean

	public enderecoPrimitivo: boolean = true
	public numeroPrimitivo: boolean = true
	public complementoPrimitivo: boolean = true
	public formPagPrimitivo: boolean = true

	constructor() { }

	ngOnInit() {
	}

	public atualizaEndereco(endereco: string): void{
		this.endereco = endereco;

		this.enderecoPrimitivo = false

		if (this.endereco.length > 3) {
			this.enderecoValidar = true
		}else{
			this.enderecoValidar = false
		}
	}

	public atualizaNumero(numero: string): void{
		this.numero = numero;

		this.numeroPrimitivo = false

		if (this.numero.length > 0) {
			this.numeroValidar = true
		}else{
			this.numeroValidar = false
		}
	}

	public atualizaComplemento(complemento: string): void{
		this.complemento = complemento;

		this.complementoPrimitivo = false

		if (this.complemento.length > 0) {
			this.complementoValidar = true
		}else{
			this.complementoValidar = false
		}
	}

	public atualizaFormPag(formPag: string): void{
		this.formPag = formPag;

		this.formPagPrimitivo = false

		if (this.formPag.length > 0) {
			this.formPagValidar = true
		}else{
			this.formPagValidar = false
		}
	}


}
