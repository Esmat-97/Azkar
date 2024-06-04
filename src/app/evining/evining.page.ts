import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evining',
  standalone:true,
  imports:[NgFor , IonicModule],
  templateUrl: './evining.page.html',
  styleUrls: ['./evining.page.scss'],
})
export class EviningPage implements OnInit {


  httpclint=inject(HttpClient)
  rot=inject(Router)

  data:any=[];
  
    ngOnInit() {
      this.httpclint.get('http://localhost:2001/evining').subscribe((res:any)=>{
  this.data=res
      })
    }


    goBack() {
      this.rot.navigate(['/home']);
    }
  
}
