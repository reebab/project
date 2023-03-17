import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import{ Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth :AngularFireAuth,private router : Router, ) { }

  login (email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token','true');
      alert('Signin successful');
       this.router.navigate(['/home']);
    }, err => {
      alert('something went wrong');
      this.router.navigate(['/login']);
    })
  }

   // register or signup

   register(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then( () => {
      alert('Registration Successfull ');
      this.router.navigate(['/login']);
    },err =>{
      alert(err.message);
      this.router.navigate(['/register']);
    } )
  }

}
