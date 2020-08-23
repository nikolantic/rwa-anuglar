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
    {
      id:8,
      name:'Covek po imenu Uve',
      price:15,
      image:'/assets/images/covek_po_imenu_uve_v.jpg',
      description:'„Izvanredno! Smejaćete se, plakati i otkriti saosećanje za džangrizala u svom životu. Takođe, poželećete da se odselite u Skandinaviju, gde je sve nekako simpatičnije.“ People',
      rate:4.4,
      genre:'Drama',
      author:'Fredrik Bakman',
    },
    {
      id:9,
      name:'Burna vremena',
      price:15,
      image:'/assets/images/burna_vremena-mario_vargas_ljosa_v.jpg',
      description:'Malo je reći da nas je Mario Vargas Ljosa svojim romanom Burna vremena iznenadio. Oslanjajući se tematski na Jarčevu feštu, u poznim stvaralačkim godinama napisao je zasigurno jedan od svojih najboljih romana.',
      rate:4.5,
      genre:'Drama',
      author:'Mario Vargas Ljosa',
    },
    {
      id:10,
      name:'Američki bogovi',
      price:13,
      image:'/assets/images/americki_bogovi-nil_gejmen_v.jpg',
      description:'Prvi put objavljen 2001, roman Američki bogovi istog časa je postao klasik – intelektualni i umetnički vrhunac višestrukonagrađivanog majstora inovativne fikcije, Nila Gejmena. Sada imate priliku da otkrijete misteriju i magiju nove verzije autorovog rukopisa.',
      rate:4.5,
      genre:'Fantastika',
      author:'Nil Gejmen',
    },
    {
      id:11,
      name:'Stakleni presto',
      price:19,
      image:'/assets/images/stakleni_presto-sara_dz_mas_v.jpg',
      description:'Prva knjiga najpopularnijeg tinejdž serijala po oceni Amazona. Nagrada YALSA za najbolju knjigu za tinejdžere. Najuži izbor za nagradu MTV Hollywood Crush.',
      rate:4.3,
      genre:'Fantastika',
      author:'Sara Dž. Mas',
    },
    {
      id:12,
      name:'Malavita',
      price:9,
      image:'/assets/images/malavita-tonino_benakvista_v.jpg',
      description:'Roman koji je inspirisao Martina Skorsezea, Lika Besona i Roberta de Nira da snime najzabavniji film o Mafiji do sada!',
      rate:4.3,
      genre:'Akcija',
      author:'Tonino Benakvista',
    },
  
    
   
    
    
    
 
   
  ];
    return {bookItems,bookGenre};
  }
}
