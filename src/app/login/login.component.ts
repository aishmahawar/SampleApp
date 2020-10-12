import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerationForm:FormGroup
  constructor(private router: Router) { 
    this.registerationForm=new FormGroup({
      emailR:new FormControl("",Validators.required),
      passwordR:new FormControl("",Validators.required)
    })
  }

  ngOnInit(): void {
  }
  newHomeComponent()
  {
     alert("Clicked")
    this.router.navigate(['/homeComponent']);
  }
}
