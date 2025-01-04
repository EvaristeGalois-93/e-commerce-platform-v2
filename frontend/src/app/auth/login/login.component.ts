import * as $ from 'jquery';
import 'bootstrap-datepicker'; 
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { LoginModel } from '../../models/login.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      birth_date: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone_number: ['', [Validators.required]],
      isVendor: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
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
      const credenziali = this.registerForm.value;

      console.log('credenziali', credenziali);

      this.loginService.register(credenziali).subscribe(
        (response) => {
          console.log('registrazione effettuata con successo');
          Swal.fire({
            title: 'Complimenti!',
            text: 'Registrazione avvenuta con successo!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
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

  get genderControl() {
    return this.registerForm.get('gender');
  }

  get countryControl() {
    return this.registerForm.get('country');
  }
}
