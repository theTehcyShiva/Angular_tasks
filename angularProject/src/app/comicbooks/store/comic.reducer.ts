import { createReducer, on } from "@ngrx/store";
import { comicInterface } from "./comicbooksinterface";
import { booksFetchAPISuccess } from './comic.actions';
 
export const initialState: ReadonlyArray<comicInterface> = [];
 
export const bookReducer = createReducer(
    initialState,
    on(booksFetchAPISuccess, (state, { allBooks }) => {
        return allBooks;
      })
);


 
 