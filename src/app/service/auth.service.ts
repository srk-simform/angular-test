import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { user } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = new BehaviorSubject<user | null>(null);
  private apiURL = 'http://localhost:3000';

  constructor(private Http: HttpClient) {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.currentUser.next(JSON.parse(user));
    }
  }


  loginAsLibrarian(): Observable<user> {
    return this.Http.post<user>(`${this.apiURL}/api/login-librarian`, {}).pipe(
      tap((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser.next(user);
      })
    );
  }

  loginAsUser(): Observable<user> {
    return this.Http.post<user>(`${this.apiURL}/api/login-user`, {}).pipe(
      tap((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser.next(user);
      })
    );
  }
  getCurrRole():Observable<user> {
    return this.Http.get<user>(`${this.apiURL}/api/me`).pipe(
      tap((user)=> {
        //  localStorage.setItem('currentUser', JSON.stringify(user));
        //  this.currentUser.next(user);
      })
    );
  }
  isLoggedIn(): boolean {
    return this.getCurrentUser !== null;
  }
  getCurrentUser(): user | null {
    return this.currentUser.value;
  }
  getToken(): string | null {
    const user = localStorage.getItem('currentUser');
    if(user){
      return JSON.parse(user).token
    }
    return null;
  }

  logout():void{
    localStorage.removeItem('currentUser');
    this.currentUser.next(null);
  }
}
