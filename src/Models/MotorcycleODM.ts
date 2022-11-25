import { isValidObjectId, Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  public async getAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');
    return this.model.findOne({ _id: id });
  }
}

export default MotorcycleODM;