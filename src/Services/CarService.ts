import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        car,
      );
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    const carArray = cars.map((car: ICar) => this.createCarDomain(car));
    return carArray;
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    const carDomain = this.createCarDomain(car);
    return carDomain;
  }

  public async update(id: string, car: ICar) {
    const carODM = new CarODM();
    await carODM.update(id, car);
    return this.getById(id);
  }
}

export default CarService;