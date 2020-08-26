import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quick-quote',
  templateUrl: './quick-quote.component.html',
  styleUrls: ['./quick-quote.component.css']
})
export class QuickQuoteComponent implements OnInit {
  commoName;
  commoType;
  commoPrice;
  weight;
  labour;
  wastage;
  making;
  wastePercentage;
  deductWeight;
  realWeight;
  piecetable: boolean = false;
  weighttable: boolean = false;
  total;

  psel(){
    this.piecetable = true;
    this.weighttable = false;
  }
  wsel()
  {
    this.weighttable = true;
    this.piecetable = false;
  }
  calc(data)
  {
    this.commoName = data.commoName;
    this.commoType = data.commoType;
    this.commoPrice = data.commoPrice;
    this.weight = data.weight;
    this.labour = data.labour;
    this.wastage = data.wastage;
    this.making = data.making;
    this.wastePercentage = (data.labour + data.making + data.wastage)/100;
    this.deductWeight = (this.wastePercentage * data.weight);
    this.realWeight = data.weight - this.deductWeight;
    this.total = data.commoPrice * this.realWeight;
    alert(
      " Name " +data.commoName + " \n " +
      " Type " +data.commoType + " \n " +
      " Gold Rate " +data.commoPrice + " \n " +
      " Weight of Metal " +data.weight + " \n " +
      " Labour % " +data.labour + " \n " +
      " Wastage % " +data.wastage + " \n " +
      " Making % " +data.making + " \n " +
      " Real Gold Weight " +this.realWeight + " \n " +
      " Total Waste Percentage " +this.wastePercentage + " \n " +
      " Total Cost " +this.total + " \n "
      )
  }
  constructor() {}

  ngOnInit(): void {
  }

}
