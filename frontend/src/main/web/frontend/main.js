(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:4567';
    }
    ApiService.prototype.getDatabases = function () {
        return this.http.get(this.baseUrl + "/databases");
    };
    ApiService.prototype.getTables = function (database) {
        var dbQuery = { database: database };
        return this.http.post(this.baseUrl + "/tables", dbQuery);
    };
    ApiService.prototype.getVariables = function (database, table) {
        var tableQuery = { database: database, table: table };
        return this.http.post(this.baseUrl + "/variables", tableQuery);
    };
    ApiService.prototype.query = function (database, table, variable) {
        var variableQuery = { database: database, table: table, variable: variable };
        return this.http.post(this.baseUrl + "/query", variableQuery);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/query.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["QueryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/query.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.mat-elevation-z8{\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbar/query.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Title</h1>\n\n<mat-card class=\"my-card\">\n\n  <mat-card-header>\n    <mat-card-title><h3>Query parameters</h3></mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n    <form class=\"test-form\">\n      <mat-form-field>\n        <mat-select placeholder=\"Database\" id=\"database\" [(ngModel)]=\"selectedDatabase\"\n                    (ngModelChange)=\"databaseChange()\"\n                    name=\"selectedDatabase\">\n          <mat-option *ngFor=\"let db of databases\" [value]=\"db\">{{db}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select placeholder=\"Table\" id=\"table\" [(ngModel)]=\"selectedTable\" (ngModelChange)=\"tableChange()\"\n                    name=\"selectedTable\">\n          <mat-option *ngFor=\"let tab of tables\" [value]=\"tab\">{{tab}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select placeholder=\"Variable\" id=\"variable\" [(ngModel)]=\"selectedVariable\" [(ngModel)]=\"selectedVariable\"\n                    (ngModelChange)=\"variableChange()\" name=\"selectedVariable\">\n          <mat-option *ngFor=\"let variable of variables\" [value]=\"variable\">{{variable}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n\n</mat-card>\n\n<mat-card *ngIf=\"dataSource != null\">\n  <mat-card-header>\n    <mat-card-title><h3>Results</h3></mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p *ngIf=\"queryResult.rows > 100\"> Partial result, only 100 rows on {{queryResult.rows}}.</p>\n    <p *ngIf=\"queryResult.rows <= 100\"> Full rows are displayed.</p>\n    <table mat-table class=\"mat-elevation-z8\"  [dataSource]=\"dataSource\" matSort>\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Value</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"count\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Count</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.count}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"averageAge\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Average age</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.averageAge}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </mat-card-content>\n</mat-card>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/query.component.ts ***!
  \**********************************************/
/*! exports provided: QueryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(apiService) {
        this.apiService = apiService;
        this.displayedColumns = ['name', 'count', 'averageAge'];
        this.databases = [];
        this.tables = [];
        this.variables = [];
        this.queryParams = {
            'database': '',
            'table': '',
            'variable': ''
        };
        this.selectedDatabase = null;
        this.selectedTable = null;
        this.selectedVariable = null;
        this.queryResult = null;
        this.dataSource = null;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getDatabases().subscribe(function (data) {
            _this.databases = data;
        });
    };
    ToolbarComponent.prototype.databaseChange = function () {
        var _this = this;
        this.queryParams.database = this.selectedDatabase;
        this.queryParams.table = '';
        this.queryParams.variable = '';
        this.selectedTable = null;
        this.selectedVariable = null;
        this.variables = [];
        this.queryResult = null;
        this.dataSource = null;
        this.apiService.getTables(this.queryParams.database).subscribe(function (data) { return _this.tables = data; });
    };
    ToolbarComponent.prototype.tableChange = function () {
        var _this = this;
        this.queryParams.table = this.selectedTable;
        this.queryParams.variable = '';
        this.selectedVariable = null;
        this.queryResult = null;
        this.dataSource = null;
        this.apiService.getVariables(this.queryParams.database, this.queryParams.table).subscribe(function (data) { return _this.variables = data; });
    };
    ToolbarComponent.prototype.variableChange = function () {
        var _this = this;
        this.queryParams.variable = this.selectedVariable;
        this.apiService.query(this.queryParams.database, this.queryParams.table, this.queryParams.variable).subscribe(function (data) {
            _this.queryResult = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.queryResult.columns);
            _this.dataSource.sort = _this.sort;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ToolbarComponent.prototype, "sort", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./query.component.html */ "./src/app/toolbar/query.component.html"),
            styles: [__webpack_require__(/*! ./query.component.css */ "./src/app/toolbar/query.component.css")]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
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

module.exports = __webpack_require__(/*! C:\Users\mat\WebstormProjects\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
