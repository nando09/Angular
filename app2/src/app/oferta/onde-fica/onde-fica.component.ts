import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-onde-fica',
	templateUrl: './onde-fica.component.html',
	styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

	constructor(private router: ActivatedRoute) { }

	ngOnInit() {
		console.log('Teste DI: ', this.router.parent.snapshot.params['id'])
	}

}
