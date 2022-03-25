import { Controller, Get, Headers, Param, Put, Patch } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Get()
  preparing(): string {
    return this.calculatorService.preparing();
  }

  @Put(':operands')
  async calculate(@Param() params): Promise<number> {
    return this.calculatorService.calculate(params.operands);
  }
}
