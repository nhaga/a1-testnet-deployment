from brownie import Storage, accounts, config
    
def main():
    signer = accounts.add(config["wallets"]["dummy"])
    Storage.deploy({"from": signer})