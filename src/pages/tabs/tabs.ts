import { Component } from '@angular/core';

import { FavoritesPage } from "../favorites/favorites";
import { LibraryPage } from "../library/library";
import { CreateQuotePage} from "../createquote/createquote";
import {Vibration} from "@ionic-native/vibration";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs>
    <!--Thus both of the tabs maintain separate stacks-->
      <ion-tab (ionSelect)="selectLibrary()" [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
      <ion-tab (ionSelect)="selectCreate()" [root]="createQuotePage" tabTitle="Create" tabIcon="add-circle"></ion-tab>

    </ion-tabs>

  `
})
export class TabsPage {

  //favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
  createQuotePage = CreateQuotePage;
  constructor(private vibration: Vibration) { }
  selectLibrary(){
    this.vibration.vibrate(50);
  }
  selectCreate(){
    this.vibration.vibrate(50);
  }
}
