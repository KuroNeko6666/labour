import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public auth: AngularFireAuth,
    public router: Router,
  ) { }

  loading:boolean = false;
  hide:boolean = true;
  name: any = new FormControl('',[Validators.required]);
  email: any = new FormControl('',[Validators.required, Validators.email]);
  password: any = new FormControl('',[Validators.required, Validators.minLength(6)]);

  register(){
    this.loading = true;
    this.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(res=>{
      res.user?.updateProfile({displayName: this.name.value});
      this.loading = false;
      this.router.navigate(['/login'])
    }).catch(err=>{
      console.log(err);
      this.loading = false;
    })
  }

  login(){
    this.loading = true;
    this.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(res=>{
      localStorage.setItem('keyToken', JSON.stringify(res.user?.uid));
      localStorage.setItem('session', JSON.stringify(res.user));
      console.log(res.user);

      this.loading = false;
      this.router.navigate(['/admin']);
    }).catch(err=>{
      console.log(err);
      this.loading = false;
    })
  }

  forgot(){
    this.loading = false;
    this.auth.sendPasswordResetEmail(this.email.value).then(res=>{
      this.loading = false;
    }).catch(err=>{
      console.log(err);
      this.loading = false;

    });
  }

  logout(){
    localStorage.removeItem('keyToken');
    window.location.reload();
  }

  checkToken(){
    let token = JSON.parse(localStorage.getItem('keyToken')!);
    console.log(token);

    if(token == null){
      this.router.navigate(['/login'])
    }
  }
}
