import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb(){

    const bookGenre=[
      {id:1, name: 'Drama'},
      {id:2, name: 'Akcija'},
      {id:3, name: 'Fantastika'}
    ];

    const bookItems=[
     {

      id:1,
      name:'Ubistvo u mesopotamiji',
      price:12,
      image:'/assets/images/ubistvo.jpg',
      description:'Dobra knjiga veoma bas',
      rate:4.5,
      genre:'Drama',
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
    },
    
    
    {
      id:5,
      name:'Ledeni zmaj',
      price:5,
      image:'/assets/images/ledeni_zmaj.jpg',
      description:'Očaravajuća priča iz sveta koji je prethodio  Pesmi leda i vatre o prijateljstvu mlade devojke i njenog zmaja, o hrabrosti i o požrtvovanju.',
      rate:4.0,
      genre:'Fantastika',
      author:'Džordž R. R. Martin',
    },
    {
      id:6,
      name:'Problem tri tela',
      price:10,
      image:'/assets/images/problem_tri_tela.jpg',
      description:'Očaravajuća priča iz sveta koji je prethodio  Pesmi leda i vatre o prijateljstvu mlade devojke i njenog zmaja, o hrabrosti i o požrtvovanju.',
      rate:5.0,
      genre:'Fantastika',
      author:'Liju Cisin',
    },
      {
      id:7,
      name:'Uznemireni ljudi',
      price:15,
      image:'/assets/images/uznemireni_ljudi.jpg',
      description:'Očaravajuća priča iz sveta koji je prethodio  Pesmi leda i vatre o prijateljstvu mlade devojke i njenog zmaja, o hrabrosti i o požrtvovanju.',
      rate:5.0,
      genre:'Drama',
      author:'Fredrik Bakman',
    },
    
    
 
   
  ];
    return {bookItems,bookGenre};
  }
}
