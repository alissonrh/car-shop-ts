import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(
        motorcycle,
      );
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getAll();
    const motorcycleArray = motorcycles
      .map((motorcycle: IMotorcycle) => this.createMotorcycleDomain(motorcycle));
    return motorcycleArray;
  }

  public async getById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.getById(id);
    const motorcycleDomain = this.createMotorcycleDomain(motorcycle);
    return motorcycleDomain;
  }

  public async update(id: string, motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    await motorcycleODM.update(id, motorcycle);
    return this.getById(id);
  }
}

export default MotorcycleService;