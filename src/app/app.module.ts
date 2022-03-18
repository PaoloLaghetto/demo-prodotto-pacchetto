import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { CustomerService } from './components/table/customerservice';
import { TableLeftComponent } from './components/table/table-left.component';
import { TableRightComponent } from './components/table/table-right.component';
import {InputNumberModule} from "primeng/inputnumber";
import { ProductService } from './productservice';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {CarouselModule} from "ngx-owl-carousel-o";
import { PPCompositionTabelComponent } from './components/pp-composition-table/pp-composition-table.component';
import { PPSaleabilityFormComponent } from './components/pp-salebility-form/pp-salebility-form.component';
import { SellingPeriodComponent } from './components/selling-period/selling-period.component';
import { PPCarouselBoxComponent } from './components/pp-carousel-box/pp-carousel-box.component';
import { PPSubperiodSectionComponent } from './components/pp-subperiod-section/pp-subperiod-section.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PPCompositionTabelComponent,
    PPSaleabilityFormComponent,
    SellingPeriodComponent,
    PPCarouselBoxComponent,
    PPSubperiodSectionComponent,
    TableLeftComponent,
    TableRightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputNumberModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    AccordionModule,
    TableModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, CustomerService]
})
export class AppModule { }
