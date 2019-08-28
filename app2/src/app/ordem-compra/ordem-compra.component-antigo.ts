import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'

@Component({
	selector: 'app-ordem-compra',
	templateUrl: './ordem-compra.component.html',
	styleUrls: ['./ordem-compra.component.css'],
	providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

	public idPedidoCompra: number

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

	//Controlar botão confirmar
	public formEstado: string = 'disabled'

	// Pedido
	public pedido: Pedido = new Pedido('','','','')

	constructor(private ordemCompraService: OrdemCompraService) { }

	ngOnInit() {
		// this.ordemCompraService.efetivarCompra()
	}

	public atualizaEndereco(endereco: string): void{
		this.endereco = endereco;

		this.enderecoPrimitivo = false

		if (this.endereco.length > 3) {
			this.enderecoValidar = true
		}else{
			this.enderecoValidar = false
		}
		this.habilitaForm()
	}

	public atualizaNumero(numero: string): void{
		this.numero = numero;

		this.numeroPrimitivo = false

		if (this.numero.length > 0) {
			this.numeroValidar = true
		}else{
			this.numeroValidar = false
		}
		this.habilitaForm()
	}

	public atualizaComplemento(complemento: string): void{
		this.complemento = complemento;

		this.complementoPrimitivo = false

		if (this.complemento.length > 0) {
			this.complementoValidar = true
		}else{
			this.complementoValidar = false
		}
		this.habilitaForm()
	}

	public atualizaFormPag(formPag: string): void{
		this.formPag = formPag;

		this.formPagPrimitivo = false

		if (this.formPag.length > 0) {
			this.formPagValidar = true
		}else{
			this.formPagValidar = false
		}
		this.habilitaForm()
	}

	public habilitaForm():void{
		if (this.enderecoValidar === true && this.numeroValidar === true && this.formPagValidar === true) {
			this.formEstado = ''
		}else{
			this.formEstado = 'disabled'
		}
	}

	public confirmaCompra(): void{
		this.pedido.endereco = this.endereco
		this.pedido.numero = this.numero
		this.pedido.complemento = this.complemento
		this.pedido.formPag = this.formPag

		this.ordemCompraService.efetivarCompra(this.pedido)
			.subscribe((idPedido: number) => {
				this.idPedidoCompra = idPedido
			})
	}


}
