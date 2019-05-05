# Overview

This project consists of 3 contracts.

1. **PermsMng.sol**: it manages permissions, including permission address and corresponding govern contract address.

2. **Entry.sol**: the main contract which will be set as admin. Govern Contract send permission call to it, and the call will be proxied to specified system contract.

3. **Govern.sol**: the agent to call entry contract, it has two roles, **supervisor** and **executor**. Only **executor** can send call to entry contract and only **supervisor** can set these two roles.

# Workflow

1. Deploy entry contract

2. Deploy govern contract

3. Update permissions in entry contract

4. Set entry contract as admin

5. Call permission via govern contract

# Example

```javascript
// example
const fs = require('fs')
const AppChain = require('@appchain/base').default
const config = require('./config')

const appchain = AppChain(config.chain)
const account = appchain.base.accounts.privateKeyToAccount(config.privateKey)

appchain.base.accounts.wallet.add(account)

const entryAbi = JSON.parse(fs.readFileSync('./contracts/Entry_sol_Entry.abi').toString())
const entryBytecode = fs.readFileSync('./contracts/Entry_sol_Entry.bin').toString()

const permsMngAbi = JSON.parse(fs.readFileSync('./contracts/PermsMng_sol_PermsMng.abi').toString())
const permsMngBytecode = fs.readFileSync('./contracts/PermsMng_sol_PermsMng.bin').toString()

const entryContract = new appchain.base.Contract(entryAbi)
const permsMngContract = new appchain.base.Contract(permsMngAbi)

const deployPerms = async () => {
  console.log('deploy perms ==========================================')

  const current = await appchain.base.getBlockNumber()

  const txResult = await permsMngContract
    .deploy({
      data: permsMngBytecode,
      arguments: [],
    })
    .send({
      ...config.tx,
      validUntilBlock: +current + 88,
      from: account.address,
    })

  if (!txResult || !txResult.hash) {
    throw new Error('perms no tx result')
  }

  const txReceipt = await appchain.listeners.listenToTransactionReceipt(txResult.hash)

  console.log('perm receipt')
  console.log(txReceipt)

  if (!txReceipt.contractAddress) {
    throw new Error('perm no address')
  }
  console.log('perms address: ', txReceipt.contractAddress)

  await appchain.base.storeAbi(txReceipt.contractAddress, permsMngAbi, {
    ...config.tx,
    from: account.address,
    validUntilBlock: +current + 88,
  })

  return txReceipt.contractAddress
}

const deployEntry = async permAddr => {
  console.log('deploy entry ==========================================')
  if (!permAddr) {
    throw new Error('no perm addr')
  }

  const current = await appchain.base.getBlockNumber()

  const txResult = await entryContract
    .deploy({
      data: entryBytecode,
      arguments: [permAddr],
    })
    .send({
      ...config.tx,
      validUntilBlock: +current + 88,
      from: account.address,
    })

  const txReceipt = await appchain.listeners.listenToTransactionReceipt(txResult.hash)

  if (!txReceipt.contractAddress) {
    throw new Error('entry no addr')
  }

  console.log('Entry Address: ', txReceipt.contractAddress)

  await appchain.base.storeAbi(txReceipt.contractAddress, entryAbi, {
    ...config.tx,
    from: account.address,
    validUntilBlock: +current + 88,
  })

  return txReceipt.contractAddress
}

const executeEntry = async entryAddr => {
  console.log('execute entry ==========================================')
  await appchain.system.admin.methods
    .admin()
    .call()
    .then(addr => {
      console.log('Now entry contract addr is ', entryAddr)
      console.log('Now admin addr is ', addr)
    })

  const current = await appchain.base.getBlockNumber()

  if (!entryAddr) throw new Error('no entry addr')

  entryContract.options.address = entryAddr

  const calldata = appchain.system.priceManager.methods.setQuotaPrice(2).encodeABI()

  console.log('calldata')
  console.log(calldata)

  await entryContract.methods
    .permsMng()
    .call()
    .then(addr => console.log('perms mng in entry contract is ', addr))

  const txResult = await entryContract.methods.execute(29, calldata).send({
    ...config.tx,
    validUntilBlock: +current + 88,
    from: account.address,
  })

  const receipt = await appchain.listeners.listenToTransactionReceipt(txResult.hash)

  if (receipt.errorMessage) {
    console.log(receipt.errorMessage)
  }
}

const setSU = async entryAddr => {
  console.log('set su ==========================================')
  console.log('going to set admin to ', entryAddr)

  const current = await appchain.base.getBlockNumber()

  const txResult = await appchain.system.admin.methods.update(entryAddr).send({
    ...config.tx,
    validUntilBlock: +current + 88,
    from: account.address,
  })

  const txReceipt = await appchain.listeners.listenToTransactionReceipt(txResult.hash)
  if (txReceipt.errorMessage) {
    throw new Error(txReceipt.errorMessage)
  }
  const su = await appchain.system.admin.methods
    .admin()
    .call()
    .then(addr => console.log('admin has been set to ', addr))
}

;(async () => {
  const permAddr = await deployPerms()
  const entryAddr = await deployEntry(permAddr)

  await setSU(entryAddr)
  await executeEntry(entryAddr)
  const price = await appchain.system.priceManager.methods.getQuotaPrice()
  console.log(price)
})()
```
