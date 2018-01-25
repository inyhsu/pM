import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  errors;
  products;

  product ={
    title:"",
    price:0,
    image:""
  }

  constructor(
    private _httpService : HttpService,
    private _router : Router
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this._httpService.getAll().subscribe(data =>{
      console.log(data);
      this.products = data;
    })
  }

  create(){
    console.log(this.product);
    this._httpService.create(this.product).subscribe(data =>{
      console.log(data);
      if(data['err']){
        this.errors = data['err'];
        console.log(this.errors);
      }
      else{
        this._router.navigateByUrl('products');
      }
    })
  }
}
