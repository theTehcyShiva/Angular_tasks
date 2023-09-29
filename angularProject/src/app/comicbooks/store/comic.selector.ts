import { createFeatureSelector } from '@ngrx/store';
import { comicInterface } from './comicbooksinterface';
 
export const selectBooks = createFeatureSelector<comicInterface[]>('mybooks');