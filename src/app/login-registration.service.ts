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
  passwordreset(email: string) {
    return this.http.post(`${this.apiUrl}/passwordreset`, email);
  }
  passwordrestcheckcode(code: string) {
    return this.http.post(`${this.apiUrl}/codecheck`, code);
  }

  signUp(name: string, email: string, password: string): Observable<any> {
    const data = { name, email, password };
    return this.http.post(`${this.apiUrl}/sign-up`, data);
  }

  passwordReset(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/passwordreset`, email);
  }

  getUserData(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.apiUrl}/user-data`, { headers });
  }

  logout(): void {
    this.removeToken();
  }

  pushblog(
    mainhead: string,
    head: string,
    head1: string,
    head2: string,
    head3: string,
    head4: string,
    maintext: string,
    text: string,
    text1: string,
    text2: string,
    text3: string,
    text4: string,
    image: File
  ): Observable<any> {
    const blog = {
      mainhead,
      maintext,
      head,
      text,
      head1,
      text1,
      head2,
      text2,
      head3,
      text3,
      head4,
      text4,
    };
    return this.http.post(`${this.apiUrl}/uploadblog`, { blog, File });
  }
}
