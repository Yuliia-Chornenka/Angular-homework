import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Result } from './result';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  isUserExist(): boolean {
    return !!window.localStorage.userName;
  }

  getName(): Observable<string> {
    if (window.localStorage.userName) {
      return of(localStorage.getItem('userName'));
    } else {
      return of('');
    }
  }

  rememberUser(name: string): void {
    localStorage.setItem('userName', name);
  }

  removeUser(): void {
    localStorage.removeItem('userName');
    localStorage.removeItem('userResults');
  }

  saveUserResults(results: Result[]): void {
    const resultExist = localStorage.getItem('userResults');
    if (resultExist) {
      const savedResults: Result[] = JSON.parse(localStorage.getItem('userResults'));

      results.forEach((item) => {
        savedResults.push(item);
      });

      localStorage.setItem('userResults', JSON.stringify(savedResults));
    } else {
      localStorage.setItem('userResults', JSON.stringify(results));
    }
  }

  getUserResults(): Observable<Result[]> {
     const results = JSON.parse(localStorage.getItem('userResults'));
     return of(results);
  }
}
