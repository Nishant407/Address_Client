import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddressBookService } from '../../services/address-book.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent {
  person = {
    name: '',
    address: '',
    email: '',
    phoneNumber: '',
  };

  constructor(private service: AddressBookService) {}

  addPerson() {
    const personData = { ...this.person};
    this.service.addPerson(personData).subscribe(() => {
      alert('Person added successfully!');
      location.reload();
      this.resetForm();
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.resetForm();
    }
    this.person = {
      name: '',
      address: '',
      email:'',
      phoneNumber: '',
    };
  }
}
