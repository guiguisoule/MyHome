import { AppareilsService } from './../services/appareils.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appareil } from '../models/appareil.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.page.html',
  styleUrls: ['./appareil.page.scss'],
})
export class AppareilPage implements OnInit {

  appareil: Appareil;
  constructor(private navCtrl: NavController,
              private appareilService: AppareilsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('id')){
          return;
        }
        const id = paramMap.get('id');
        this.appareil = this.appareilService.getAppareil(id);
      }
    );
  }

  onRetour(){
    this.navCtrl.navigateRoot('/appareils');
  }
}
