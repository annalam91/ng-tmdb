import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

export interface Movie {
  // Properties
  title: string;
  overview: string;
  release_date: Date;
}

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private url = 'https://api.themoviedb.org/3/';
  private api ='60ccf3adb1f3829af422add0c923b667';

  constructor(private http: HttpClient) { }

    getMovie(search: string): Observable<any> {
      return this.http.get(`${this.url}search/movie?query=${search}&api_key=${this.api}`)
    }
    translateDescription(text:string): Observable<any> {
      return this.http.get(`https://api.funtranslations.com/translate/yoda.json?text=${text}`);
    }
}
