import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginRegistrationService {
  private apiUrl = 'http://localhost:8080/api';
  private tokenKey = 'authToken';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken()
  );

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
    this.isAuthenticatedSubject.next(true);
  }

  private removeToken(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
  }

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isUserLoggedIn(): boolean {
    return this.hasToken();
  }

  signIn(email: string, password: string): Observable<any> {
    const data = { email, password };
    return this.http.post(`${this.apiUrl}/sign-in`, data).pipe(
      tap((response: any) => {
        const token = response.token;
        this.setToken(token);
      })
    );
  }

  signUp(name: string, email: string, password: string): Observable<any> {
    const data = { name, email, password };
    return this.http.post(`${this.apiUrl}/sign-up`, data);
  }

  passwordReset(email:string): Observable<any>{
    return this.http.post(`${this.apiUrl}/passwordreset` , email);
  }

  getUserData(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/user-data`, { headers });
  }

  logout(): void {
    this.removeToken();
  }
}
