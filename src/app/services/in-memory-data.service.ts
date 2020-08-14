import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb(){
    const bookItems=[{
      id:1,
      name:'Ubistvo u mesopotamiji',
      price:12,
      image:'/assets/images/ubistvo.jpg',
      description:'Dobra knjiga veoma bas',
      rate:4.5,
      genre:'Krimi',
      author:'Agata Kristi',
    },
    {
      id:2,
      name:'Jedan hitac',
      price:12,
      image:'/assets/images/jedan_hitac.jpg',
      description:'Roman po kojem je snimljen svetski filmski hit Džek Ričer.',
      rate:4.8,
      genre:'Akcija',
      author:'Li Cajld',
    },
    {
      id:3,
      name:'Divljaci',
      price:12,
      image:'/assets/images/divljaci.jpg',
      description:'Triler koji ruši sva dosadašnja pravila i postavlja standarde za dvadeset prvi vek.',
      rate:4.3,
      genre:'Akcija',
      author:'Don Vinslou',
    },
    {
      id:4,
      name:'Plamen na istoku',
      price:12,
      image:'/assets/images/plamen_na_istoku.jpg',
      description:'Istrajna priča o vojnom životu na raspadajućim granicama Rimskog Carstva',
      rate:4.3,
      genre:'Akcija',
      author:'Hari Sajdbotom',
    }
  ];
    return {bookItems};
  }
}
