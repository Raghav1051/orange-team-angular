import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RootComponent} from "./app.component"
import { FormsModule } from '@angular/forms';
import { SerachPhysicianService } from './search.physician.service';
import {SearchResult} from './app.searchresultcomponent';
import { AppRoutingModule } from './app-routing.module';
import {SearchComponent} from "./app.component.search";
import { RouterModule, Routes } from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination';
import {AboutComponent} from './app.component.about';
import {HelpComponent} from './app.component.help';

/**
 * This module is the root module for the application
 */
@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, Ng2PaginationModule, ],
  declarations: [ RootComponent, SearchResult, SearchComponent,AboutComponent, HelpComponent],
  providers:    [ SerachPhysicianService ],
  bootstrap:    [ RootComponent ],
  exports:      [ Ng2PaginationModule,SearchComponent]
})
export class AppModule { }
