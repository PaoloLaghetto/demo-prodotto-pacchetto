import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import * as mockData from 'src/assets/MOCK_DATA.json';

import {ProductService} from './productservice';
import {Product2} from './product2';
import {BEData, SellingPeriod} from "./BEData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//,
  //encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  title = 'demo-prodotto-pacchetto';
  products: Product2[] = [];
  responsiveOptions;

  public carouselBuffer: any = [];
  public showCarousel = false;
  public bufferPage: number = 0;
  public validityStartIndex = 0;
  public validityEndIndex: number = 0;
  public bufferBWLength: number = 0;

  private beData: SellingPeriod[] = [];
  private durataVendibilita = 2; // indica il numero di sottoperiodi per singola vendibilità

  constructor(private productService: ProductService, private ref: ChangeDetectorRef) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    // this.productService.getProductsSmall().then(products => {
    //   this.products = products;
    // });

    this.productService.getBEData().then(beData => {
      this.beData = beData.sellingPeriods;
      this.fillBufferNext();
      this.showCarousel = true;
      // this.bufferBWLength += this.durataVendibilita;
    });

    this.bufferBWLength = this.computeBufferBWNumber();

    // this.productService.getCarouselData().then(mockData => {
    //   // console.log('getCarouselData - mockData', mockData);
    //   this.carouselData.saleability = [];
    //   for (let i = 0; i < 52; i++) {
    //     this.carouselData.saleability.push({
    //       dateFrom: mockData.saleability.dateFrom,
    //       dateTo: mockData.saleability.dateTo,
    //       values: mockData.saleability.values,
    //       broadcastWeek: mockData.saleability.broadcastWeek,
    //       composition: mockData.saleability.composition
    //     });
    //   }
    //   this.carouselData.saleability.forEach(
    //     (item: any, index: number) => item.index = index + 1
    //   )
      // console.log('getCarouselData - this.carouselData', this.carouselData);
    // })

    this.productService.bufferPage$.subscribe((page: number) => {
      this.bufferPage = page;
    });
  }

  private computeBufferBWNumber(){
    const maxBW = 5;
    const sellingPeriodToShow = Math.round(maxBW / this.durataVendibilita);
    const bufferBwNumber = sellingPeriodToShow * this.durataVendibilita;
    const prevNextData = this.durataVendibilita * 2;
    return bufferBwNumber + prevNextData;
  }

  private fillBufferNext() {
    let isBufferNotFull = true;
    let beDataIndex = this.validityStartIndex; // index of the be data to insert in buffer
    let countSottoPeriodi = 0; // count the number of sotto periodi inserted in buffer
    this.carouselBuffer = [];
    do {
      this.carouselBuffer.push(this.beData[beDataIndex]);
      countSottoPeriodi += this.durataVendibilita;
      if (countSottoPeriodi >= this.bufferBWLength) {
        isBufferNotFull = false;
      } else {
        beDataIndex++;
        this.validityEndIndex = beDataIndex;
      }
    } while (isBufferNotFull);
    console.log('fillBufferNext - this.bufferCrousel', this.carouselBuffer);
  }

  private fillBufferPrev() {
    let isBufferNotFull = true;
    let beDataIndex = this.validityEndIndex; // index of the be data to insert in buffer
    let countSottoPeriodi = 0; // count the number of sotto periodi inserted in buffer
    this.carouselBuffer = [];
    do {
      this.carouselBuffer.push(this.beData[beDataIndex]);
      countSottoPeriodi += this.durataVendibilita;
      if (countSottoPeriodi >= this.bufferBWLength) {
        isBufferNotFull = false;
      } else {
        if(beDataIndex > 0){
          beDataIndex--;
          this.validityStartIndex = beDataIndex;
        } else {
          isBufferNotFull = false;
        }
      }
    } while (isBufferNotFull);
    this.carouselBuffer.reverse();
    console.log('fillBufferPrev - this.bufferCrousel', this.carouselBuffer);
  }

  private recreateCarousel(){
    setTimeout(() => {
      this.showCarousel = false;
    },100);
    setTimeout(() => {
      this.showCarousel = true;
    },101);
  }

  public onPage(event: any) {
    const newPage = event.page;
    if(newPage >= 0) {
        if(this.bufferPage <= newPage) {
          this.validityStartIndex++;
          this.fillBufferNext();
        } else {
          this.validityEndIndex--;
          this.fillBufferPrev();
        }
        this.recreateCarousel();
      this.productService.setBufferPage(1);

      // this.ref.detectChanges();
    }
  }
}
