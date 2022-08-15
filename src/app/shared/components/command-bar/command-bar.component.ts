import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.scss']
})
export class CommandBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  commandBarButtons () {
    var Commandbuttons: string[] = this.router.url.split('/');
    return Commandbuttons[1];
  }

}