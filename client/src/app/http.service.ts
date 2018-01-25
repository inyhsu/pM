import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/product')
  }

  create(product){
    return this._http.post('/product',product)
  }

  viewOne(id){
    console.log(id);
    return this._http.get(`/product/${id}`)
  }

  update(content){
    console.log(content._id);
    return this._http.patch(`/product/${content._id}`,content)
  }

  delete(id){
    return this._http.delete(`/product/${id}`)
  }
}
