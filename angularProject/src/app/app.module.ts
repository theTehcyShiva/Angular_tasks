import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ComicbooksModule} from './comicbooks/comicbooks.module';
import { ComicbooksRoutingModule } from './comicbooks/comicbooks-routing.module';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./comicbooks/comicbooks.module').then((b) => b.ComicbooksModule),
  },
];

 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComicbooksModule,
    ComicbooksRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, MatTableModule, MatIconModule, MatPaginatorModule
    ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
