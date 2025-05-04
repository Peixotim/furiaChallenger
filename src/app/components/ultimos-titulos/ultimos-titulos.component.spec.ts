import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosTitulosComponent } from './ultimos-titulos.component';

describe('UltimosTitulosComponent', () => {
  let component: UltimosTitulosComponent;
  let fixture: ComponentFixture<UltimosTitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimosTitulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimosTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
