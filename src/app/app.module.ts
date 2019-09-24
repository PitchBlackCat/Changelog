import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VersionComparatorComponent } from './version-comparator/version-comparator.component';
import { ChangeListComponent } from './change-list/change-list.component';
import { ChangeComponent } from './change/change.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MarkdownModule} from "ngx-markdown";

@NgModule({
  declarations: [
    AppComponent,
    VersionComparatorComponent,
    ChangeListComponent,
    ChangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
