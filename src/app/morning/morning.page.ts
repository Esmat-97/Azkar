import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-morning',
  standalone:true,
  imports:[NgFor , IonicModule],
  templateUrl: './morning.page.html',
  styleUrls: ['./morning.page.scss'],
})
export class MorningPage implements OnInit {

constructor(  private httpclient:HttpClient){}

rot=inject(Router)

data:any=[];

  ngOnInit() {
    this.httpclient.get('http://localhost:2001/morning').subscribe((res:any)=>{
this.data=res
    })
  }


  goBack() {
    this.rot.navigate(['/home']);
  }


}