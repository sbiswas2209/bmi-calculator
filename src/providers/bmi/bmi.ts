
import { Injectable } from '@angular/core';

@Injectable()
export class BmiProvider {
 public num:number;
  public  calculateBMI(height: number , weight : number)
  {
    return  (weight/height)/height;
    

  }
  private classifyBMI(BMI: number)
  {
    if(BMI < 18.5)
    {
      return 'Underweight';
    }
    else if(BMI >= 18.5 && BMI < 24.9)
    {
      return 'Normal weight';
    }
    else if(BMI>=24.9 && BMI <29.9)
    {
      return 'Overweight';
    }
    else if(BMI>=29.9 && BMI<34.9)
    {
      return 'Class 1 obesity';
    }
    else if(BMI>=34.9 && BMI<39.9)
    {
      return 'Class 2 Obesity';
    }
  }

}
