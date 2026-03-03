import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }
  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(products => products.map(p => ({
        id: p.id,
        title: p.title, 
        image: p.image  
      })))
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return new Observable(observer => {
      observer.next();
      observer.complete();
    });
  }
}