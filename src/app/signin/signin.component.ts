import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VinoService } from '../shared/vino.service';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public form:any

  constructor(protected fb:FormBuilder,protected service: VinoService, protected router: Router) {
    this.createLoginForm()
   }

  ngOnInit(): void {
  }

  createLoginForm(){
    this.form=this.fb.group({
      email: ['',Validators.compose([
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") 
      ])],
      pass: ['',Validators.required],
      passMatch: ['', [Validators.required]]
    },{
      validator: ConfirmedValidator('pass','passMatch')
    })
  }

  get f() {return this.form.controls}


  signup(){
    const user= {email:this.f.email.value, pass:this.f.pass.value}

    
      this.service.signup(user).subscribe(res =>{
        console.log("usuario creado",res)
        this.router.navigate(['login']);
      })
    
   

  }

}
