import { Component, OnInit } from '@angular/core';
import { VinoService } from 'src/app/shared/vino.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  isLoading = this.service.isLoading;

  constructor(protected service: VinoService) { }

  ngOnInit(): void {
  }
}
