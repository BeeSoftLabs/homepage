import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AplicaAhoraEstudianteComponent } from './aplica-ahora.component'

describe('AplicaAhoraComponent', () => {
  let component: AplicaAhoraEstudianteComponent
  let fixture: ComponentFixture<AplicaAhoraEstudianteComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AplicaAhoraEstudianteComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicaAhoraEstudianteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
