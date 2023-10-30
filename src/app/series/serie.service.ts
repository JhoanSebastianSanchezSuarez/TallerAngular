import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie';
import { enviroment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

constructor(private http: HttpClient) { }
private url = enviroment.baseUrl;

getSeries(): Observable<Serie[]> {
  return this.http.get<Serie[]>(this.url);
}

}