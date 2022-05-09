import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  person: Person = new Person('Daniel', 'Meza', 25, 105, 1.80)

  constructor() { }

  ngOnInit(): void {
  }

}
