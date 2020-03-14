import { BMI } from '../../models/bmi.model';
import { Injectable } from '@angular/core';

@Injectable()
export class BmiProvider {
 public num:number;
  public  calculateBMI(height: number , weight : number)
  {
    return (weight/height)/height;
  }
  public classifyBMI(BMI: number)
  {
    if(BMI < 18.5)
    {
      return 'Underweight. Maintain a proper diet and consult dietician.';
    }
    else if(BMI >= 18.5 && BMI < 24.9)
    {
      return 'Normal weight. Perfect. Keep it up and stay in shape.';
    }
    else if(BMI>=24.9 && BMI <29.9)
    {
      return 'Overweight. Exercise regularly and maintain proper diet. Consult a dietician.';
    }
    else if(BMI>=29.9 && BMI<34.9)
    {
      return 'Class 1 obesity. Consult dietician.';
    }
    else if(BMI>=34.9 && BMI<39.9)
    {
      return 'Class 2 Obesity. Take proffesional help';
    }
    else if(BMI>40.0){
      return 'Class 3 Obesity. Take proffesional help.';
    }
  }

}
