// const fs = require('fs');
const util = require('./util');
const config = require('../config');

const { genContract, genTxParams } = util;
const { superAdmin } = config;

// FIX: Error: ENOENT: no such file or directory, open './interaction/abi/PermsMng.abi'
// const abi = JSON.parse(fs.readFileSync('./interaction/abi/PermsMng.abi'));
const abi = [{
  constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'governs', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'perms', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
}, {
  constant: false, inputs: [{ name: 'id', type: 'uint256' }, { name: 'newGovern', type: 'address' }], name: 'setGovern', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  constant: false, inputs: [{ name: 'id', type: 'uint256' }, { name: 'newPerm', type: 'address' }], name: 'setPerm', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor',
}, {
  anonymous: false, inputs: [{ indexed: false, name: 'id', type: 'uint256' }, { indexed: false, name: 'prevGovern', type: 'address' }, { indexed: false, name: 'newGovern', type: 'address' }], name: 'GovernUpdated', type: 'event',
}, {
  anonymous: false, inputs: [{ indexed: false, name: 'id', type: 'uint256' }, { indexed: false, name: 'prevPerm', type: 'address' }, { indexed: false, name: 'newPerm', type: 'address' }], name: 'PermUpdated', type: 'event',
}];

// tmp
let param;
let contract;

// genCont
const genCont = (addr) => {
  contract = genContract(abi, addr);
};

// setGovern
const setGovern = async (id, address, _sender = superAdmin) => {
  param = await genTxParams(_sender);
  return contract.methods.setGovern(
    id,
    address,
  ).send(param);
};

// setPerm
const setPerm = async (id, address, _sender = superAdmin) => {
  param = await genTxParams(_sender);
  return contract.methods.setPerm(
    id,
    address,
  ).send(param);
};

// Get the permission addresses
const perms = id => contract.methods.perms(id).call('pending');

// Get the goven addresses
const governs = id => contract.methods.governs(id).call('pending');

module.exports = {
  genCont,
  setGovern,
  setPerm,
  perms,
  governs,
};
