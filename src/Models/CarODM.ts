import { isValidObjectId, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    return this.model.findOne({ _id: id });
  }
}

export default CarODM;