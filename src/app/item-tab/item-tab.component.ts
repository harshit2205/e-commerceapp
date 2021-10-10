import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-tab',
  templateUrl: './item-tab.component.html',
  styleUrls: ['./item-tab.component.css']
})
export class ItemTabComponent implements OnInit {

  @Input()
  itemId: number = 12345;
  
  ngOnInit(): void {
  }

}
