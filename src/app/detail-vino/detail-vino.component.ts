import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vino } from '../shared/vino.model';
import { VinoService } from '../shared/vino.service';

@Component({
  selector: 'app-detail-vino',
  templateUrl: './detail-vino.component.html',
  styleUrls: ['./detail-vino.component.scss']
})
export class DetailVinoComponent implements OnInit {

 
  public product: any;

  constructor(protected activateRoute: ActivatedRoute, protected service:VinoService) { }

  ngOnInit(): void {

    const id:any = this.activateRoute.params.subscribe(r => {
      let prID = r['id'];
      
     this.service.getProductById(prID).subscribe( res => {
       this.product = res;
       console.log("DETALLE DE PRODUCTO:",this.product)
     })  
    })
   

  }

}
