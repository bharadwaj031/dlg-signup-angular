import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Service {
  /**
   * This BASE_URL can be configured with AWS Environment Variables or configuring dotenv with process.env
   */
  private readonly BASE_URL = 'https://run.mocky.io/v3'

  constructor(private http: HttpClient) {
    //empty constructor
  }

  get<G>(url: string, params?: HttpParams, headers?: HttpHeaders): Observable<G> {
    const options = { params, headers };
    return this.http.get<G>(`${this.BASE_URL}/${url}`, options);
  }

  post<P>(url: string, body: any, headers?: HttpHeaders): Observable<P> {
    const options = { headers };
    return this.http.post<P>(`${this.BASE_URL}/${url}`, body, options);
  }
  /**
   * Extend the services to support PUT, DELETE
   */
}




