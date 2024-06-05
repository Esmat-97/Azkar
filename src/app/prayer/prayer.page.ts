import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prayer',
  standalone:true,
  imports:[NgFor , IonicModule],
  templateUrl: './prayer.page.html',
  styleUrls: ['./prayer.page.scss'],
})
export class PrayerPage implements OnInit {

  constructor( private rot:Router) { }

  httpclint=inject(HttpClient)
  data:any=[];

  ngOnInit() {
    this.httpclint.get('http://localhost:2001/adhkar_after_prayer').subscribe((res:any)=>{
      this.data=res
          })
  }


  
  goBack() {
    this.rot.navigate(['/home']);
  }

}
