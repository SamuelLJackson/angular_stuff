import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  ngOnInit() {
    this.dropdownList = [
      { "id": "IN", "itemName": "India" },
      { "id": "SG", "itemName": "Singapore" },
      { "id": "AU", "itemName": "Australia" },
      {
        "id": "CA", "itemName": "Canada"
      },
      { "id": "KA", "itemName": "South Korea" },
      { "id": "DE", "itemName": "Germany" }

    ];
    this.selectedItems = [
      { "id": "IN", "itemName": "India" },
      { "id": "AU", "itemName": "Australia" }
    ];

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelctAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onItemDeselect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeselectAll(items: any) {
    console.log(items);
  }
  title = 'appledeapp';
}
