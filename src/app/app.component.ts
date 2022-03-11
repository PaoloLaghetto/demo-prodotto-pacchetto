import { Component } from '@angular/core';

import { ProductService } from './productservice';
import { Product2 } from './product2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-prodotto-pacchetto';


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
    }

}
