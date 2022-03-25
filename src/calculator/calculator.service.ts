import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  preparing(): string {
    return 'Calculating... just a minute!';
  }

  calculate(operands): number {
    return Number(operands) * 2;
  }
}
