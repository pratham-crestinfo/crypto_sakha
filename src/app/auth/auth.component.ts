import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  @ViewChild("f") authForm:NgForm;
  onSignIn() { 
    console.log("SIGINING IN.....")
  }
  onSignUp() {
    console.log("SIGINING UP.....")
  }
}
