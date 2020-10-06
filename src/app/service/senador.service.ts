import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Senador } from '../model/senador';

@Injectable({
  providedIn: 'root',
})
export class SenadorService {
  constructor(private httpClient: HttpClient) {}

  urlBase: string = 'http://localhost:3000/senadores';

  // Obtem todos os senadores
  getSenadores(): Observable<Senador[]> {
    return this.httpClient
      .get<Senador[]>(this.urlBase)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
