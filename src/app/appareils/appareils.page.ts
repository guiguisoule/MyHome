import { AppareilsService } from './../services/appareils.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Appareil } from '../models/appareil.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {

  appareils: Appareil[];

  constructor(private navCtrl: NavController,
              private appareilService: AppareilsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.appareils = this.appareilService.getAllAppareils();
  }

  onSignOut(){
    this.navCtrl.navigateRoot('/home');
  }

  onDetailleAppareil(){
  }

}
