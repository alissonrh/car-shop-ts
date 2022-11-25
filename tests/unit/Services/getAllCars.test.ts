import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

const inputArray = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

describe('Deveria buscar todos os carros', function () {
  it('Deveria buscar todos os carros com SUCESSO', async function () {
    // Arrange
    const carOutput = inputArray.map((car) => new Car(
      car,
    ));

    sinon.stub(Model, 'find').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });
});