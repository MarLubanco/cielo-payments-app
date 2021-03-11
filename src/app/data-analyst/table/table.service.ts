import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const API = 'http://localhost:8082'

@Injectable({providedIn: 'root'})
export class TableService {

    constructor(private http: HttpClient) {}

    getDashboard() {
      return this.http.get<any>(API + "/lancamentos/porcentagem-pagos");
    }
}