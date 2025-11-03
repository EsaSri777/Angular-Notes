import { Routes } from '@angular/router';
import { AngularComponent } from './component/angular/angular.component';
import { DatabindingComponent } from './component/databinding/databinding.component';
import { DirectivesComponent } from './component/directives/directives.component';
import { RoutingComponent } from './component/routing/routing.component';
import { CompcommunicationComponent } from './component/compcommunication/compcommunication.component';

export const routes: Routes = [
  {
    path: 'angular',
    component: AngularComponent,
  },
  {
    path: 'databinding',
    component: DatabindingComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'routing',
    component: RoutingComponent,
  },
  {
    path: 'c-communication',
    component: CompcommunicationComponent,
  },
  {
    path: '',
    redirectTo: 'angular',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'angular',
    pathMatch: 'full',
  },
];
