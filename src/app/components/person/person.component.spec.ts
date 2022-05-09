import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Person } from '../models/person.model';

import { PersonComponent } from './person.component';

fdescribe('PersonComponent', () => {
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

  it('should the name be "Nicolas"', () => {
    component.person = new Person('Nicolas', 'Molina', 28, 89, 1.4)
    expect(component.person.name). toEqual('Nicolas');
  });


  it('should have <p> with "Soy un párrafo"', () => {
    const personDegub: DebugElement = fixture.debugElement;
    const pDebug: DebugElement = personDegub.query(By.css('p'));
    const pElement: HTMLElement = pDebug.nativeElement;

    expect(pElement?.textContent).toEqual('Soy un párrafo');

  });

  it('should have <h3> with "Soy un párrafo"', () => {
    // Arrange
    component.person = new Person('Daniel', 'Meza', 28, 89, 1.4)
    const expectMsg = `Hola, ${component.person.name}`
    const personDegub: DebugElement = fixture.debugElement;
    const h3Debug: DebugElement = personDegub.query(By.css('h3'));
    const h3Element: HTMLElement = h3Debug.nativeElement;

    // Act
    fixture.detectChanges()

    // Assert
    expect(h3Element?.textContent).toEqual('Soy un párrafo');

  });

  it('should display text with IMC when call IMC', () => {
    // Arrange
    const expectMsg = 'overweight level';
    component.person = new Person('Daniels', 'Mezas', 25, 89, 1.4);
    const button: any = fixture.debugElement.query(By.css('button.btn-imc')).nativeElement;

    // Act
    component.calcIMC();
    fixture.detectChanges();

    // Assert
    expect(button.textContent).toContain(expectMsg);

  });

  it('should display text with IMC when do click', () => {
    // Arrange
    const expectMsg = 'down';
    component.person = new Person('Daniels', 'Mezas', 38, 40, 1.65);
    const buttonDebug: DebugElement = fixture.debugElement.query(By.css('button.btn-imc'));
    const buttonElement: any = buttonDebug.nativeElement;

    // Act
    buttonDebug.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Assert
    expect(buttonElement.textContent).toContain(expectMsg);

  });


});
