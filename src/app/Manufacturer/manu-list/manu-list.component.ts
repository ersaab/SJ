import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manu-list',
  templateUrl: './manu-list.component.html',
  styleUrls: ['./manu-list.component.css']
})
export class ManuListComponent implements OnInit {

  priceOfJeans = [2,3];
  priceOfShoes = [4];
  priceOfSkirt = [2,3];
  priceOfTop = [1,2];
  count: number = 0;

  budget: number;

  calculate(max)
  {
    var budget = max.budgetAmount;
    for(var index in this.priceOfJeans)
    {
      var Jean = this.priceOfJeans[index];
      console.log("Jean Price is " +Jean);

      for( var index in this.priceOfSkirt)
      {
        var Skirt = this.priceOfSkirt[index];
        console.log( "Skirt Price is " +Skirt);
        
        for( var index in this.priceOfTop)
        {
          var Top = this.priceOfTop[index];
          console.log("Top Price is " +Top);

          var total = Jean + Skirt + Top;
          console.log("Total Price is " +total);
                
          if( total <= budget)
          {
            this.count++;
            console.log("Count is: " +this.count)
            console.log("Jean are " +Jean + " Skirt are " +Skirt + "Top are " +Top)
          }
        }
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
