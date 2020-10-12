import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }
  showProducts()
  {
    const _header=new HttpHeaders();
    const headers=_header.append("ContentType","application/jason");
    const url="https://fakestoreapi.com/products";
    return this.http.get(url,{headers});
  }
}
