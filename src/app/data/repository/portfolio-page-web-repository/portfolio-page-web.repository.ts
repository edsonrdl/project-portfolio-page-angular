import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioPageWebRepositoryMapper as PortfolioPageWebRepositoryMapper } from './portfolio-page-web-repository-mapper';
import { PortfolioPageWebEntity } from './portfolio-page-web-entity';
import { map } from 'rxjs/operators';
import { BaseHttpService } from 'src/app/services/http/base-http.service';
import { environment } from 'src/environments/environment';
import { PortfolioPageRepository } from 'src/app/core/repositories/portfolio-page.repository';
import { PortfolioPageModel } from 'src/app/core/models/portfolio-page.model';
import { PageResultModel } from 'src/app/core/utils/responses/page-result.model';
import { PageFilterModel } from 'src/app/core/utils/filters/page-filter.model';
import { makeParamFilterGrid } from '../../helper.repository';
import { SingleResultModel } from '../../../core/utils/responses/single-result.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioPageWebRepository extends PortfolioPageRepository {
  mapper = new PortfolioPageWebRepositoryMapper();

  constructor(public http: BaseHttpService) {
    super();
  }

  calculatePortfolioPageUsecase(value: number): Observable<SingleResultModel<PortfolioPageModel>> {
    PageResultModel;
    return this.http
      .get<SingleResultModel<PortfolioPageWebEntity>>(`${environment.PORTFOLIOPAGE}portfolioPage`, value.toString())
      .pipe(map((x) => this.mapper.responseWebMapFrom(x.data)));
  }
}
