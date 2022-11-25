import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testa o service de Motorcycle', function () {
  const inputArray = [
    {
      id: '634852326b35b59438fbea2f',
      model: 'Honda Cb Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    },
    {
      id: '634852326b35b59438fbea31',
      model: 'Honda Cbr 1000rr',
      year: 2011,
      color: 'Orange',
      status: true,
      buyValue: 59.900,
      category: 'Street',
      engineCapacity: 1000,
    },
  ];

  const newMotorcycle: IMotorcycle = {
    id: '633ec9fa3df977e30e993492',
    model: 'Honda Cb 600f Hornet',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    category: 'Street',
    engineCapacity: 500,
  };

  it('Cria uma moto com SUCESSO', async function name() {
    // Arrange
    const motorcycleInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      category: 'Street',
      engineCapacity: 500,
    };

    const motorcycleOutput: Motorcycle = new Motorcycle(newMotorcycle);

    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.create(motorcycleInput);
    // Assert

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deveria buscar todos os carros com SUCESSO', async function () {
    // Arrange
    const carOutput = inputArray.map((moto: any) => new Motorcycle(
      moto,
    ));

    sinon.stub(Model, 'find').resolves(carOutput);

    // Act
    const service = new MotorcycleService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });

  it('Deveria buscar uma chave por valor com SUCESSO', async function () {
    const carOutput: Motorcycle = new Motorcycle(newMotorcycle);

    sinon.stub(Model, 'findOne').resolves(carOutput);

    const service = new MotorcycleService();
    const result = await service.getById('633ec9fa3df977e30e993492');

    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });
});