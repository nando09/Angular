import { Component } from '@angular/core'

@Component({
	// // Ira chamar o componente com o "app-topo"
	// selector: '[app-topo]', ********* Chama como um atributo da div
	// selector: '.app-topo', ********* Chama como uma class da div
	selector: 'app-topo', // ********* Chama normal somente com o nome

	// Qual o html que a class vai controlar
	templateUrl: './topo.component.html',
	// Podendo fazer o HTML direto no template
	// template: ''

	// Podendo passar mais de um arquivo de css para o array
	styleUrls: ['./topo.component.css']

	// Aqui vai poder definir o estilo aqui mesmo, porem o de cima passa um arquivo para ler o css
	// styles : [`.exemplo{ color:red }`]
})
export class TopoComponent {
	public titulo = "Aprendendo Inglês";
}
