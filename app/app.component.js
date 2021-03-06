"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var crisis_list_component_1 = require('./crisis-list.component');
var hero_list_component_1 = require('./hero-list.component');
var table_list_component_1 = require('./table-list.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            { path: '/crisis-center', name: 'CrisisCenter', component: crisis_list_component_1.CrisisListComponent },
            { path: '/heroes', name: 'Heroes', component: hero_list_component_1.HeroListComponent },
            { path: 'table', name: 'Table', component: table_list_component_1.TableListComponent }
        ]),
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>\u8DEF\u7531</h1>\n    <nav>\n      <a [routerLink]=\"['CrisisCenter']\">Crisis Center</a>\n      <a [routerLink]=\"['Heroes']\">Heroes</a>\n      <a [routerLink]=\"['Table']\">Table</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map