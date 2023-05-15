import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  constructor(private http: HttpClient) {}
  httpGet(url: any) {
    return this.http.get(url).pipe(
      map(
        (res) => {
          return res;
        },
        (err: any) => {
          console.log(err);
        }
      )
    );
  }
  httpPost(url: any, obj: any) {
    return this.http.post(url, obj).pipe(
      map(
        (res) => {
          return res;
        },
        (err: any) => {
          console.log(err);
        }
      )
    );
  }
  getAllAssets() {
    return this.http.get(`http://localhost:3500/assets`).pipe(map(res => {
      return res;
    }, (err:any) => {
      console.log(err);
    }));
  }
  addAsset(obj: any) {
    return this.httpPost(`http://localhost:3500/assets`, obj);
  }
}
