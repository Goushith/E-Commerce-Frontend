import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import party from "party-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartitems:any=[]
grand:any
updatetotal:any
  constructor(private cart:CartService,private router:Router) { }

  ngOnInit(): void {






    
    this.cart.cartlist.subscribe(
      (data:any)=>{
        console.log(data)
        this.cartitems=data;
        
      }
    )
    this.grand=this.cart.gettotal()

  }


  removeitem(product:any){
    this.cart.removecart(product)
    this.grand=this.cart.gettotal()

  }


removeall(){
  this.cart.removeall()
}




discount3per(source:any){
// let discount=
this.updatetotal=this.grand-(this.grand*3/100)
party.confetti(source)
}

discount30per(){
  this.updatetotal=this.grand-(this.grand*30/100)
  
}
discount50per(){
  this.updatetotal=this.grand-(this.grand*50/100)
}
discount10per(){
  this.updatetotal=this.grand-(this.grand*10/100)
}



proceed(){
  // this.router.navigateByUrl('')
  // this.removeall()
  // window.location.reload()


this.router.navigate([''])
  .then(() => {
    window.location.reload();
  });

}







}
