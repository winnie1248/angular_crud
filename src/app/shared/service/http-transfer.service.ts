import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpTransferService {

  constructor() { }

  setHeaders(headers: object) {
    let httpHeaders = new HttpHeaders();
    Object.keys(headers).forEach((key: string) => {
      const headerKey = headers[key];
      if (headerKey) {
        if (Array.isArray(headerKey)) {
          headerKey.forEach((value: any) => {
            httpHeaders = httpHeaders.append(key, value);
          });
        } else {
          httpHeaders = httpHeaders.append(key, headerKey);
        }
      }
    });
    return httpHeaders;
  }

  setParams(params: object) {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key: string) => {
      const paramKey = params[key];
      if (paramKey) {
        if (Array.isArray(paramKey)) {
          paramKey.forEach((value: any) => {
            httpParams = httpParams.append(key, value);
          });
        } else {
          httpParams = httpParams.append(key, paramKey);
        }
      }
    });
    return httpParams;
  }
}
