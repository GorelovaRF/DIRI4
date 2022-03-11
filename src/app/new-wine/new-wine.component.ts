import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {VinoService} from '../shared/vino.service'
import { CustomeDateValidators } from './year.validator';

@Component({
  selector: 'app-new-wine',
  templateUrl: './new-wine.component.html',
  styleUrls: ['./new-wine.component.scss']
})
export class NewWineComponent implements OnInit {

  error:any={isError:false,errorMessage:""}
  isValidYear:any;
  public form:any

  constructor(protected fb:FormBuilder,protected service: VinoService,private router:Router) { 
    this.createWineForm();
  }

  ngOnInit(): void {
  }

  createWineForm(){
    this.form = this.fb.group({
      nombre: ['',Validators.compose([ Validators.required,Validators.minLength(3),Validators.maxLength(60)])],
      uvas: ['',Validators.compose([Validators.required])],
      pais: ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z ]*$')])],
      anyo: ['',Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])],
      precio: ['',Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])],
      imagen: ['',Validators.compose([Validators.required])],
      descripcion: ['',Validators.compose([Validators.required, Validators.pattern('[-_a-zA-Z0-9]*')])],
      region: ['',Validators.compose([ Validators.required,Validators.pattern('^[a-zA-Z ]*$')])]

    }, { validator: CustomeDateValidators('anyo')
  })
}
  

  get f() {return this.form.controls}

  createNewWine(){

    const vino = {
      nombre: this.f.nombre.value,
      uvas: this.f.uvas.value,
      pais: this.f.pais.value,
      anyo: this.f.anyo.value,
      precio: this.f.precio.value,
      imagen: this.f.imagen.value,
      descripcion: this.f.descripcion.value,
      region: this.f.region.value,

    }
    this.service.createWine(vino).subscribe(res => {
        console.log("NEW WINE CREATED",res);
    
    })

    this.router.navigate(['nuevoVino/catalogo'])
    setInterval(function() {location.reload();},200);
  }

}
