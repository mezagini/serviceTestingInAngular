import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PersonComponent } from './person.component';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <p> with "Soy un párrafo"', () => {
    const personDegub: DebugElement = fixture.debugElement;
    const pDebug: DebugElement = personDegub.query(By.css('p'));
    const pElement: HTMLElement = pDebug.nativeElement;

    expect(pElement?.textContent).toEqual('Soy un párrafo');

  });

  it('should have <h3> with "Soy un párrafo"', () => {
    const personDegub: DebugElement = fixture.debugElement;
    const h3Debug: DebugElement = personDegub.query(By.css('h3'));
    const h3Element: HTMLElement = h3Debug.nativeElement;


    expect(h3Element?.textContent).toEqual('Soy un párrafo');

  });

});
