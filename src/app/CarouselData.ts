 export interface Value {
    input: number;
  }

  export interface BroadcastWeek {
    dateFrom: string;
    dateTo: string;
    values: Value[];
  }

  export interface Durata {
    input: number;
  }

  export interface Spot {
    input: number;
  }

  export interface Grp {
    input: number;
  }

  export interface Listino {
    input: number;
  }

  export interface Composition {
    durata: Durata;
    spot: Spot;
    grp: Grp;
    listino: Listino;
  }

  export interface Saleability {
    dateFrom: string;
    dateTo: string;
    values: Value[];
    broadcastWeek: BroadcastWeek[];
    composition: Composition[];
  }

  export interface CarouselData {
    saleability: Saleability;
  }

