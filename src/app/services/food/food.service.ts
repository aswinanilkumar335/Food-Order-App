import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodBtTag(tag: string): Foods[] {
    if (tag == 'All') {
      return this.getAll()
    }
    else {
      return this.getAll().filter(food => food.tags?.includes(tag))
    }
  }

  getAllTag():Tag[]{
    return [
    { name: 'All',count:14},
    { name: 'FastFood',count:4},
    { name: 'Pizza',count:2},
    { name: 'Lunch',count:3},
    { name: 'BreakFast',count:2},
    { name: 'Burger',count:1},
    { name: 'Fry',count:1},
    { name: 'Soup',count:1},
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Beef Caldereta',
        cookTime: '10-15',
        price: 90,
        favorite: true,
        origins: ['Philippines'],
        review: 4.5,
        imageUrl: '/assets/food 1.jpg',
        tags: ['BreakFast'],
      },
      {
        id: 2,
        name: 'Fish Soup',
        cookTime: '5-10',
        price: 40,
        favorite: false,
        origins: ['Singapore'],
        review: 4.0,
        imageUrl: '/assets/food 2.jpg',
        tags: ['Soup'],
      },
      {
        id: 3,
        name: 'Burger',
        cookTime: '5-10',
        price: 60,
        favorite: false,
        origins: ['United States'],
        review: 4.8,
        imageUrl: '/assets/food 3.jpg',
        tags: ['Burger','FastFood','Lunch'],
      },
      {
        id: 4,
        name: 'Burrito',
        cookTime: '5-10',
        price: 20,
        favorite: true,
        origins: ['Mexico'],
        review: 4.3,
        imageUrl: '/assets/food 4.jpg',
        tags: ['FastFood','Lunch'],
      },
      {
        id: 5,
        name: 'Fried Chicken',
        cookTime: '10-15',
        price: 80,
        favorite: true,
        origins: ['United States,Scotland'],
        review: 4.6,
        imageUrl: '/assets/food 5.jpg',
        tags: ['Fry'],
      },
      {
        id: 6,
        name: 'Fish and chips',
        cookTime: '5-10',
        price: 50,
        favorite: false,
        origins: ['United Kingdom,England'],
        review: 3.8,
        imageUrl: '/assets/food 6.jpg',
        tags: ['Lunch'],
      },
      {
        id: 7,
        name: 'Dominos Pizza',
        cookTime: '5-10',
        price: 30,
        favorite: true,
        origins: ['United States'],
        review: 3.9,
        imageUrl: '/assets/food 7.jpg',
        tags: ['Pizza','FastFood'],
      },
      {
        id: 8,
        name: 'Mix Fride Rice',
        cookTime: '5-10',
        price: 40,
        favorite: false,
        origins: ['Chinese,Indian'],
        review: 4.2,
        imageUrl: '/assets/food 8.jpg',
        tags: ['Lunch'],
      },
      {
        id: 9,
        name: 'Masala Dosa',
        cookTime: '5-10',
        price: 10,
        favorite: true,
        origins: ['Indian'],
        review: 4.4,
        imageUrl: '/assets/food 9.jpg',
        tags: ['BreakFast'],
      }
    ];
  }
}
