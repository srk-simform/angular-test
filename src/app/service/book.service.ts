import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Book } from '../interfaces/book.interface';


@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3000';
  private bookList = new BehaviorSubject<Book[] | null>(null);
  constructor(private Http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.Http.get<Book[]>(`${this.apiUrl}/api/books`).pipe(
      tap((data) => this.bookList.next(data))
    );
  }

  addBook(book: Omit<Book, 'id'>): Observable<Book> {
    return this.Http.post<Book>(`${this.apiUrl}/api.books`, book);
  }
}
