(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Tipos para usar a chamado do component do angular -->\r\n<app-topo></app-topo>\r\n<div *ngIf=\"jogoEmAndamento; else fimDeJogo\">\r\n\t<app-painel (encerrarJogo)=\"encerrarJogo($event)\"></app-painel>\r\n</div>\r\n<ng-template #fimDeJogo>\r\n\t<div class=\"container\" style=\"margin-top: 50px\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div *ngIf=\"tipoEncerramento === 'derrota'; else fimVitoria\" class=\"col\">\r\n\t\t\t\t<h3 style=\"color: red\">Fim de jogo, infelizmente você perdeu :S !</h3>\r\n\t\t\t\t<br>\r\n\t\t\t\t<button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Jogar Novamente</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</ng-template>\r\n\r\n<ng-template #fimVitoria>\r\n\t<h3 style=\"color: green\">Parabens tú ganhantes rapaz, vai lá busca seu premio !</h3>\r\n\t<br>\r\n\t<button class=\"btn btn-primary\" (click)=\"reiniciarJogo()\">Jogar Novamente</button>\r\n</ng-template>\r\n\r\n<!-- <div app-topo></div> -->\r\n<!-- <div class=\"app-topo\"></div> -->\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/painel/painel.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/painel/painel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"jumbotron\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<app-progresso [progresso]=\"progresso\"></app-progresso>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<div class=\"d-flex justify-content-end\">\r\n\t\t\t\t\t<app-tentativas [tentativas]=\"tentativas\"></app-tentativas>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t\t<h6>{{ instrucao }}</h6>\r\n\t\t\t\t<p>{{ rodadaFrase.fraseEng }}</p>\r\n\t\t\t\t<!-- <p>{{ resposta }}</p> -->\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<textarea class=\"form-control\" rows=\"3\" (input)=\"atualizaResposta($event)\" [value]=\"resposta\"></textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col\">\r\n\t\t\t\t<div class=\"d-flex justify-content-end\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"verifiqueResposta()\">Verificar</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/progresso/progresso.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/progresso/progresso.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n\t<div class=\"progress-bar w-{{ progresso }}\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tentativas/tentativas.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tentativas/tentativas.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<img [src]=\"coracaoVazio\" />\r\n<img [src]=\"coracaoCheio\" />\r\n<img [src]=\"coracaoCheio\" /> \r\n-->\r\n\r\n<img *ngFor=\"let coracao of coracoes\" [src]=\"coracao.exibeCoracao()\">\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/topo/topo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topo/topo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse bg-faded\">\r\n\t<h1 class=\"navbar-brand mb-0\">{{ titulo }}</h1>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-size: 25px;\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.jogoEmAndamento = true;
    }
    AppComponent.prototype.encerrarJogo = function (tipo) {
        this.jogoEmAndamento = false;
        this.tipoEncerramento = tipo;
    };
    AppComponent.prototype.reiniciarJogo = function () {
        this.jogoEmAndamento = true;
        this.tipoEncerramento = undefined;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topo_topo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topo/topo.component */ "./src/app/topo/topo.component.ts");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./painel/painel.component */ "./src/app/painel/painel.component.ts");
/* harmony import */ var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tentativas/tentativas.component */ "./src/app/tentativas/tentativas.component.ts");
/* harmony import */ var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./progresso/progresso.component */ "./src/app/progresso/progresso.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _topo_topo_component__WEBPACK_IMPORTED_MODULE_4__["TopoComponent"],
                _painel_painel_component__WEBPACK_IMPORTED_MODULE_5__["PainelComponent"],
                _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_6__["TentativasComponent"],
                _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_7__["ProgressoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/painel/frases-mock.ts":
/*!***************************************!*\
  !*** ./src/app/painel/frases-mock.ts ***!
  \***************************************/
/*! exports provided: FRASES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRASES", function() { return FRASES; });
var FRASES = [
    { fraseEng: 'I like to learn', fransePtBr: 'Eu gosto de aprender' },
    { fraseEng: 'I watch TV', fransePtBr: 'Eu assisto TV' },
    { fraseEng: 'How are you?', fransePtBr: 'Como vai você?' },
    { fraseEng: 'I eat bread', fransePtBr: 'Eu como pão' },
];
// const FRASES: Array<Frase> = []


/***/ }),

