// src/frontend/script.js
const tradeEnergyButton = document.getElementById("trade-energy-button");

tradeEnergyButton.addEventListener("click", async () => {
    try {
        const response = await fetch("/energy/trade", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                producer: "EnergyProducer1",
                consumer: "EnergyConsumer1",
                amount: 5
            })
        });

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
});
