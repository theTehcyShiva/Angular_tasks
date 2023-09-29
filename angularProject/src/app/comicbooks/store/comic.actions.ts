import { createAction, props } from '@ngrx/store';
import { comicInterface } from './comicbooksinterface';

export const invokeBooksAPI = createAction(
    '[Books API] Invoke Books Fetch API'
  );
   
  export const booksFetchAPISuccess = createAction(
    '[Books API] Fetch API Success',
    props<{ allBooks: comicInterface[] }>()
  );