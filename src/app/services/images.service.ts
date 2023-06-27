import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  
  url : string = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http:HttpClient) { }
  
  getImg():Observable<any>{
    return this.http.get(this.url);
  }
}
