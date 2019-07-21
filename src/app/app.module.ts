import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { RootListComponent } from './root-list/root-list.component';
import {RootService} from "./shared/root/root.service";

@NgModule({
  declarations: [
    AppComponent,
    RootListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [RootService],
  bootstrap: [AppComponent]
})
export class AppModule { }
