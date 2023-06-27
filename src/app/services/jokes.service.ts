import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  url : string = 'https://official-joke-api.appspot.com/random_joke';

  constructor(private http:HttpClient) { }
  
  // getJoke(): Observable<any> {
  //   return interval(20000).pipe(
  //     switchMap(() => 
  //       this.http.get(this.url)
  //     )
  //   );
  // }
  getJoke():Observable<any>{
    return this.http.get(this.url);
  }
}
