import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-settings',
  standalone:true,
  imports:[IonicModule],
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})


export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
