import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  product = {
    id:"",
    title:"",
    price:0,
    image:""
  }

  item;
  errors;

  constructor(
    private _getrouteid: ActivatedRoute, 
    private _httpService : HttpService,
    private _router : Router
  ) { }

  ngOnInit() {
    this._getrouteid.params.subscribe(params => {
      this.product.id = params.id;
      console.log(this.product.id);
      this._httpService.viewOne(this.product.id).subscribe(data => {
        console.log(data);
        this.product = data['data'][0];
      })
    })
  }

  update(){
    console.log(this.product);
    this._httpService.update(this.product).subscribe(data => {
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

  delete(id){
    this._httpService.delete(id).subscribe(data=>{
      console.log(data['data']);
      this._router.navigateByUrl('products');
    })
  }
}
