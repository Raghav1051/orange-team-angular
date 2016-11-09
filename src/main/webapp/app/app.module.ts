import {APP_BASE_HREF} from '@angular/common';

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RootComponent} from "./app.component"
import { FormsModule } from '@angular/forms';
import { SerachPhysicianService } from './search.physician.service';
import {SearchResult} from './app.searchresultcomponent';
import { AppRoutingModule } from './app-routing.module';
import {SearchComponent} from "./app.component.search";
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './app.component.about';
import {HelpComponent} from './app.component.help';

/**
 * This module is the root module for the application
 */
@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ],
  declarations: [ RootComponent, SearchResult, SearchComponent,AboutComponent, HelpComponent],
  providers:    [ SerachPhysicianService ],
  bootstrap:    [ RootComponent ],
  exports:      [ SearchComponent]
})
export class AppModule { }
