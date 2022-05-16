import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Person } from '../models/person.model';
import { PersonComponent } from '../person/person.component';

import { PeopleComponent } from './people.component';

fdescribe('PeopleComponent', () => {
  let component: PeopleComponent;
  let fixture: ComponentFixture<PeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeopleComponent, PersonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should have a list app-person components', () => {
    // Arr
    component.people = [
      new Person('Daniel', 'Meza', 25, 105, 1.80),
      new Person('Pepo', 'Mendoza', 25, 105, 1.80),
    ];


    // Act
    fixture.detectChanges();
    const debugElement = fixture.debugElement.queryAll(By.css('app-person'));

    // Assert
    expect(debugElement.length).toEqual(2);

  });

  it('should raise selected event when clicked', () => {
    // Arr
    const debugBtn = fixture.debugElement.query(By.css('app-person .btn-choose'));

    // Act
    debugBtn.triggerEventHandler('click', null);
    // fixture.detectChanges();

    // Assert
    expect(component.selectedPerson).toEqual(component.people[0]);

  });

  it('should render the selectedPerson', () => {
    // Arr
    const debugBtn = fixture.debugElement.query(By.css('app-person .btn-choose'));

    // Act
    debugBtn.triggerEventHandler('click', null);
    fixture.detectChanges();

    const liDebug = fixture.debugElement.query(By.css('.selectedPerson ul > li'));


    // Assert
    expect(component.selectedPerson).toEqual(component.people[0]);
    expect(liDebug.nativeElement.textContent).toContain(component.selectedPerson?.name);

  });


});
