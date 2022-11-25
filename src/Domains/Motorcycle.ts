import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(
    obj: IMotorcycle,
  ) {
    super(obj);
    this.category = obj.category;
    this.engineCapacity = obj.engineCapacity;
  }

  public getcategory(): string {
    return this.category;
  }

  public setcategory(value: 'Street' | 'Custom' | 'Trail') {
    this.category = value;
  }

  public getengineCapacity(): number {
    return this.engineCapacity;
  }

  public setengineCapacity(value: number) {
    this.engineCapacity = value;
  }
}

export default Motorcycle;