/***/ "./src/app/painel/painel.component.css":
/*!*********************************************!*\
  !*** ./src/app/painel/painel.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{ margin-top: 20px; padding-top: 30px; padding-bottom: 30px }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbmVsL3BhaW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCIiwiZmlsZSI6InNyYy9hcHAvcGFpbmVsL3BhaW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1bWJvdHJvbnsgbWFyZ2luLXRvcDogMjBweDsgcGFkZGluZy10b3A6IDMwcHg7IHBhZGRpbmctYm90dG9tOiAzMHB4IH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/painel/painel.component.ts":
/*!********************************************!*\
  !*** ./src/app/painel/painel.component.ts ***!
  \********************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frases_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frases-mock */ "./src/app/painel/frases-mock.ts");



var PainelComponent = /** @class */ (function () {
    function PainelComponent() {
        this.frases = _frases_mock__WEBPACK_IMPORTED_MODULE_2__["FRASES"];
        this.instrucao = "Traduza a frase:";
        this.resposta = '';
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 0;
        this.encerrarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this.atualizaRodada();
        // console.log(this.rodadaFrase)
    }
    PainelComponent.prototype.ngOnInit = function () {
    };
    PainelComponent.prototype.ngOnDestroy = function () {
        // console.log('Componente Painel foi desctruido!')
    };
    PainelComponent.prototype.atualizaResposta = function (resposta) {
        this.resposta = resposta.target.value;
        // console.log(this.resposta)
    };
    PainelComponent.prototype.verifiqueResposta = function () {
        if (this.rodadaFrase.fransePtBr == this.resposta) {
            // alert('Acertou mizeravi!')
            this.rodada++;
            this.progresso = this.progresso + (100 / this.frases.length);
            if (this.rodada === 4) {
                this.encerrarJogo.emit('vitoria');
            }
            this.atualizaRodada();
        }
        else {
            // alert('Frase incorreta!')
            this.tentativas++;
            if (this.tentativas === 4) {
                this.encerrarJogo.emit('derrota');
            }
        }
        // console.log(this.tentativas)
    };
    PainelComponent.prototype.atualizaRodada = function () {
        this.rodadaFrase = this.frases[this.rodada];
        this.resposta = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], PainelComponent.prototype, "encerrarJogo", void 0);
    PainelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-painel',
            template: __webpack_require__(/*! raw-loader!./painel.component.html */ "./node_modules/raw-loader/index.js!./src/app/painel/painel.component.html"),
            styles: [__webpack_require__(/*! ./painel.component.css */ "./src/app/painel/painel.component.css")]
        })
    ], PainelComponent);
    return PainelComponent;
}());



/***/ }),

/***/ "./src/app/progresso/progresso.component.css":
/*!***************************************************!*\
  !*** ./src/app/progresso/progresso.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress{ background: #eef8da; border: solid 1px #99CE28; }\r\n.progress-bar{ background: #99CE28; border: solid 1px #99CE28; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc3NvL3Byb2dyZXNzby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVcsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUU7QUFDM0QsZUFBZSxtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzby9wcm9ncmVzc28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzc3sgYmFja2dyb3VuZDogI2VlZjhkYTsgYm9yZGVyOiBzb2xpZCAxcHggIzk5Q0UyODsgfVxyXG4ucHJvZ3Jlc3MtYmFyeyBiYWNrZ3JvdW5kOiAjOTlDRTI4OyBib3JkZXI6IHNvbGlkIDFweCAjOTlDRTI4OyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/progresso/progresso.component.ts":
/*!**************************************************!*\
  !*** ./src/app/progresso/progresso.component.ts ***!
  \**************************************************/
/*! exports provided: ProgressoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressoComponent", function() { return ProgressoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressoComponent = /** @class */ (function () {
    function ProgressoComponent() {
        this.progresso = 0;
    }
    ProgressoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProgressoComponent.prototype, "progresso", void 0);
    ProgressoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progresso',
            template: __webpack_require__(/*! raw-loader!./progresso.component.html */ "./node_modules/raw-loader/index.js!./src/app/progresso/progresso.component.html"),
            styles: [__webpack_require__(/*! ./progresso.component.css */ "./src/app/progresso/progresso.component.css")]
        })
    ], ProgressoComponent);
    return ProgressoComponent;
}());



