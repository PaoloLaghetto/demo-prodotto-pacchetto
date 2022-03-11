import {Component, OnInit} from '@angular/core';
import * as mockData from 'src/assets/MOCK_DATA.json';

import { ProductService } from './productservice';
import { Product2 } from './product2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'demo-prodotto-pacchetto';
  public carouselData: any;

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

    this.productService.getCarouselData().then(mockData => {
      console.log('mockData', mockData);
        for(let i = 0; i < 52; i++) {
          this.carouselData.saleability.push({
            dateFrom: mockData.saleability.dateFrom,
            dateTo: mockData.saleability.dateTo,
            values: mockData.saleability.values,
            broadcastWeek: mockData.saleability.broadcastWeek,
            composition: mockData.saleability.composition
          });
        }
      }
    )

    console.log('this.carouselData',this.carouselData);
    }
}
