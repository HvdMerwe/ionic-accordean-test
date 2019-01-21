import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: any = [];
  itemExpandHeight: number = 500;

  constructor(public navCtrl: NavController) {

      this.items = [
          {expanded: false},
          {expanded: false},
          {expanded: false},
          {expanded: false},
          {expanded: false},
          {expanded: false},
          {expanded: false},
          {expanded: false},
          {expanded: false}
      ];

  }

  expandItem(item){
      console.log(item);
      this.items.map((listItem) => {

          if(item == listItem){
              listItem.expanded = !listItem.expanded;
          } else {
              listItem.expanded = false;
          }

          return listItem;

      });

  }
}
