import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BmiProvider } from '../../providers/bmi/bmi';
/**
 * Generated class for the BmiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {
  height:number;
  weight:number;
  bmi:number;
  constructor(public bmiProvider : BmiProvider) {}
  
  calculate()
  {
    this.bmi = this.bmiProvider.calculateBMI(this.height, this.weight);
    console.log(this.bmi);
  }

}
