import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  location!: any

  constructor() { 

    this.location = {
      latitude: 38.383115,
      longitude: -0.509398,
      zoom: 17,
      mapType: "hybrid"
     
    }

  }

  ngOnInit(): void {
  }

}
