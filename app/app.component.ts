import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { CrisisListComponent }   from './crisis-list.component';
import { HeroListComponent }     from './hero-list.component';
import { TableListComponent } from './table-list.component';


@RouteConfig([
    {path: '/crisis-center', name: 'CrisisCenter', component: CrisisListComponent},
    {path: '/heroes',        name: 'Heroes',       component: HeroListComponent},
    {path: 'table',          name:'Table',         component:TableListComponent}
])

@Component({
    selector: 'my-app',
    template: `
    <h1>路由</h1>
    <nav>
      <a [routerLink]="['CrisisCenter']">Crisis Center</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['Table']">Table</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})



export class AppComponent { }

