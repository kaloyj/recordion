export interface Record {
  id: number;
  productName: string;
  productDate: Date;
  imageLink: string;
  productDescription: string;
}

export interface Records {
  [key: string]: Record;
}
