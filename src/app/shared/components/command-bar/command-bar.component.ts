import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {
  @Output() deleteEmitter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }
  deleteAll() {
     this.deleteEmitter.emit();
  }
    
}