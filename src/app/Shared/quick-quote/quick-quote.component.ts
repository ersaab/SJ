import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-quote',
  templateUrl: './quick-quote.component.html',
  styleUrls: ['./quick-quote.component.css']
})
export class QuickQuoteComponent implements OnInit {
  
  piecetable: boolean = false;
  weighttable: boolean = false;

  psel(){
    this.piecetable = true;
    this.weighttable = false;
  }
  wsel()
  {
    this.weighttable = true;
    this.piecetable = false;
  }
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
