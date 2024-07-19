import { load } from '@tensorflow/tfjs';
import { energyConsumptionModel } from './energyConsumptionModel';

const energyForecasting = async (userEnergyData) => {
    const model = await load(energyConsumptionModel);
    const forecast = model.predict(userEnergyData);
    return forecast;
};

export default energyForecasting;
