import ICar from '../Interfaces/ICar';

class Car {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected status: boolean;
  protected buyValue: number;
  protected color: string;
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    obj: ICar,
  ) {
    this.id = obj.id;
    this.model = obj.model;
    this.year = obj.year;
    this.status = obj.status ? obj.status : false;
    this.buyValue = obj.buyValue;
    this.color = obj.color;
    this.doorsQty = obj.doorsQty;
    this.seatsQty = obj.seatsQty;
  }

  public getid(): string | undefined {
    return this.id;
  }

  public setid(value: string | undefined) {
    this.id = value;
  }

  public getmodel(): string {
    return this.model;
  }

  public setmodel(value: string) {
    this.model = value;
  }

  public getyear(): number {
    return this.year;
  }

  public setyear(value: number) {
    this.year = value;
  }

  public getstatus(): boolean | undefined {
    return this.status;
  }

  public setstatus(value: boolean) {
    this.status = value;
  }

  public getbuyValue(): number {
    return this.buyValue;
  }

  public setbuyValue(value: number) {
    this.buyValue = value;
  }

  public getcolor(): string {
    return this.color;
  }

  public setcolor(value: string) {
    this.color = value;
  }

  public getdoorsQty(): number {
    return this.doorsQty;
  }

  public setdoorsQty(value: number) {
    this.doorsQty = value;
  }

  public getseatsQty(): number {
    return this.seatsQty;
  }

  public setseatsQty(value: number) {
    this.seatsQty = value;
  }
}

export default Car;