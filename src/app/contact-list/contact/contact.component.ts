import { Component, Input, OnInit } from '@angular/core';
import { IContact } from '../core/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: IContact;

  constructor() { }

  ngOnInit() {
  }

  deleteContact(contactId): void {
    console.log('Delete contact with id: ', contactId);
  }

}
