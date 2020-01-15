import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() { }

  getPages(){
    return [
      {
        id : 1,
        name: 'page1',
        roomNo : '104'
      },
      {
        id : 2,
        name: 'page2',
        roomNo : '105'
      },
      {
        id : 3,
        name: 'page3',
        roomNo : '106'
      }
    ];
  }

}
