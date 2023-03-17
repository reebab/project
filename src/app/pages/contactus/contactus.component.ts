import { Component } from '@angular/core';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent { 
  
  email : string ='' ;
  name : string ='' ;
  phone : string ='' ;
  constructor(private router:Router,private firestore:Firestore){}
  
  addData(f:any)
  {
    if(this.email == ''){
      alert('please enter email')
      return;
    }
    if(this.phone == ''){
      alert('please enter phone no')
      return;
    }
    if(this.name == ''){
      alert('please enter name')
      return;
    }
    const collectionInstance =collection(this.firestore,'userscontact');
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



