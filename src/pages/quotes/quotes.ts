import { Component, OnInit } from '@angular/core';

import {AlertController, reorderArray} from "ionic-angular";
import { NavParams } from "ionic-angular";

import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";
import {Clipboard} from "@ionic-native/clipboard";
import { ToastController } from 'ionic-angular';
import {Vibration} from "@ionic-native/vibration";
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService,
    private clipboard: Clipboard,
    public toastCtrl: ToastController,
    public  vibration : Vibration
    ) {

  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // Add elvis operator (?) in template to use this approach
  // }

  onAddToFavorites(selectedQuote: Quote) {
    this.quotesService.addQuoteToFavorites(selectedQuote);
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
  onCopy(quote : string){
    this.vibration.vibrate(50);
    this.clipboard.copy(quote);
    // console.log(quote);
    this.presentToast()
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Quote was copied successfully !',
      duration: 600
    });
    toast.present();
  }


}
