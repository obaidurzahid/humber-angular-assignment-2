import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() title = '';
  @Output() searchedText: EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onSearch(text:string){
    this.searchedText.emit(text);
    
  }
}
