import { Component } from '@angular/core';
import { LoginRegistrationService } from '../login-registration.service';
import { HttpClient } from '@angular/common/http';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormsModule
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
export const StrongPasswordRegx: RegExp =
  /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {
  registrationForm!: FormGroup;
  singinFrom!: FormGroup;
  Emailfor2fa!: string;
  verification!: FormGroup<any>;
  singindata: boolean = false;



  constructor(
    private loginRegistrationService: LoginRegistrationService,
    private singin: FormBuilder,
    private singup: FormBuilder,
    private fa: FormBuilder,
    private toastr: ToastrService
  ) {
    this.singinFrom = this.singin.group({
      email: new FormControl(),
      password: new FormControl(),
    });

    this.registrationForm = this.singup.group({
      newName: new FormControl('', [Validators.required]),
      newEmail: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl<string>('', {
        validators: [
          Validators.required,
          Validators.pattern(StrongPasswordRegx),
          Validators.minLength(8),
        ],
      }),
    });

    this.verification = this.fa.group({
      email: new FormControl(''),
      facode: new FormControl(),
    });
  }
  get f() {
    return this.registrationForm.controls;
  }

  get passwordFormField() {
    return this.registrationForm.get('newPassword');
  }
  signIn() {
    // const user = this.registrationForm.value;
    // this.loginRegistrationService.signIn(user.Email, user.password).subscribe(
    //   (response) => {
    //     console.log('Sign In successful:', response);
    //     // Handle success (e.g., navigate to a new page)
    //   },
    //   (error) => {
    //     console.error('Error in Sign In:', error);
    //     // Handle error (e.g., display an error message)
    //   }
    // );
    this.singindata = true;
  }

  register() {
    this.toastr.clear();
    if (this.registrationForm.valid) {
      this.toastr.success('gilocav!', 'shen ukve chveni ojaxis wevri xar!');
      // const newUser = this.registrationForm.value;
      // this.loginRegistrationService
      //   .signUp(newUser.newName, newUser.newEmail, newUser.newPassword)
      //   .subscribe(
      //     (response) => {
      //       console.log('Sign Up successful:', response);
      //       // Handle success (e.g., navigate to a new page)
      //     },
      //     (error) => {
      //       console.error('Error in Sign Up:', error);
      //       // Handle error (e.g., display an error message)
      //     }
      //   );
      delay(1000);
      this.isAContainerHidden = false;
      this.isBContainerHidden = true;
    } else {
      this.toastr.warning('monacmebi arasworia', 'gtxovt daicvat validaciebi');
    }

    this.singindata = false;
  }
  check2fa() {
    this.singindata = true;
    console.log(this.singindata);
  }

  isAContainerHidden = true;
  isBContainerHidden = false;

  changeClass1() {
    this.isAContainerHidden = true;
    this.isBContainerHidden = false;
  }

  changeClass2() {
    this.isAContainerHidden = false;
    this.isBContainerHidden = true;
  }



  isInputVisible: boolean = false;
  isInputVisible1: boolean = false;
  recoveryEmail: string = '';
  passwordCode: string = '';
  toggleVisibility() {
    this.isInputVisible = !this.isInputVisible;
  }
  passwordReset() {
    console.log('Submitted value:', this.recoveryEmail);
    this.isInputVisible = !this.isInputVisible;
    this.isInputVisible1 = !this.isInputVisible1;
   
  }

  checkcode(){
    // this.loginRegistrationService.passwordrestcheckcode(this.passwordCode).subscribe(
    //       (response) => {
    //         console.log('recovery code right:', response);
    //         this.isInputVisible = false;
    //         this.isInputVisible1 = false;
    //       },
    //       (error) => {
    //         console.error('Error in Sign Up:', error);
    //         // Handle error (e.g., display an error message)
    //       })
    this.isInputVisible1=false;
    this.isInputVisible=false;
  }
}
