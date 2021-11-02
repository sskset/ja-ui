import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MegaMenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Candidates', icon: 'pi pi-fw pi-users',
        routerLink: '/candidates'
      },
      {
        label: 'Jobs', icon: 'pi pi-fw pi-file',
        routerLink: '/jobs'
      }];
  }
}
