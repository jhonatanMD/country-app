import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private urlApi: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }


  searchCapital(term: string): Observable<Country[]> {
    let url = `${this.urlApi}/capital/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(catchError( error => of([])));
  }
}
