import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    obj: ICar,
  ) {
    super(obj);
    this.doorsQty = obj.doorsQty;
    this.seatsQty = obj.seatsQty;
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