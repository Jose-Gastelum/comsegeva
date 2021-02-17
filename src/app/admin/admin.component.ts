import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../app/peticiones.service';
import { AuthService } from '../../app/Services/auth.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(
    private _servicio: PeticionesService,
    private _auth: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }


  logout() {
    this._auth.logout();
  }

  extendermenu() {
    if (screen.width > 720) {
      $('#nav_left').removeClass("animate__animated animate__fadeInRight").addClass("animate__animated animate__fadeInLeft");
      document.getElementById("nav_left").style.display = "block";
      document.getElementById("nav_left").style.width = "15.5%";
    } else if (screen.width < 720) {
      $('#nav_left').removeClass("animate__animated animate__fadeInRight").addClass("animate__animated animate__fadeInLeft");
      document.getElementById("nav_left").style.display = "block";
      document.getElementById("nav_left").style.width = "80%";
    }

  }


  ocultar_menu() {
    // $('#nav_left').removeClass("animate__animated animate__fadeInLeft").addClass("animate__animated animate__fadeInRight");
    document.getElementById("nav_left").style.width = "0%";
    document.getElementById("nav_left").style.display = "none";
  }

  Datas = {
    inicio: "INICIO",
    nosotros: "ACERCA DE NOSOTROS",
    contacto: "CONTACTO",
  }


  Actualizar_idioma() {

    let btn_idioma = (<HTMLInputElement>document.getElementById('btn_idioma')).value;
    console.log("Idioma Change==>", btn_idioma);
    this._servicio.idioma(btn_idioma)



    if (btn_idioma === "ES") {
      this.Datas = {
        inicio: "INICIO",
        nosotros: "ACERCA DE NOSOTROS",
        contacto: "CONTACTO"
      }
    } else if (btn_idioma === "EN") {
      this.Datas = {
        inicio: "START",
        nosotros: "ABOUT US",
        contacto: "CONTACT US"
      }
    }


    

  }




}
