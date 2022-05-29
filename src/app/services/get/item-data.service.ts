import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from 'src/app/classes/url';
import { Item } from 'src/app/interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor(private http:HttpClient) { }
  getItem(): Observable<Item>{
    return new Observable<Item>(observer=>{
      setInterval(()=>{
        this.http.get<Item>(new Url().getItem).subscribe(result=>{
          observer.next(result)
        })
      },1000)      
    })
  }
}
