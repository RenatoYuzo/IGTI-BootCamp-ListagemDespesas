import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Despesa } from '../model/despesa';

@Injectable({
  providedIn: 'root',
})
export class DespesasSenadorService {
  constructor(private httpClient: HttpClient) {}

  urlBase: string = 'http://localhost:3000/despesasSenadores/';

  // Obtem todas as despesas do senador especificado
  getDespesasPorSenador(id: string): Observable<Despesa> {
    return this.httpClient
      .get<Despesa>(this.urlBase + id)
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
