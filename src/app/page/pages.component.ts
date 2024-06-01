import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [ ],
  imports: [ RouterOutlet, HeaderComponent ]
})
export class PagesComponent {

  constructor() { }

  ngOnInit(): void {}

}
