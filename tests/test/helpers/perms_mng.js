const fs = require('fs');
const util = require('util');
const config = require('../config');

const { genContract, genTxParams } = util;
const { superAdmin } = config;

const abi = JSON.parse(fs.readFileSync('interaction/abi/PermsMng.abi'));

// tmp
let param;
let contract;

// genCont
const genCont = addr => genContract(abi, addr);

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
