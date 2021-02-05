import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AplicaAhoraMentorComponent } from './aplica-ahora-mentor.component'

describe('AplicaAhoraMentorComponent', () => {
  let component: AplicaAhoraMentorComponent
  let fixture: ComponentFixture<AplicaAhoraMentorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AplicaAhoraMentorComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicaAhoraMentorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
