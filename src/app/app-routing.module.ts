import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationPageComponent} from '../views/authorization-page/authorization-page.component';
import {BasedPageComponent} from '../views/based-page/based-page.component';
import {FoundersPageComponent} from '../views/founders-page/founders-page.component';
import {MainPageComponent} from '../views/main-page/main-page.component';
import {AppComponent} from './app.component';

const appRoute: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'roadmap',
    component: BasedPageComponent
  },
  {
    path: 'founders',
    component: FoundersPageComponent
  },
  {
    path: 'authorization',
    component: AuthorizationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, {initialNavigation: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
