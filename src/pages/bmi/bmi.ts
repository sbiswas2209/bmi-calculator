import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BmiProvider } from '../../providers/bmi/bmi';
import { BMI } from '../../models/bmi.model';
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
  BMI:number;
  classification: string;
  constructor(public bmiProvider : BmiProvider) {}
  
  public calculate()
  {
    this.BMI = this.bmiProvider.calculateBMI(this.height, this.weight);
    this.classification = this.bmiProvider.classifyBMI(this.BMI);
  }

}
