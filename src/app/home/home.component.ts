import { Component, OnInit } from '@angular/core';

import { VinoService } from '../shared/vino.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(protected service: VinoService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged(){
    
    // this.service.getUser().subscribe(user=> {
    //   console.log(user)
    // })
  }

}
