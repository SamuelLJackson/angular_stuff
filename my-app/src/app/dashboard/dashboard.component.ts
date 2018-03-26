import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  dropdownNumberList = [];
  dropdownStringsList = [];
  selectedNumberItems = [];
  selectedStringItems = [];
  dropdownSettings = {};
  hero = {id: "3",itemName: "Yolo Swaggins"
};

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    /* number ids */
    this.dropdownNumberList = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" },
      { "id": 6, "itemName": "Germany" },
      { "id": 7, "itemName": "France" },
      { "id": 8, "itemName": "Russia" },
      { "id": 9, "itemName": "Italy" },
      { "id": 10, "itemName": "Sweden" }
    ];
    this.dropdownStringsList = [
      { "id": { three: "four", five: "six" }, "itemName": "India" },
      { "id": "SG", "itemName": "Singapore" },
      { "id": "AU", "itemName": "Australia" },
      { "id": "CA", "itemName": "Canada" },
      { "id": "KR", "itemName": "South Korea" },
      { "id": "DE", "itemName": "Germany" },
      { "id": "FR", "itemName": "France" },
      { "id": "RU", "itemName": "Russia" },
      { "id": "IT", "itemName": "Italy" },
      { "id": "SE", "itemName": "Sweden" }
    ];
   
    
    this.selectedNumberItems = [
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" }
    ];
    this.selectedStringItems = [
      { "id": "two", "itemName": "Singapore" },
      { "id": "three", "itemName": "Australia" },
      { "id": "four", "itemName": "Canada" },
      { "id": "five", "itemName": "South Korea" }
    ]
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  onItemSelect(item: any) {
    this.hero = item;
    console.log(item);
    console.log(this.selectedStringItems);
  }
  onItemDeselect(item: any) {
    console.log(item);
    console.log(this.selectedStringItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
