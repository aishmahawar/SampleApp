import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service'
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
data:any;
  constructor(private myservice:MyserviceService) { }

  callForService()
  {
    this.myservice.showProducts().subscribe(
      (res) => {
        console.log("response",res);
        this.data=res;
      },
      (err) =>{
        console.log("unable to fetch",err.status);
      }
    )
  }
  ngOnInit(): void {
    this.callForService()
  }

}
