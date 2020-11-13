import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AplicaAhoraComponent } from './aplica-ahora.component'

describe('AplicaAhoraComponent', () => {
  let component: AplicaAhoraComponent
  let fixture: ComponentFixture<AplicaAhoraComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AplicaAhoraComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicaAhoraComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
