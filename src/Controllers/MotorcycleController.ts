import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    try {
      const newMotorcycle = await this.service.create(this.req.body);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    const motorcycles = await this.service.getAll();
    return this.res.status(200).json(motorcycles);
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      const motorcycles = await this.service.getById(id);

      if (!motorcycles) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const motorcycles = await this.service.update(id, this.req.body);
      if (!motorcycles) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;