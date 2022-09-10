import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogrosCertificadosComponent } from './logros-certificados.component';

describe('LogrosCertificadosComponent', () => {
  let component: LogrosCertificadosComponent;
  let fixture: ComponentFixture<LogrosCertificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogrosCertificadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogrosCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
