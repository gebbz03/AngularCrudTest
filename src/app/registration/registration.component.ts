import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'

class Registration {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public dob: NgbDateStruct = null,
    public email: string = '',
    public password: string = '',
    public country: string = 'Select country'
  ) { }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrations: Registration[] = [];

  regModel: Registration;

  showNew: Boolean = false;

  submitType: string = 'Save';

  selectedRow: number;

  countries: string[] = ['Argentina', 'China', 'US', 'UK', 'India', 'UAE', 'Philippines'];
  constructor() {

   // this.registrations.push(new Registration('Jec', 'Doe', { year: 1992, month: 2, day: 2 }, 'jec@gmail.com', 'jec', 'UK'));
   // this.registrations.push(new Registration('Ria', 'Cruz', { year: 1994, month: 9, day: 3 }, 'ria@gmail.com', 'ria', 'UAE'));
   // this.registrations.push(new Registration('Lebron', 'James', { year: 1985, month: 7, day: 25 }, 'lebron@gmail.com', 'lebron', 'India'));
  }

  ngOnInit() { }


  onNew() {

    this.regModel = new Registration();

    this.submitType = 'Save';

    this.showNew = true;
  }


  onSave() {

    if (this.regModel.firstName == '') {
      Swal('Message', 'Please enter First Name!', 'error');

    }
    else if (this.regModel.lastName == '') {
      Swal('Message', 'Please enter Last Name!', 'error');

    }
    else if (this.regModel.dob == null) {
      Swal('Message', 'Please enter Date of Birth!', 'error');
    }
    else if (this.regModel.email == '') {
      Swal('Message', 'Please enter Email!', 'error');

    }
    else if (this.regModel.password == '') {
      Swal('Message', 'Please enter Password!', 'error');

    }
    else if (this.regModel.country == 'Select country') {
      Swal('Message', 'Please select country!', 'error');
    }

    else if (this.submitType === 'Save') {
      Swal('Message', 'Inserted successfully!', 'success');
      this.registrations.push(this.regModel);
      this.showNew = false;

    } else {
      Swal('Message', 'Updated successfully!', 'success');
      this.registrations[this.selectedRow].firstName = this.regModel.firstName;
      this.registrations[this.selectedRow].lastName = this.regModel.lastName;
      this.registrations[this.selectedRow].dob = this.regModel.dob;
      this.registrations[this.selectedRow].email = this.regModel.email;
      this.registrations[this.selectedRow].password = this.regModel.password;
      this.registrations[this.selectedRow].country = this.regModel.country;
      this.showNew = false;
    }

    // this.showNew = false;
  }


  onEdit(index: number) {

    this.selectedRow = index;

    this.regModel = new Registration();

    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);

    this.submitType = 'Update';

    this.showNew = true;
  }


  onDelete(index: number) {
    Swal('Message', 'Removed successfully!', 'success');
    this.registrations.splice(index, 1);
  }


  onCancel() {

    this.showNew = false;
  }


  onChangeCountry(country: string) {

    this.regModel.country = country;
  }

}
