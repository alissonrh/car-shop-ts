import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';

describe('Deveria buscar um carro pelo Id', function () {
  it('Deveria buscar uma chave por valor com SUCESSO', async function () {
    const newCar: ICar = {
      id: '633ec9fa3df977e30e993492',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car(newCar);

    sinon.stub(Model, 'findOne').resolves(carOutput);

    const service = new CarService();
    const result = await service.getById('633ec9fa3df977e30e993492');

    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });
});