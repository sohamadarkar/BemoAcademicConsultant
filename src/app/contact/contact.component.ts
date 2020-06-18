import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor() { }
  userForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    query: new FormControl()
}); 

  ngOnInit(): void {
    this.userForm.setValue({
      name: '',
      email: '',
      query: ''
    });
  }

  onFormSubmit() {
    console.log('Name:' + this.userForm.get('name').value);
  }

}
