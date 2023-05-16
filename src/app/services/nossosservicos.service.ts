import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NossosservicosService {

  private urlJsonServicos = 'assets/servicos.json';

  constructor(private http: HttpClient) { }

  getServicos(): Observable<any> {
    return this.http.get<any>(this.urlJsonServicos);
  }
}
