import { Component, OnInit } from '@angular/core';

import { Quote } from "../../data/quote.interface";
import { QuotesPage } from "../quotes/quotes";
import {Vibration} from "@ionic-native/vibration";
import {AdMobFree, AdMobFreeBannerConfig} from "@ionic-native/admob-free";
@Component({
  selector: 'page-library',
  templateUrl: 'library.html'
})
export class LibraryPage implements OnInit {
  id=0;
  quotes = [
    {

      category: 'inspirational',
      quotes: [
        {
          id: '1',
          person: 'Theodore Roosevelt',
          text: 'Believe you can and you\'re halfway there'
        },
        {
          id: '2',
          person: 'Norman Vincent Peale',
          text: 'Change your thoughts and you change your world.'
        },
        {
          id: '3',
          person: 'Robert H. Schuller',
          text: 'What great thing would you attempt if you knew you could not fail?'
        },
        {
          id: '4',
          person: ' Maya Angelou',
          text: 'If you are always trying to be normal, you will never know how amazing you can be. '
        },
        {
          id: '5',
          person: 'Robert Downey Jr.',
          text: 'Everyday may not be a good day but there is good in every day.'
        },
        {
          id: '6',
          person: 'Francis Bacon',
          text: 'Money is like manure, of very little use except it be spread'
        },
        {
          id: '7',
          person: ' Dwight Eisenhower',
          text: 'Motivation is the art of getting people to do what you want them to do because they want to do it. '
        },
        {
          id: '8',
          person: 'Farima Joya',
          text: 'People share their wisdom in the hopes of making a difference in other people\'s lives.'
        },
        {
          id: '9',
          person: ' Og Mandino Wisdom ',
          text: 'If we have the attitude that it is going to be a great day it usually is.'
        },
        {
          id: '10',
          person: 'Yiddish Proverb ',
          text: 'The truly rich are those who enjoy what they have.'
        }
      ],
      icon: 'brush'
    },
    {
      category: 'ability',
      quotes: [
        {
          id: '11',
          person: 'Steve Wooden',
          text: 'Sometimes life knocks you on your ass... get up, get up, get up!!! Happiness is not the absence of problems, it\'s the ability to deal with them.'
        },
        {
          id: '12',
          person: 'Robert Frost',
          text: '“I am only one, but I am one. I cannot do everything, but I can do something. And because I cannot do everything, I will not refuse to do the something that I can do.” '
        },
        {
          id: '13',
          person: 'Mark Berg',
          text: 'It doesn’t matter how many times you get knocked down. All that matters is you get up one more time than you were knocked down.'
        },
        {
          id: '14',
          person: 'Robert Frost',
          text: 'Education is the ability to listen to almost anything without losing your temper.'
        },
        {
          id: '15',
          person: 'Robert Frost',
          text: 'Education is the ability to listen to almost anything without losing your temper.'
        },
        {
          id: '16',
          person: 'Robert Frost',
          text: 'Education is the ability to listen to almost anything without losing your temper.'
        }
      ],
      icon: 'bicycle'
    },
    {
      category: 'enthusiasm',
      quotes: [
        {
          id: '17',
          person: 'Benjamin Disraeli',
          text: 'Every product of genius must be the product of enthusiasm.'
        },
        {
          id: '18',
          person: 'Norman Vincent Peale',
          text: 'Enthusiasm releases the drive to carry you over obstacles and adds significance to all you do.'
        },
        {
          id: '19',
          person: 'Cajetan Rodrigues',
          text: 'If you don\'t feel enthusiasm for the work you are doing, then you probably should be doing something else as enthusiasm is a key to success'
        },
        {
          id: '20',
          person: 'Vincent Peale',
          text: 'If you have zest and enthusiasm you attract zest and enthusiasm. Life does give back in kind.'
        }
      ],
      icon: 'battery-charging'
    },
    {
      category: 'motivational',
      quotes: [
        {
          id: '21',
          person: 'Jim Rohn',
          text: 'Either you run the day or the day runs you.'
        },
        {
          id: '22',
          person: 'Donna Brazile',
          text: 'I was motivated to be different in part because I was different.'
        },
        {
          id: '23',
          person: 'Walt Disney',
          text: 'If you can dream it, you can do it.'
        },
        {
          id: '24',
          person: 'Thomas S. Monson',
          text: 'Press forward. Do not stop, do not linger in your journey, but strive for the mark set before you.'
        }
      ],
      icon: 'body'
    }
  ];
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage = QuotesPage;
  constructor(private vibration : Vibration,private admobFree: AdMobFree) {}


  ngOnInit() {
    this.quoteCollection = this.quotes; // my api call goes over here
  }
  onVibrate(){
    this.vibration.vibrate(50);
  }
  showAds(){
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      isTesting: true,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
  }

}
