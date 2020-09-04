import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quick-quote',
  templateUrl: './quick-quote.component.html',
  styleUrls: ['./quick-quote.component.css']
})
export class QuickQuoteComponent implements OnInit {
  commoName;
  commoAddress;
  commoPhone;
  commoType;
  commoPrice;
  desc;
  piecePrice;
  piece;
  moneyTotal;
  goldTotal;
  weight;
  purity;
  labour;
  wastage;
  making;
  wastePercentage;
  deductWeight;
  realWeight;
  piecetable: boolean = false;
  weighttable: boolean = false;
  displayResultWeight: boolean = true;
  displayResultPiece: boolean = true;
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
  displayResultW()
  {
    this.displayResultWeight = false;
  }
  displayResultP()
  {
    this.displayResultPiece = false;
  }

  pcalc(data)
  {
    this.commoName = data.commoName;
    this.commoAddress = data.commoAddress;
    this.commoPhone = data.commoPhone;
    this.commoType = data.commoType;
    this.desc = data.desc;
    this.commoPrice = data.commoPrice;
    this.piece = data.piece;
    this.piecePrice = data.piecePrice;
    this.moneyTotal = data.piece * data.piecePrice;
    this.goldTotal = this.moneyTotal/data.commoPrice;
  } 
  wcalc(data)
  {
    this.commoName = data.commoName;
    this.commoAddress = data.commoAddress;
    this.commoPhone = data.commoPhone;
    this.commoType = data.commoType;
    this.commoPrice = data.commoPrice;
    this.desc = data.desc;
    this.weight = data.weight;
    this.labour = data.labour;
    this.wastage = data.wastage;
    this.making = data.making;
    this.purity = data.purity;
    this.wastePercentage = (data.purity + data.labour + data.making + data.wastage);
    this.deductWeight = (this.wastePercentage)/100 * data.weight;
    this.realWeight = data.weight - this.deductWeight;
    this.total = data.commoPrice * this.deductWeight;
    this.goldTotal = this.total/data.commoPrice;
  }

  print(data)
  {
    let printContents = document.getElementById(data).innerHTML;
     let originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
  }

  constructor() {}

  ngOnInit(): void {
  }

}
