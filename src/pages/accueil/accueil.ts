import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Http, Headers, RequestOptions} from '@angular/http';
import { EnvoiPage } from '../envoi/envoi';

/**
 * Generated class for the AccueilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {
  data1:any = {};
  scannedCode: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  this.scannedCode = navParams.get('scannedCode ');
  this.data1.Mac_Address = '';
  this.data1.Sim_Card = '';
  this.data1.Num_user = '';
  this.http = http;
  
  }
  
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad AccueilPage');
  }

  nextPage(){
this.navCtrl.push(EnvoiPage);
}

}
