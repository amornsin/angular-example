import { Component, OnInit } from '@angular/core';

import { Page } from '../shared/page.model';
import { PagesService } from './pages.service'

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  pages: Page[];
  msg: string;
  fnSize: string;
  myMsg = '';

  constructor(private pagesService: PagesService) { }

  ngOnInit() {
    this.pages = this.pagesService.getPages();
    this.msg = 'test';
    this.fnSize = '30px';
  }

  onClickReset(){
    this.myMsg = '';
  }

}
