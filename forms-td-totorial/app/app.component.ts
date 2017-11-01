import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'femail'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;


  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({userData: {username: suggestedName}});

    /** 
    this.signupForm.setValue(
      {
        userData: {
          username: suggestedName,
         
        },
        email: '', 
        secret: 'pet',
        questionAnswer: '',
        gender: 'name'
      }
    );*/
  }

 // onSubmit(form: NgForm){
 //   console.log('Submitted!');
 //   console.log(form);
 // }

 onSubmit(){
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;

    this.signupForm.reset();
 }
}
