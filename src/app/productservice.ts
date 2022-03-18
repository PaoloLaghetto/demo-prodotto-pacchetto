import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product';
import {CarouselData} from "./CarouselData";
import {BEData} from "./BEData";
import {BehaviorSubject, Subject} from "rxjs";
import {Matriosca} from "./CompositionData";

@Injectable()
export class ProductService {

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    //
    private matrioscaBuffer: Matriosca[] = [];
    private initialMatriosca: Matriosca = {
        id: '',
        sellingPeriods: []
    };
    private matriosca = new BehaviorSubject<Matriosca>(this.initialMatriosca);
    public matriosca$ = this.matriosca.asObservable();
    //
    private initialBufferPage: number = 0;
    private bufferPage = new BehaviorSubject<number>(this.initialBufferPage);
    public bufferPage$ = this.bufferPage.asObservable();
    //

    productNames: string[] = [
        "Bamboo Watch",
        "Black Watch",
        "Blue Band",
        "Blue T-Shirt",
        "Bracelet",
        "Brown Purse",
        "Chakra Bracelet",
        "Galaxy Earrings",
        "Game Controller",
        "Gaming Set",
        "Gold Phone Case",
        "Green Earbuds",
        "Green T-Shirt",
        "Grey T-Shirt",
        "Headphones",
        "Light Green T-Shirt",
        "Lime Band",
        "Mini Speakers",
        "Painted Phone Case",
        "Pink Band",
        "Pink Purse",
        "Purple Band",
        "Purple Gemstone Necklace",
        "Purple T-Shirt",
        "Shoes",
        "Sneakers",
        "Teal T-Shirt",
        "Yellow Earbuds",
        "Yoga Mat",
        "Yoga Set",
    ];

    constructor(private http: HttpClient) { }

  getMatrioscaData() {
    return this.http.get<any>('assets/data-table-composition.json')
      .toPromise()
      .then(res => <Matriosca>res)
      .then(data => { this.matrioscaBuffer.push(data); return data; });
  }

  getMatrioscaDataObservable() {
    return this.http.get<any>('assets/data-table-composition.json')
      .toPromise()
      .then(res => <Matriosca>res)
      .then(data => { this.matriosca.next(data) });
  }

  setBufferPage(page: number){
      this.bufferPage.next(page);
  }

  getCarouselData() {
    return this.http.get<any>('assets/MOCK_DATA.json')
      .toPromise()
      .then(res => <CarouselData>res)
      .then(data => { return data; });
  }

  getBEData() {
    return this.http.get<any>('assets/MOCK_DATA_2.json')
      .toPromise()
      .then(res => <BEData>res)
      .then(data => { return data; });
  }

    getProductsSmall() {
        return this.http.get<any>('assets/products-small.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }

    getProducts() {
        return this.http.get<any>('assets/products.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }

    getProductsWithOrdersSmall() {
        return this.http.get<any>('assets/products-orders-small.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { return data; });
    }

    generatePrduct(): Product {
        const product: Product =  {
            id: this.generateId(),
            name: this.generateName(),
            description: "Product Description",
            price: this.generatePrice(),
            quantity: this.generateQuantity(),
            category: "Product Category",
            inventoryStatus: this.generateStatus(),
            rating: this.generateRating()
        };

        product.image = product.name?.toLocaleLowerCase().split(/[ ,]+/).join('-')+".jpg";;
        return product;
    }

    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generateName() {
        return this.productNames[Math.floor(Math.random() * Math.floor(30))];
    }

    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299)+1);
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75)+1);
    }

    generateStatus() {
        return this.status[Math.floor(Math.random() * Math.floor(3))];
    }

    generateRating() {
        return Math.floor(Math.random() * Math.floor(5)+1);
    }
}
