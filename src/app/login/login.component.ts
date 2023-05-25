import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';


import { ServiceService } from '../service.service';
import { AuthenticateRequest } from '../classe/authenticate-request';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private srv: ServiceService, private router: Router) { }
  user: AuthenticateRequest = new AuthenticateRequest()
  movieForm: FormGroup = new FormGroup({
    
    'email': new FormControl([Validators.minLength(10),  Validators.required, Validators.email]),
    
    'Password': new FormControl(Validators.minLength(9))

  })
  ngOnInit() {

    

  }
  login() {
    this.srv.login(this.user)
      .subscribe((res: any) => {
        console.log(res)


        let user = JSON.parse(res)
        // localStorage.setItem('email' ,' result.email')
        localStorage.setItem('Role', user.role)
        localStorage.setItem('ID', user.id)

        this.srv.getprofile(user.id)
        .subscribe((profile: any) => {
          localStorage.setItem('profile',JSON.stringify(profile))
          if (user.role == 'Admin') {
            this.router.navigate(['/admin'])
          }
          else if(user.role == 'Infirmier') {
            this.router.navigate(['/infirmier'])
          }
          else if(user.role == 'Docteur') {
            this.router.navigate(['/docteur'])
          }
          else if(user.role == 'Technicien') {
            this.router.navigate(['/technicien'])
          }
          else if(user.role == 'Pharmacien') {
            this.router.navigate(['/pharmacien'])
          }
        })
      
      },
        // sessionStorage.setItem('role' , result.Role)

        err =>{  console.log(err) 
          Swal.fire(' Email ou Mot De Passe incorrect! ', '', 'error') } )
      

  }






}
