import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Person[] = [
    new Person('Daniel', 'Meza', 25, 105, 1.80),
    new Person('Pepo', 'Mendoza', 25, 105, 1.80),
    new Person('Papri', 'Popi', 25, 105, 1.80),
  ];

  selectedPerson: Person | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  choose(person: Person) {
    this.selectedPerson = person;
  }

}
