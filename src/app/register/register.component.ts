import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Account } from '../classe/account';

import { Profile } from '../classe/profile';
import { ProfileForCreationDto } from '../classe/profile-for-creation-dto';


import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private srv: ServiceService, private router: Router) { }
  user: ProfileForCreationDto= new ProfileForCreationDto();
  
  ngOnInit(): void {
  }
  inscrir() {
    
 
   console.log(this.user)
    this.srv.inscrir(this.user)
      .subscribe(
        (result) => { // success
          console.log(result)
        },
        (err) => {
          // traitement du cas d'erreur
          console.log(err)
   
        }

      )
  }
}