import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../shared/vino.model';
import { VinoService } from '../shared/vino.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form:any
  public token!: string
  public user!: any
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
      pass: ['',Validators.required]
    })
  }

  get f() {return this.form.controls}

  

  login(){
    this.service.login().subscribe(res => {
      const user = res.find((u:any)=> {
        return u.email ===this.f.email.value && u.pass === this.f.pass.value
      });
      if(user){
        alert("Login Success");
        this.form.reset();
        this.router.navigate(['home'])
      }else{
        alert("user not found")
      }
      }
    )
  }

}
