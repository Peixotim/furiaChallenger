import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProximosGamesComponent } from './proximos-games.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProximosGamesComponent', () => {
  let component: ProximosGamesComponent;
  let fixture: ComponentFixture<ProximosGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProximosGamesComponent],
      imports: [HttpClientTestingModule, CommonModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // ignora componentes externos
    }).compileComponents();

    fixture = TestBed.createComponent(ProximosGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
