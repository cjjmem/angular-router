import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisService }         from './crisis.service';

@RouteConfig([
    {path:'/',    name: 'CrisisList',   component: CrisisListComponent, useAsDefault: true},
    {path:'/:id', name: 'CrisisDetail', component: CrisisDetailComponent}
])

@Component({
    template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
    directives: [RouterOutlet],
    providers:  [CrisisService]
})

export class CrisisCenterComponent { }
