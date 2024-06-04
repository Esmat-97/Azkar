import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-evining',
  standalone:true,
  imports:[NgFor],
  templateUrl: './evining.page.html',
  styleUrls: ['./evining.page.scss'],
})
export class EviningPage implements OnInit {


  httpclint=inject(HttpClient)

  data:any=[];
  
    ngOnInit() {
      this.httpclint.get('http://localhost:2001/evining').subscribe((res:any)=>{
  this.data=res
      })
    }

}
