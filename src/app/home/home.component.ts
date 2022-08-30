import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  foods:Foods[]=[]

  constructor(private foodService:FoodService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(params=>{
    if(params['searchItem']){
      this.foods=this.foodService.getAll().filter(food=>food.name.toLowerCase()
      .includes(params['searchItem'].toLowerCase()));
    }
    else if(params['tag']){
      this.foods=this.foodService.getAllFoodBtTag(params['tag'])
    }
    else{
      this.foods=this.foodService.getAll()
    }
  })

  }

}
