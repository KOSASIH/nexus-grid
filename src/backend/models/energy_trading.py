# src/backend/models/energy_trading.py
import random

class EnergyTrading:
    def __init__(self, blockchain):
        self.blockchain = blockchain
        self.energy_producers = []
        self.energy_consumers = []

    def add_energy_producer(self, producer):
        self.energy_producers.append(producer)

    def add_energy_consumer(self, consumer):
        self.energy_consumers.append(consumer)

    def trade_energy(self, producer, consumer, amount):
        if producer in self.energy_producers and consumer in self.energy_consumers:
            self.blockchain.add_transaction(producer, consumer, amount)
            return True
        return False

    def simulate_energy_trading(self):
        producer = random.choice(self.energy_producers)
        consumer = random.choice(self.energy_consumers)
        amount = random.randint(1, 10)
        self.trade_energy(producer, consumer, amount)
