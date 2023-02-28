
# Milkomeda A1 Testnet Deployment


## Foundry

```bash
source .env
forge build
forge create --legacy --rpc-url  https://rpc-devnet-algorand-rollup.a1.milkomeda.com --private-key $PRIVATE_KEY src/Storage.sol:Storage
```


## Hardhat

```bash
yarn
yarn add --dev hardhat
npx hardhat
npx hardhat compile
```

Deploy contract:
```bash
npx hardhat run scripts/deploy.js --network a1_testnet
```




## Brownie

Create a virtual environment and install brownie


```bash
python -m venv venv
source bin/activate/bin
pip install eth-brownie
```

OR

```
python -m venv venv
source bin/activate/bin
pip install -r requirements.txt
```

Add the required Milkomeda Networks

A1:
```bash
brownie networks add Milkomeda milkomeda-algorand chainid=2002 explorer=https://explorer-mainnet-algorand-rollup.a1.milkomeda.com host=https://rpc-mainnet-algorand-rollup.a1.milkomeda.com name="Milkomeda A1"
```


A1 Testnet:
```bash
brownie networks add Milkomeda milkomeda-algorand-testnet chainid=200202 explorer=https://testnet-algorand-rollup.a1.milkomeda.com host=https://rpc-devnet-algorand-rollup.a1.milkomeda.com name="Milkomeda A1 Testnet"
```


C1:
```bash
brownie networks add Milkomeda milkomeda-cardano chainid=2001 explorer=https://explorer-mainnet-cardano-evm.c1.milkomeda.com host=https://rpc-mainnet-cardano-evm.c1.milkomeda.com name="Milkomeda C1"
```

C1 Testnet:
```bash
brownie networks add Milkomeda milkomeda-algorand chainid=2002 explorer=https://explorer-devnet-cardano-evm.c1.milkomeda.com host=https://rpc-devnet-cardano-evm.c1.milkomeda.com name="Milkomeda C1 Testnet"
```


Deploy contract:

```bash
brownie run scripts/deploy.py --network milkomeda-algorand-testnet
```


## ApeworX

Import the test account:
```
ape accounts import test
```


Compile and deploy contract:
```
ape compile
ape run deploy --network milkomeda:a1-testnet
```