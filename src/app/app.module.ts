import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VersionComparatorComponent} from './version-comparator/version-comparator.component';
import {InstructionComponent} from './instruction/instruction.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MarkdownModule} from 'ngx-markdown';
import {ListOfInstructionsComponent} from './list-of-instructions/list-of-instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    VersionComparatorComponent,
    ListOfInstructionsComponent,
    InstructionComponent,
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
export class AppModule {}
