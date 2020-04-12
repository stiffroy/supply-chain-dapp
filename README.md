# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed Truffle and enabled MetaMask extension in your browser.

```
truffle version
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/stiffroy/supply-chain-dapp.git
```

Change directory to ```supply-chain-dapp``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd supply-chain-dapp
npm install
```

Launch Truffle:

```
truffle develop
```

Your terminal should look something like this:

![truffle test](images/truffle-cli.png)

Compile smart contracts in the cli mode:

```
compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, truffle:

```
migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Deployment details of Rinkeby
Main smart contract (SupplyChain):

Transaction ID: [0xed7eee77a62bdf758e3bcb2d1357f483cda2479bd17f8cfa1e13435daa00962d](https://rinkeby.etherscan.io/tx/0xed7eee77a62bdf758e3bcb2d1357f483cda2479bd17f8cfa1e13435daa00962d)

Contract address: [0x56c40A90F26e4611D903a54501Ea32e711731e34](https://rinkeby.etherscan.io/address/0x56c40a90f26e4611d903a54501ea32e711731e34)
```
    Deploying 'SupplyChain'
    -----------------------
    > transaction hash:    0xed7eee77a62bdf758e3bcb2d1357f483cda2479bd17f8cfa1e13435daa00962d
    > Blocks: 0            Seconds: 8
    > contract address:    0x56c40A90F26e4611D903a54501Ea32e711731e34
    > block number:        6303451
    > block timestamp:     1586707019
    > account:             0x327Cf41edC0eb2c516793F1901E2F46AF824C795
    > balance:             21.662110058
    > gas used:            2403235
    > gas price:           10 gwei
    > value sent:          0 ETH
    > total cost:          0.02403235 ETH
```

Supporting contracts:

FarmerRole:
```
    Deploying 'FarmerRole'
    ----------------------
    > transaction hash:    0x93802e478d8e035d4148fffaa712428c642f8d369d28914118af1ce9326744c5
    > Blocks: 0            Seconds: 12
    > contract address:    0x40D78138b83D7599bb0c3225ADB871E5B795EDf5
    > block number:        6303447
    > block timestamp:     1586706959
    > account:             0x327Cf41edC0eb2c516793F1901E2F46AF824C795
    > balance:             21.695324688
    > gas used:            306084
    > gas price:           10 gwei
    > value sent:          0 ETH
    > total cost:          0.00306084 ETH
```

DistributorRole:
```
    Deploying 'DistributorRole'
    ---------------------------
    > transaction hash:    0x3c453e4b6915564bd2d97ebc03dadd258bb2ad27dab848aa112ce5ad6613581f
    > Blocks: 0            Seconds: 8
    > contract address:    0xe043a26847d79F2F6B954ba9ff33eAFFbf43026b
    > block number:        6303448
    > block timestamp:     1586706974
    > account:             0x327Cf41edC0eb2c516793F1901E2F46AF824C795
    > balance:             21.692263968
    > gas used:            306072
    > gas price:           10 gwei
    > value sent:          0 ETH
    > total cost:          0.00306072 ETH
```

RetailerRole:
```
    Deploying 'RetailerRole'
    ------------------------
    > transaction hash:    0xcc37d91b447f3834590fbff0d191909ed5de80355d099d34887aa754a7f7ff9e
    > Blocks: 0            Seconds: 8
    > contract address:    0xa9F77d63eE47710560F3114F242c192555155583
    > block number:        6303449
    > block timestamp:     1586706989
    > account:             0x327Cf41edC0eb2c516793F1901E2F46AF824C795
    > balance:             21.689203128
    > gas used:            306084
    > gas price:           10 gwei
    > value sent:          0 ETH
    > total cost:          0.00306084 ETH
```

ConsumerRole:
```
    Deploying 'ConsumerRole'
    ------------------------
    > transaction hash:    0xe65fb67011b1bf26ce680914fd8aa4113e18e64a4e6f99051c12d8daf7f801ad
    > Blocks: 0            Seconds: 8
    > contract address:    0x57598B7305ea1B2FF0613f86d302989C9ddA349E
    > block number:        6303450
    > block timestamp:     1586707004
    > account:             0x327Cf41edC0eb2c516793F1901E2F46AF824C795
    > balance:             21.686142408
    > gas used:            306072
    > gas price:           10 gwei
    > value sent:          0 ETH
    > total cost:          0.00306072 ETH
```

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
