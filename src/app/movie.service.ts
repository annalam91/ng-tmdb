import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

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
  private yodaApi = 'http://localhost:4200/translate/yoda.json'

  constructor(private http: HttpClient) { }

    getMovie(search: string): Observable<any> {
      return this.http.get(`${this.url}search/movie?query=${search}&api_key=${this.api}`)
    }

    /**
     * This translateDescription has to be hidden behind a proxy because if you use it straight from the website,
     * you would get the following error:
     * Access to XMLHttpRequest at 'https://api.funtranslations.com/translate/yoda.json' 
     * from origin 'http://localhost:4200' has been blocked by CORS policy: 
     * Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.
     * Therefore I followed this article as a solution
     * https://levelup.gitconnected.com/fixing-cors-errors-with-angular-cli-proxy-e5e0ef143f85
     */
    translateDescription(params: object): Promise<any> {
      return new Promise ((resolve, reject) => 
      { this.http.post(`${this.yodaApi}`, params,).subscribe((res: any) => {
        resolve(res);
    },
      error => {
          reject(error);
      });
    });
  }
}
