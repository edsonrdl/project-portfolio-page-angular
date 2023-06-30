import { Injectable } from '@angular/core';
import { UseCase } from '../../utils/bases/use-case';
import { Observable } from 'rxjs';
import { PortfolioPageModel } from '../../models/portfolio-page.model';
import { PortfolioPageRepository } from '../../repositories/portfolio-page.repository';
import { SingleResultModel } from '../../utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class CalculatePortfolioPageUsecase implements UseCase<number, SingleResultModel<PortfolioPageModel>> {
  constructor(private portfolioPageRepository: PortfolioPageRepository) {}

  execute(value: number): Observable<SingleResultModel<PortfolioPageModel>> {
    return this.portfolioPageRepository.calculatePortfolioPageUsecase(value);
  }
}
