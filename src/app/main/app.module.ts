import {
  PlatformLocation,
} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PortfolioPageRepository } from '../core/repositories/portfolio-page.repository';
import { PortfolioPageWebRepository } from '../data/repository/portfolio-page-web-repository/portfolio-page-web.repository';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';

export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatDialogModule,
    ],
  providers: [{ provide: PortfolioPageRepository, useClass: PortfolioPageWebRepository }],
  bootstrap: [AppComponent],
})
export class AppModule {}
