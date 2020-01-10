import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })
  constructor(
       private authService: AuthService,
       private toastr: ToastrService,
       private router: Router
    ) { }

  ngOnInit() {
  }

  signUp() {
     this.authService.register(this.registerForm.value)
         .then(() => {
          this.toastr.success('Created', 'Account created SuccessFully', {
            timeOut: 5000,
            positionClass: 'toast-bottom-left',
            tapToDismiss: true
          });
           this.router.navigateByUrl('/blog')
         })
         .catch((err) => {
          this.toastr.error('Error', err.message, {
            timeOut: 10000,
            positionClass: 'toast-bottom-left',
            tapToDismiss: true
          });
         })
  }

}
