import React, { useState, useEffect } from 'react';
import { useWeb3 } from '@nexus-grid/web3-react';
import EnergyTradingContract from '../contracts/EnergyTradingContract';

const EnergyTrading = () => {
    const { account, library } = useWeb3();
    const [energyBalance, setEnergyBalance] = useState(0);
    const [energyDemand, setEnergyDemand] = useState(0);

    useEffect(() => {
        const contract = new EnergyTradingContract(library);
        contract.getEnergyBalance(account).then((balance) => setEnergyBalance(balance));
    }, [account, library]);

    const handleTradeEnergy = (amount) => {
        const contract = new EnergyTradingContract(library);
        contract.tradeEnergy(account, amount).then(() => {
            // Update energy balance and demand
        });
    };

    return (
        <div>
            <h1>Energy Trading</h1>
            <p>Energy Balance: {energyBalance} kWh</p>
            <p>Energy Demand: {energyDemand} kWh</p>
            <button onClick={() => handleTradeEnergy(10)}>Trade 10 kWh</button>
        </div>
    );
};

export default EnergyTrading;
