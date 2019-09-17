const chai = require('chai');
const util = require('./helpers/util');
const admin = require('./helpers/perms_mng');
const config = require('./config');

const { expect } = chai;
const {
  logger, getTxReceipt, genTxParams, citaSDK,
} = util;
const {
  genCont, setGovern, setPerm, perms, governs,
} = admin;
const {
  superAdmin, permsMngBin, testSender, permsInline,
} = config;

// temp
let hash;
let addr;

describe('\n\nDeploy a contract\n\n', () => {
  it('should send a tx: deploy_contract', async () => {
    const param = await genTxParams(superAdmin);
    const res = await citaSDK.base.deploy(
      permsMngBin,
      param,
    );
    logger.debug('\nDeploy a contract:\n', res.contractAddress);
    addr = res.contractAddress;
    genCont(addr);
  });
});

describe('\n\n Test PermsMng contract \n\n', () => {
  it('should have built-in perms', async () => {
    const res = await perms(0);
    logger.debug('\nthe perms: 0 index:\n', res);
    expect(res).to.equal(permsInline[0]);
  });

  it('should have built-in governs', async () => {
    const res = await governs(0);
    logger.debug('\nthe governs: 0 index:\n', res);
    expect(res).to.equal(superAdmin.address);
  });

  it('should send a tx: setGovern', async () => {
    const res = await setGovern(0, testSender.address);
    logger.debug('\nSend tx ok:\n', JSON.stringify(res));
    expect(res.status).to.equal('OK');
    ({ hash } = res);
  });

  it('should get receipt: setGovern', async () => {
    const res = await getTxReceipt(hash);
    logger.debug('\nget receipt:\n', res);
    expect(res.errorMessage).to.be.null;
  });

  it('should send a tx: setPerm', async () => {
    const res = await setPerm(0, testSender.address);
    logger.debug('\nSend tx ok:\n', JSON.stringify(res));
    expect(res.status).to.equal('OK');
    ({ hash } = res);
  });

  it('should get receipt: setPerm', async () => {
    const res = await getTxReceipt(hash);
    logger.debug('\nget receipt:\n', res);
    expect(res.errorMessage).to.be.null;
  });

  // TODO Add query expect.
});
