import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { invokeBooksAPI } from '../store/comic.actions';
import { selectBooks } from '../store/comic.selector';
import { BooksService } from '../comicbooksService'
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 displayedColumns: string[] = ['Id', 'Name', 'Cover_Image_Url', 'Publication_Date' ,"Genre", "Excerpt", "Written_By", "Publusher","Publusher","Actions"];
  books$ = this.store.pipe(select(selectBooks));
  dataSource = this.books$;

  data: import("c:/Users/shivalilla/Desktop/Angular_tasks/angularProject/src/app/comicbooks/store/comicbooksinterface").comicInterface[];
  constructor(private store: Store, private booksService: BooksService) {}

  ngOnInit(): void {
    this.store.dispatch(invokeBooksAPI());
    console.log('data', this.books$);


  }
  routeToAddComic(){
  //to do navigation code for create comic component
  }
}