/***/ }),

/***/ "./src/app/shared/coracao.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/coracao.model.ts ***!
  \*****************************************/
/*! exports provided: Coracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coracao", function() { return Coracao; });
var Coracao = /** @class */ (function () {
    function Coracao(cheio, coracaoVazio, coracaoCheio) {
        if (coracaoVazio === void 0) { coracaoVazio = "/assets/coracao_vazio.png"; }
        if (coracaoCheio === void 0) { coracaoCheio = "/assets/coracao_cheio.png"; }
        this.cheio = cheio;
        this.coracaoVazio = coracaoVazio;
        this.coracaoCheio = coracaoCheio;
    }
    Coracao.prototype.exibeCoracao = function () {
        if (this.cheio) {
            return this.coracaoCheio;
        }
        else {
            return this.coracaoVazio;
        }
    };
    Coracao.ctorParameters = function () { return [
        { type: Boolean },
        { type: String },
        { type: String }
    ]; };
    return Coracao;
}());



/***/ }),

/***/ "./src/app/tentativas/tentativas.component.css":
/*!*****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbnRhdGl2YXMvdGVudGF0aXZhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tentativas/tentativas.component.ts":
/*!****************************************************!*\
  !*** ./src/app/tentativas/tentativas.component.ts ***!
  \****************************************************/
/*! exports provided: TentativasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TentativasComponent", function() { return TentativasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/coracao.model */ "./src/app/shared/coracao.model.ts");



var TentativasComponent = /** @class */ (function () {
    function TentativasComponent() {
        this.coracaoVazio = "/assets/coracao_vazio.png";
        this.coracaoCheio = "/assets/coracao_cheio.png";
        this.coracoes = [new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_2__["Coracao"](true)];
        // console.log(this.coracoes)
    }
    TentativasComponent.prototype.ngOnChanges = function () {
        if (this.tentativas) {
            // let indice: number = this.coracoes.length - this.tentativas
            this.coracoes[this.tentativas - 1].cheio = false;
        }
        // console.log('Tentativas vinda do Painel: ', this.tentativas)
    };
    TentativasComponent.prototype.ngOnInit = function () {
        // console.log('Tentativas vinda do Painel: ', this.tentativas)
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TentativasComponent.prototype, "tentativas", void 0);
    TentativasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tentativas',
            template: __webpack_require__(/*! raw-loader!./tentativas.component.html */ "./node_modules/raw-loader/index.js!./src/app/tentativas/tentativas.component.html"),
            styles: [__webpack_require__(/*! ./tentativas.component.css */ "./src/app/tentativas/tentativas.component.css")]
        })
    ], TentativasComponent);
    return TentativasComponent;
}());



/***/ }),

/***/ "./src/app/topo/topo.component.css":
/*!*****************************************!*\
  !*** ./src/app/topo/topo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar{ background: #1CB0F6; color: #fff; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wby90b3BvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUiLCJmaWxlIjoic3JjL2FwcC90b3BvL3RvcG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7IGJhY2tncm91bmQ6ICMxQ0IwRjY7IGNvbG9yOiAjZmZmOyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/topo/topo.component.ts":
/*!****************************************!*\
  !*** ./src/app/topo/topo.component.ts ***!
  \****************************************/
/*! exports provided: TopoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopoComponent", function() { return TopoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopoComponent = /** @class */ (function () {
    function TopoComponent() {
        this.titulo = "Aprendendo Inglês";
    }
    TopoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // // Ira chamar o componente com o "app-topo"
            // selector: '[app-topo]', ********* Chama como um atributo da div
            // selector: '.app-topo', ********* Chama como uma class da div
            selector: 'app-topo',
            // Qual o html que a class vai controlar
            template: __webpack_require__(/*! raw-loader!./topo.component.html */ "./node_modules/raw-loader/index.js!./src/app/topo/topo.component.html"),
            styles: [__webpack_require__(/*! ./topo.component.css */ "./src/app/topo/topo.component.css")]
        })
    ], TopoComponent);
    return TopoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\angular\app1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map