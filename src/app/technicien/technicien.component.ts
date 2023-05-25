import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css']
})
export class TechnicienComponent implements OnInit {

  constructor(private router:Router , private srv : ServiceService) { }

  profile = JSON.parse(localStorage.getItem('profile'))
  ngOnInit(): void { 
  }
search(e){
  console.log(e)
  let idp = e.target.value
  this.router.navigate(['/technicien/profilpa',idp])
}
logout(){
  localStorage.clear()
  sessionStorage.clear()
this.router.navigate([''])
}
}
