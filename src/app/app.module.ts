import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule
} from '@angular/material';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';

import {AppComponent} from './app.component';

import {GridsterModule} from 'angular-gridster2';

import {DisplayGridComponent} from './sections/displayGrid/displayGrid.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [

  {path: '', component: DisplayGridComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayGridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule, MatButtonModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatSidenavModule, MatListModule,
    GridsterModule,
    MarkdownModule.forRoot({loader: HttpClient, markedOptions: {provide: MarkedOptions, useValue: {smartypants: true, breaks: true}}}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
