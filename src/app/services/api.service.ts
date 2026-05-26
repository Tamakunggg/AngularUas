import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/api/mensaje';

  constructor(private http: HttpClient) { }

  obtenerMensaje() {
    return this.http.get(this.apiUrl);
  }

}