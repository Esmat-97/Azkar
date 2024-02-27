import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-about',
  imports:[IonicModule],
  standalone:true,
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})


export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
