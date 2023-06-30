import { Mapper } from '../../../core/utils/bases/mapper';
import { PortfolioPageWebEntity } from './portfolio-page-web-entity';
import { PortfolioPageModel } from 'src/app/core/models/portfolio-page.model';

export class PortfolioPageWebRepositoryMapper extends Mapper<PortfolioPageWebEntity, PortfolioPageModel> {
  mapFrom(param: PortfolioPageWebEntity): PortfolioPageModel {
    return {
      calculatedValue: param.calculatedValue,
    };
  }

  mapTo(param: PortfolioPageModel): PortfolioPageWebEntity {
    return {
      calculatedValue: param.calculatedValue,
    };
  }
}
