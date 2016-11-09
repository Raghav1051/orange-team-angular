import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent }   from './app.component';
import { SearchResult }      from './app.searchresultcomponent'
import {SearchComponent} from './app.component.search';
import {AboutComponent} from './app.component.about';
import {HelpComponent} from './app.component.help';

/**
 * This component is for routing the other components
 */
const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home',  component: SearchComponent },
{ path: 'searchresult/:physician', component: SearchResult },
{ path: 'about', component: AboutComponent},
{ path: 'help', component: HelpComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}
