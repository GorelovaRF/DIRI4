import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-div',
  templateUrl: './error-div.component.html',
  styleUrls: ['./error-div.component.scss']
})


export class ErrorDivComponent implements OnInit {

  @Input()

public error:any

  constructor() { }

  ngOnInit(): void {
  }

}
