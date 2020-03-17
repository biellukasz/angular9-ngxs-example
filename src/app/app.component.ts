import { Component } from '@angular/core';
import {InventoryService} from './inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public inventoryService: InventoryService) {}

  onSubmit({quantity}) {
    this.inventoryService.add(quantity);
  }
}
