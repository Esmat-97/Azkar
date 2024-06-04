import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-morning',
  standalone:true,
  imports:[NgFor],
  templateUrl: './morning.page.html',
  styleUrls: ['./morning.page.scss'],
})
export class MorningPage implements OnInit {

httpclint=inject(HttpClient)

data:any=[];

  ngOnInit() {
    this.httpclint.get('http://localhost:2001/morning').subscribe((res:any)=>{
this.data=res
    })
  }

}
