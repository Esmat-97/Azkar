
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  imports:[CommonModule,IonicModule],
  standalone:true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private httpcliet:HttpClient) {}
  data:any=[];
  httpCliet=inject(HttpClient)

 

  fetchData1(){
    this.httpCliet.get('http://localhost:2001')
    .subscribe((data:any)=>{
      console.log(data.morningAzkar)
      this.data=data.morningAzkar;
    })
  }
  


  fetchData2(){
    this.httpCliet.get('http://localhost:2001')
    .subscribe((data:any)=>{
      console.log(data.adhkarAfterPrayer)
      this.data=data.adhkarAfterPrayer;
    })
  }

}
