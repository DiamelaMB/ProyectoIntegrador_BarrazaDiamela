import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCertificadosComponent } from './cursos-certificados.component';

describe('CursosCertificadosComponent', () => {
  let component: CursosCertificadosComponent;
  let fixture: ComponentFixture<CursosCertificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosCertificadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
