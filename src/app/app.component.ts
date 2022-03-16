import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {OwlOptions, SlidesOutputData} from 'ngx-owl-carousel-o';
import {ProductService} from './productservice';
import {Product2} from './product2';
import {SellingPeriod} from "./BEData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//,
})

export class AppComponent implements OnInit {

  @ViewChild('carousel') carousel: any;

  title = 'demo-prodotto-pacchetto';
  products: Product2[] = [];
  responsiveOptions;

  public carouselBuffer: any = [];
  public showCarousel = false;
  public bufferPage: number = 0;
  public validityStartIndex = 0;
  public validityEndIndex: number = 0;
  public bufferBWLength: number = 0;
  public customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    navText: ['&#8249', '&#8250;'],
    items: 2.5,
    nav: true,
    autoWidth: false,
    startPosition: this.validityStartIndex === 0 ? 0 : 1,
    // stagePadding: 200,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   400: {
    //     items: 2
    //   },
    //   760: {
    //     items: 3
    //   }
    // },
  };

  dynamicSlides = [
      {
        id: 1,
        src:'https://via.placeholder.com/600/92c952',
        alt:'Side 1',
        title:'Side 1'
      },
      {
        id: 2,
        src:'https://via.placeholder.com/600/771796',
        alt:'Side 2',
        title:'Side 2'
      },
      {
        id: 3,
        src:'https://via.placeholder.com/600/24f355',
        alt:'Side 3',
        title:'Side 3'
      },
      {
        id: 4,
        src:'https://via.placeholder.com/600/d32776',
        alt:'Side 4',
        title:'Side 4'
      },
      {
        id: 5,
        src:'https://via.placeholder.com/600/f66b97',
        alt:'Side 5',
        title:'Side 5'
      }
    ];

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

  // Custom Carousel - start

  useStyleInline: boolean = false;

  cCarouselCalculate() {  // Todo: da implementare
    let boxLength: number = 5;
    let subBoxLength: number = 2;
    let boxWidth = this.cCarouselGetWidth(null);
  }

  cCarouselGetElementByClass(className: string) {
    //const div = document.getElementById("ab");
    const divs = document.getElementsByClassName(className);
    let div;
    if (divs && divs.length) {
      div = divs[0] as HTMLDivElement;
    }
    return div;
  }

  cCarouselGetClassListByClass(className: string) {
    //const div = document.getElementById("ab");
    const div = this.cCarouselGetElementByClass(className);
    let classes;
    if (div) {
      classes = div.classList;
    }
    return classes;
  }

  cCarouselGetWidth($event: any) {
    const el = this.cCarouselGetElementByClass('p-carousel-items-container');
    let clientWidth;
    if (el) {
      clientWidth = el.clientWidth
    }
    return clientWidth;
  }

  cCarouselLeft($event: any) {
    //transform: translate3d(50%, 0px, 0px);
    const classes = this.cCarouselGetClassListByClass('transition-default');
    if (classes) {
      classes.remove("transition-none");
      if (!this.useStyleInline) {
        classes.remove("transition-right");
        classes.add("transition-left");
      } else {
        const el = this.cCarouselGetElementByClass('p-carousel-items-container');
        if (el) {
          el.style.transform = 'translate3d(50%, 0px, 0px)';
        }
      }
    }
  }
  cCarouselRight($event: any) {
    //transform: translate3d(-50%, 0px, 0px);
    const classes = this.cCarouselGetClassListByClass('transition-default');
    if (classes) {
      classes.remove("transition-none");
      if (!this.useStyleInline) {
        classes.remove("transition-left");
        classes.add("transition-right");
      } else {
        const el = this.cCarouselGetElementByClass('p-carousel-items-container');
        if (el) {
          el.style.transform = 'translate3d(-50%, 0px, 0px)';
        }
      }
    }
  }

  cCarouselNone($event: any) {
    const classes = this.cCarouselGetClassListByClass('transition-default');
    if (classes) {
      classes.add("transition-none");
      if (!this.useStyleInline) {
        classes.remove("transition-left");
        classes.remove("transition-right");
      } else {
        const el = this.cCarouselGetElementByClass('p-carousel-items-container');
        if (el) {
          el.style.transform = '';
        }
      }
    }
  }

  // Custom Carousel - end

  ngOnInit() {

    this.productService.getBEData().then(beData => {
      this.beData = beData.sellingPeriods;
      this.fillBufferNext();
      this.showCarousel = true;
      // this.bufferBWLength += this.durataVendibilita;
    });

    this.bufferBWLength = this.computeBufferBWNumber();

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
    // setTimeout(() => {
    //   this.showCarousel = false;
    // },80);
    // setTimeout(() => {
    //   this.showCarousel = true;
    // },81);
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
      this.ref.detectChanges();
    }
  }

  changeBufferPage() {
    this.productService.setBufferPage(1);
  }

  handleTranslated($event: SlidesOutputData) {
    // console.log('handleTranslated', $event);
    const startPosition = ($event.startPosition === 0 || $event.startPosition) ? $event.startPosition : -1 ;

    if(startPosition > 0) {
      if(this.bufferPage <= startPosition) {
        this.validityStartIndex++;
        this.fillBufferNext();
      } else {
        this.validityEndIndex--;
        this.fillBufferPrev();
      }
      this.productService.setBufferPage(startPosition);
    }
  }
}
