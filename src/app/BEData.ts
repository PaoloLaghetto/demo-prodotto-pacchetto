 export interface SubPeriod {
    id: number;
    value: number;
  }

  export interface SellingPeriod {
    id: number;
    subPeriods: SubPeriod[];
  }

  export interface BEData {
    id: number;
    sellingPeriods: SellingPeriod[];
  }


