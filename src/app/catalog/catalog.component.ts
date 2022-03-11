import { Component, Input, OnInit } from '@angular/core';
import { Vino } from '../shared/vino.model';
import { VinoService } from '../shared/vino.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public error:any
  public searchVine:any;

  
  public productList!: Vino[]

  constructor(protected service: VinoService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(res =>{
      this.productList = res
      console.log("PRDOCTOS",this.productList)
    },(error) => {
      console.log("ERROR FROM TS",error)
      this.error = error;
    })

    console.log("ERROR",this.error)
    
  }

  

}
