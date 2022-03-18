export interface Channel {
  id: string;
  code: string;
  description: string;
}

export interface LogicalEnvironment {
  id: string;
  code: string;
  description: string;
}

export interface StdProduct {
  id: string;
  code: string;
  description: string;
}

export interface PartitionType {
  id: string;
  code: string;
  description: string;
}

export interface PositionType {
  id: string;
  code: string;
  description: string;
}

export interface PPCompositionTabelComponent {
  sellingPeriosId: string;
  subPeriodId: string;
  id: string;
  channel: Channel;
  logicalEnvironment: LogicalEnvironment;
  stdProduct: StdProduct;
  partitionType: PartitionType;
  positionType: PositionType;
  length: number;
  noOfSpots: number;
  rateCard: number;
}

export interface SubPeriod {
  id: string;
  components: PPCompositionTabelComponent[];
}

export interface SellingPeriod {
  id: string;
  subPeriods: SubPeriod[];
}

export interface Matriosca {
  id: string;
  sellingPeriods: SellingPeriod[];
}

