import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-pharmacien',
  templateUrl: './pharmacien.component.html',
  styleUrls: ['./pharmacien.component.css']
})
export class PharmacienComponent implements OnInit {

  constructor(private router:Router , private srv : ServiceService) { }

  profile = JSON.parse(localStorage.getItem('profile'))

  ngOnInit(): void {
  }
  search(e){
    console.log(e)
    let idp = e.target.value
    this.router.navigate(['/pharmacien/profilpm',idp])
  }
  logout(){
    localStorage.clear()
    sessionStorage.clear()
  this.router.navigate([''])
  }

}
