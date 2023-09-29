import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/comic.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffect } from './store/comic.effect';

import { ComicbooksRoutingModule } from './comicbooks-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComicbooksRoutingModule,
    StoreModule.forFeature('mybooks', bookReducer),
    EffectsModule.forFeature([BooksEffect])
  ]
})
export class ComicbooksModule { }