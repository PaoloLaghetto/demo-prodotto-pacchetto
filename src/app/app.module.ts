import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import {InputNumberModule} from "primeng/inputnumber";
import { ProductService } from './productservice';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {CarouselModule} from "ngx-owl-carousel-o";
import { CompositionComponent } from './components/composition/composition.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CompositionComponent
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
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
