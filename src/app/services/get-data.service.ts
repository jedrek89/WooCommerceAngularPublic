import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

url = 'https://llhysynjlo.cfolks.pl/';
consumerKey = 'ck_YOUR_KEY';
consumerSecret = 'cs_YOUR_KEY';

constructor(private http: HttpClient) {}
getData(){
    return this.http.get(`${this.url}wp-json/wc/v3/orders?consumer_key=${this.consumerKey}&consumer_secret=${this.consumerSecret}`);
  }
}