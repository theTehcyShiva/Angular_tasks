import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { comicInterface } from './store/comicbooksinterface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  baseUrl = 'http://localhost:3000/books';
  constructor(private http: HttpClient) {}
  getAllComic() {
    return this.http.get<comicInterface[]>(this.baseUrl);
  }
  getComic(id:number) {
    return this.http.get<comicInterface[]>(this.baseUrl+ id);
  }
  deleteComic(id:number) {
    return this.http.delete(this.baseUrl+id);
  }
  updateComic(data:comicInterface) {
    return this.http.put<comicInterface[]>(this.baseUrl+data.Id, data);
  }
  createComic(data:comicInterface) {
    return this.http.post<comicInterface[]>(this.baseUrl,data);
  }
}