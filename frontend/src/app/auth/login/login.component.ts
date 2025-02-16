import * as $ from 'jquery';
import 'bootstrap-datepicker'; 
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, } from '@angular/forms';
import Swal from 'sweetalert2';


export interface Country {
  name: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isRegister: boolean = false;

  confirmPassword: string = '';

  countries: Country[] = [
    { name: 'Italy' },
    { name: 'United Kingdom' },
    { name: 'United States' },
    { name: 'Spain' },
    { name: 'France' },
    { name: 'Germany' },
    { name: 'Switzerland' },
    { name: 'Netherlands' },
    { name: 'Austria' },
    { name: 'Belgium' },
    { name: 'Portugal' },
    { name: 'Czech Republic' },
    { name: 'Denmark' },
    { name: 'Finland' },
    { name: 'Greece' },
    { name: 'Hungary' },
    { name: 'Ireland' },
    { name: 'Luxembourg' },
    { name: 'Malta' },
    { name: 'Poland' },
    { name: 'Romania' },
    { name: 'Slovakia' },
    { name: 'Slovenia' },
    { name: 'Sweden' },
    { name: 'Norway' },
    { name: 'Croatia' },
    { name: 'Bosnia and Herzegovina' },
    { name: 'Serbia' },
    { name: 'Bulgaria' },
    { name: 'Albania' },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.registerForm = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      birth_date: ['', [Validators.required, this.ageValidator]],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone_number: ['', [Validators.required]],
      isVendor: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordFormatValidator]],
      confirmPassword: ['', Validators.required]
    },
    { validator: this.passwordsMatchValidator });
  }

  // validazione password
  passwordFormatValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pattern.test(password) ? null : { invalidFormat: true };
  }


  login() {
    if (this.loginForm.valid) {
      
      const credenziali = this.loginForm.value;
      this.loginService.login(credenziali).subscribe(
        (response) => {
          localStorage.removeItem('tentativi');

          const user = JSON.parse(sessionStorage.getItem('user') || '{}');
          console.log('user', user);
          Swal.fire({
            title: `Complimenti ${user.firstname}`,
            text: 'Accesso avvenuto con successo!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          // this.loginService.isAuthenticated();
          console.log('isAuth', this.loginService.isAuth$);
          this.router.navigate(['/homepage']);
        },
        (error) => {
          console.error('login non effettuato: email o password errati', error);

          // definisco i tentativi e li incremento
          let attempts = parseInt(localStorage.getItem('loginAttempts') || '0', 10);
          attempts++;
          // salvo i tentativi nel localstorage
          localStorage.setItem('loginAttempts', attempts.toString());

          if (error.status === 400 && error.error.message === 'Credenziali errate') {
            if (attempts >= 3) {
              const message = ' Hai dimenticato la password?';
              Swal.fire({
                title: 'Errore',
                text: message,
                icon: 'error',
                confirmButtonText: 'Esci',
                showCancelButton: attempts >= 3,
                cancelButtonText: 'Recupera password',
                customClass: {
                  cancelButton: '.cancel-button-btn'
                }
              }).then((result) => {
                if (result.isDismissed) {
                  this.router.navigate(['/recupera-password']);
                }
              });;
            } else
            Swal.fire({
              title: 'Errore',
              text: 'Email o password errati. Per favore riprova.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        }
      );
    }
  }

  showRegister() {
    this.isRegister = true;
  }

  showLogin() {
    this.isRegister = false;
  }

  register() {
    console.log('register', this.registerForm.value);
    
    if (this.registerForm.valid) {
      const credenziali = {...this.registerForm.value};
      delete credenziali.confirmPassword;

      // console.log('credenziali', credenziali);

      this.loginService.register(credenziali).subscribe(
        (response) => {
          console.log('registrazione effettuata con successo');
          Swal.fire({
            title: 'Complimenti!',
            text: 'Registrazione avvenuta con successo!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.registerForm.reset();
          this.router.navigate(['/login']);
          this.isRegister = false;
        },
        (error) => {
          console.error('registrazione non effettuata', error);
          
          if (error.status === 400 && error.error.message === 'The email has already been taken.') {
            Swal.fire({
              title: 'Errore',
              text: 'Credenziali errate. Per favore riprova.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          } else {
            Swal.fire({
              title: 'Errore',
              text: 'Registrazione non riuscita. Per favore riprova.',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        }
      );
    }
  }

  // verifico corrispondenza tra le password
  passwordsMatchValidator(formGroup: FormGroup): ValidationErrors | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
  
    if (confirmPassword && confirmPassword !== password) {
      formGroup.get('confirmPassword')?.setErrors({ notMatching: true });
      return { notMatching: true };
    }
  
    return null;
  }

  // validator età minima 18 anni
  ageValidator = (control: any): ValidationErrors | null => {
    const birthDate = control.value;
    
    if (!birthDate) {
      return null;
    }
  
    const parsedDate = new Date(birthDate);
    const age = this.calculateAge(parsedDate);
    
    return age < 18 ? { tooYoung: true } : null;
  }

  calculateAge(parsedDate: Date): number {
    console.log('calcolo eta', parsedDate);
    const today = new Date();
    const birthYear = parsedDate.getFullYear();
    const birthMonth = parsedDate.getMonth();
    const birthDay = parsedDate.getDate();
    const age = today.getFullYear() - birthYear;
    const monthDiff = today.getMonth() - birthMonth;
    const dayDiff = today.getDate() - birthDay;

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      return age - 1;
    }
    return age;
  }

  get genderControl() {
    return this.registerForm.get('gender');
  }

  get countryControl() {
    return this.registerForm.get('country');
  }
}
