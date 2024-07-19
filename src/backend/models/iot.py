# src/backend/models/iot.py
import random
import time

class IoTDevice:
    def __init__(self, device_id, energy_producer):
        self.device_id = device_id
        self.energy_producer = energy_producer
        self.energy_production = 0

    def produce_energy(self):
        self.energy_production = random.randint(1, 10)
        return self.energy_production

class IoT:
    def __init__(self, blockchain):
        self.blockchain = blockchain
        self.iot_devices = []

    def add_iot_device(self, device):
        self.iot_devices.append(device)

    def simulate_iot_data(self):
        for device in self.iot_devices:
            energy_production = device.produce_energy()
            self.blockchain.add_transaction(device.energy_producer, "NexusGrid", energy_production)
            time.sleep(1)
