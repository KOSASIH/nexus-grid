# src/backend/models/blockchain_explorer.py
import json

class BlockchainExplorer:
    def __init__(self, blockchain):
        self.blockchain = blockchain

    def get_blockchain_info(self):
        return {
            "blockchain_size": len(self.blockchain.chain),
            "latest_block": self.blockchain.get_latest_block().__dict__
        }

    def get_transaction_history(self, address):
        transactions = []
        for block in self.blockchain.chain:
            for transaction in block.data:
                if transaction["sender"] == address or transaction["recipient"] == address:
                    transactions.append(transaction)
        return transactions

    def get_energy_trading_history(self):
        energy_trading_history = []
        for block in self.blockchain.chain:
            for transaction in block.data:
                if transaction["amount"] > 0:
                    energy_trading_history.append(transaction)
        return energy_trading_history
