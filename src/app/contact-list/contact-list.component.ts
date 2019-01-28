import { Component, OnInit } from '@angular/core';
import { IContact } from './core/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: IContact[] = [];

  constructor() {
    this.contacts = [
      {
        id: 123,
        name: 'Marcio',
        lastName: 'Esparza',
        email: 'marcio.esparza@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 456,
        name: 'Nicolas',
        lastName: 'Esparza',
        email: 'nicolas.esparza@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 789,
        name: 'Avril',
        lastName: 'Esparza',
        email: 'avril.esparza@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 3434,
        name: 'Danae',
        lastName: 'Esparza',
        email: 'danae.esparza@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 5454,
        name: 'Jennifer',
        lastName: 'Bolanos',
        email: 'jennifer.bolanos@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 4345,
        name: 'Cristina',
        lastName: 'Licas',
        email: 'crisitna.licas@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 5454,
        name: 'Walter',
        lastName: 'Esparza',
        email: 'walter.esparza@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 9394,
        name: 'Enrique',
        lastName: 'Esparza',
        email: 'enrique.esparza@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 3595,
        name: 'Maria',
        lastName: 'Angel',
        email: 'maria.angel@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 9999,
        name: 'Hugo',
        lastName: 'Calvo',
        email: 'hugo.calvo@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 3595,
        name: 'Luciana',
        lastName: 'Alvarado',
        email: 'luciana.alvarado@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 4492,
        name: 'Adriana',
        lastName: 'Rodriguez',
        email: 'adriana.rodriguez@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 2294,
        name: 'Harry',
        lastName: 'Lux',
        email: 'harry.lux@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 9943,
        name: 'Caig',
        lastName: 'Thopmson',
        email: 'caig.thopmson@gorillalogic.com',
        phone: '123456'
      },
      {
        id: 9943,
        name: 'Robert',
        lastName: 'Hammel',
        email: 'rob.hammel@gorillalogic.com',
        phone: '123456'
      }
    ];
  }

  ngOnInit() {
  }

}
