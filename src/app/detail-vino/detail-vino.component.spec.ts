import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVinoComponent } from './detail-vino.component';

describe('DetailVinoComponent', () => {
  let component: DetailVinoComponent;
  let fixture: ComponentFixture<DetailVinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailVinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
