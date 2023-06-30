import { Observable } from 'rxjs';
import { PortfolioPageModel } from '../models/portfolio-page.model';
import { SingleResultModel } from '../utils/responses/single-result.model';

export abstract class PortfolioPageRepository {
  abstract calculatePortfolioPageUsecase(value: number): Observable<SingleResultModel<PortfolioPageModel>>;
}
