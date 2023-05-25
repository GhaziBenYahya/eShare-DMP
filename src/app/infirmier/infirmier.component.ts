import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PatientForCreationDTO } from '../classe/patient-for-creation-dto';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-infirmier',
  templateUrl: './infirmier.component.html',
  styleUrls: ['./infirmier.component.css']
})
export class InfirmierComponent implements OnInit {
rech: PatientForCreationDTO = new PatientForCreationDTO()
PatientDTO
  constructor(private srv: ServiceService, private router: Router) { }
  profile = JSON.parse(localStorage.getItem('profile'))
  ngOnInit(): void {
  }
  rechercher() {
    console.log(this.rech)
    this.srv.rechercher(this.rech
      
      )
      .subscribe(
        (result:any) => { // success
          console.log(result)
          this.PatientDTO=result
          
          Swal.fire('Valider', '', 'success')
        },
        (err) => {
          // traitement du cas d'erreur
          console.log(err)
          Swal.fire('Invalid ', '', 'error')
        }
  
      )
  }
  logout(){
    localStorage.clear()
    sessionStorage.clear()
  this.router.navigate([''])
  }

}
