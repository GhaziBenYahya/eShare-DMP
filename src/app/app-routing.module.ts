import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiverCompteComponent } from './admin/activer-compte/activer-compte.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutdComponent } from './admin/ajoutd/ajoutd.component';
import { AjouteUtlisateurComponent } from './admin/ajoute-utlisateur/ajoute-utlisateur.component';
import { ListedComponent } from './admin/listed/listed.component';
import { ListedocteurComponent } from './admin/listedocteur/listedocteur.component';
import { ListeinfirmierComponent } from './admin/listeinfirmier/listeinfirmier.component';
import { ListepharmacienComponent } from './admin/listepharmacien/listepharmacien.component';
import { SalledattenteComponent } from './admin/salledattente/salledattente.component';
import { StatistiqueComponent } from './admin/statistique/statistique.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DocteurComponent } from './docteur/docteur.component';
import { ListepComponent } from './docteur/listep/listep.component';
import { AnalyseComponent } from './docteur/profilp/analyse/analyse.component';
import { DemandeComponent } from './docteur/profilp/demande/demande.component';
import { DossiermedicaleComponent } from './docteur/profilp/dossiermedicale/dossiermedicale.component';
import { FicheDeTriageComponent } from './docteur/profilp/fiche-de-triage/fiche-de-triage.component';
import { ProfilpComponent } from './docteur/profilp/profilp.component';
import { RapportComponent } from './docteur/profilp/rapport/rapport.component';
import { AncienpatientComponent } from './infirmier/ancienpatient/ancienpatient.component';
import { InfirmierComponent } from './infirmier/infirmier.component';
import { NouveaupatientComponent } from './infirmier/nouveaupatient/nouveaupatient.component';
import { LoginComponent } from './login/login.component';
import { PharmacienComponent } from './pharmacien/pharmacien.component';
import { ProfilpmComponent } from './pharmacien/profilpm/profilpm.component';
import { RegisterComponent } from './register/register.component';
import { ValidationComponent } from './register/validation/validation.component';
import { ProdilepaComponent } from './technicien/prodilepa/prodilepa.component';
import { TechnicienComponent } from './technicien/technicien.component';

const routes: Routes = [


  {
    path: 'confirm',
    component: ConfirmComponent
  },
  


  {
    path: 'rapport/:idp',
    component: RapportComponent
  },
  {
    path: 'fichet/:idp',
    component: FicheDeTriageComponent

  },
  {
    path: 'dossiermedicale/:idp',
    component: DossiermedicaleComponent

  },
 
  {
    path: 'analyse/:idp',
    component: AnalyseComponent

  },
  {
    path: 'docteur',
    component: DocteurComponent,

    children: [
      {
        path : '' , redirectTo:'/docteur/listep' , pathMatch : 'full'
      },{
      path: 'profilp/:idp',
      component: ProfilpComponent
    },
    {
      path: 'listep',
      component: ListepComponent
    },


    ]
  },




  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path : '' , redirectTo:'/admin/statistique' , pathMatch : 'full'
      },{
      path: 'listeU',
      component: ListedComponent
    },
    {
      path: 'listedocteur',
      component: ListedocteurComponent
    },
    {
      path: 'listeinfirmier',
      component: ListeinfirmierComponent
    },
    {
      path: 'listePH',
      component: ListepharmacienComponent
    },
    {
      path: 'Activer',
      component: ActiverCompteComponent
    },
  
    
    

    {
      path: 'listeP',
      component: AjoutdComponent
    },
    {
      path: 'AjouterUtilisateur',
      component: AjouteUtlisateurComponent
    },
    {
      path: 'salledattende',
      component: SalledattenteComponent
    },
    {
      path: 'statistique',
      component: StatistiqueComponent
    },]
  },


  {
    path: 'validation',
    component: ValidationComponent
  },
  {
    path: 'register',
    component: RegisterComponent

  },
  {
    path: 'technicien',
    component: TechnicienComponent,
    children:[
      {
        path: 'profilpa/:idp',
        component: ProdilepaComponent
    
      },
    ]

  },
  {
    path: 'pharmacien',
    component: PharmacienComponent,
    children:[
      {
        path: 'profilpm/:idp',
        component: ProfilpmComponent
    
      },
    ]

  },
  

  {
    path: 'infirmier',
    component: InfirmierComponent,
    children: [{
      path: 'nouveaupatient',
      component: NouveaupatientComponent

    },
    {
      path: 'ancienpatient',
      component: AncienpatientComponent

    },]

  },

  {
    path: '',
    component: LoginComponent,

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
