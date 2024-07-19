# src/backend/models/blockchain.py
import hashlib
import time

class Block:
    def __init__(self, index, previous_hash, timestamp, data):
        self.index = index
        self.previous_hash = previous_hash
        self.timestamp = timestamp
        self.data = data
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        data_string = str(self.index) + self.previous_hash + str(self.timestamp) + str(self.data)
        return hashlib.sha256(data_string.encode()).hexdigest()

class Blockchain:
    def __init__(self):
        self.chain = [self.create_genesis_block()]
        self.pending_transactions = []
        self.mining_reward = 10

    def create_genesis_block(self):
        return Block(0, "0", int(time.time()), "Genesis Block")

    def get_latest_block(self):
        return self.chain[-1]

    def add_transaction(self, sender, recipient, amount):
        self.pending_transactions.append({
            "sender": sender,
            "recipient": recipient,
            "amount": amount
        })

    def mine_pending_transactions(self, miner):
        if len(self.pending_transactions) < 1:
            return False

        new_block = Block(len(self.chain), self.get_latest_block().hash, int(time.time()), self.pending_transactions)
        self.chain.append(new_block)

        self.pending_transactions = [{"sender": "NexusGrid", "recipient": miner, "amount": self.mining_reward}]
        return True
