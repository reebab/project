import { Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {


   name : string ='' ;
   email : string ='';
   phone: string ='';
   movefrom : string ='';
   moveto : string ='';
   distance : string ='';
   message : string ='';

 constructor(private router:Router,private firestore:Firestore){}
 
  addData(f:any)
   {
    if(this.name == ''){
      alert('please enter name')
      return;
    }
    if(this.email == ''){
      alert('please enter email')
      return;
    }
    if(this.phone == ''){
      alert('please enter number')
      return;
    }
    if(this.movefrom == ''){
      alert('please enter placefrom')
      return;
    }
    if(this.moveto == ''){
      alert('please enter placeto')
      return;
    }
    if(this.distance == ''){
      alert('please enter distance')
      return;
    }
    if(this.message == ''){
      alert('please enter message')
      return;
    }
    const collectionInstance =collection(this.firestore,'userbooking');
   addDoc(collectionInstance,f.value).then(() =>{
     console.log('data saved successfully')
     alert('send successful');
     this.router.navigate(['']);
   })
   .catch((err)=>{
  console.log(err);
   })
 }

}


