import {Component, OnInit} from '@angular/core';
import * as mockData from 'src/assets/MOCK_DATA.json';

import { ProductService } from './productservice';
import { Product2 } from './product2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//,
  //encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {

  title = 'demo-prodotto-pacchetto';
  public carouselData: any = {};
  public beData: any;

  products: Product2[] = [];

	responsiveOptions;

	constructor(private productService: ProductService) {
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
		this.productService.getProductsSmall().then(products => {
			this.products = products;
		});

    this.productService.getBEData().then(beData => {
      this.beData = beData;
      console.log('beData', beData);
    });

    this.productService.getCarouselData().then(mockData => {
      console.log('getCarouselData - mockData', mockData);
      this.carouselData.saleability = [];
      for(let i = 0; i < 52; i++) {
        this.carouselData.saleability.push({
          dateFrom: mockData.saleability.dateFrom,
          dateTo: mockData.saleability.dateTo,
          values: mockData.saleability.values,
          broadcastWeek: mockData.saleability.broadcastWeek,
          composition: mockData.saleability.composition
        });
      }
      this.carouselData.saleability.forEach(
        (item: any, index: number) => item.index = index + 1
      )
      console.log('getCarouselData - this.carouselData',this.carouselData);
    })
  }

}
