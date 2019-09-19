module.exports = {
  contract: {
    permission: '0xffffffffffffffffffffffffffffffffff021010',
    authorization: '0xffffffffffffffffffffffffffffffffff020006',
    permissionManagement: '0xffffffffffffffffffffffffffffffffff020004',
    roleManagement: '0xffffffffffffffffffffffffffffffffff020007',
    groupManagement: '0xffffffffffffffffffffffffffffffffff02000a',
    group: '0xfFFfFFFFFffFFfffFFFFfffffFffffFFfF020009',
    quota: '0xffffffffffffffffffffffffffffffffff020003',
    nodeManager: '0xffffffffffffffffffffffffffffffffff020001',
    chainManager: '0xffffffffffffffffffffffffffffffffff020002',
    admin: '0xffffffffffffffffffffffffffffffffff02000c',
    roleAuth: '0xffffffffffffffffffffffffffffffffff02000d',
    autoExecAddr: '0xffffffffffffffffffffffffffffffffff020013',
    versionManager: '0xffffffffffffffffffffffffffffffffff020011',
  },
  permsInline: [
    '0xfFFFffFfFFffFFFffFFffFfffFFffffFFF020001', // 0 approve node
    '0xfFFFffFfFFffFFFffFFffFfffFFffffFFF020001', // 1 delete node
    '0xfFFFffFfFFffFFFffFFffFfffFFffffFFF020001', // 2 set stake
    '0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004', // 3 new permission
    '0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004', // 4 delete permission
    '0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004', // 5 update permission name
    '0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004', // 6 add resources
    '0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004', // 7 delete resources
    '0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004', // 8 set authorizations
    '0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004', // 9 set authorization
    '0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004', // 10 cancel authorizations
    '0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004', // 11 cancel authorization
    '0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004', // 12 clear authorization
    '0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007', // 13 new role
    '0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007', // 14 delete role
    '0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007', // 15 update role name
    '0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007', // 16 add permissions
    '0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007', // 17 delete permissions
    '0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007', // 18 set role
    '0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007', // 19 cancel role
    '0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007', // 20 clear role
    '0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a', // 21 new group
    '0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a', // 22 delete group
    '0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a', // 23 update group name
    '0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a', // 24 add accounts
    '0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a', // 25 delete accounts
    '0xffffffffFfFffffffffffffffFfFffFfff020003', // 26 set BQL
    '0xffffffffFfFffffffffffffffFfFffFfff020003', // 27 set default AQL
    '0xffffffffFfFffffffffffffffFfFffFfff020003', // 28 set AQL
    '0xfffFfFFfFFffFFFffFFFffFfFfffFfFfff020010', // 29 set quota price
    '0xFFfFffffffFFffffFfFFffFFfFFFfFffFf02000e', // 30 multi txs
    '0xFffffFffFFFFfFFFFfFffFFFFFfFfFFfFF02000f', // 31 set state
    '0xFffFFFfffffFFfFFFFFffffFFfFfFfffFf020011', // 32 set version
  ],
  localServer: 'http://127.0.0.1:1337',
  remoteServer: 'http://xx.xx.xx.xx:1337',
  testSender: {
    address: '0x9dcd6B234E2772C5451Fd4ccf7582f4283140697',
    privkey: '993ef0853d7bf1f4c2977457b50ea6b5f8bc2fd829e3ca3e19f6081ddabb07e9',
  },
  superAdmin: {
    address: '0x4b5Ae4567aD5D9FB92Bc9aFd6A657e6fA13a2523',
    privkey: '5f0258a4778057a8a7d97809bd209055b2fbafa654ce7d31ec7191066b9225e6',
  },
  permsMngBin: '60806040526104206040519081016040528073ffffffffffffffffffffffffffffffffff02000173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02001073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02000f73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200173ffffffffffffffffffffffffffffffffff02001173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152506000906021610925929190610a1f565b5034801561093257600080fd5b50600033602160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600090505b6021811015610a19576022602160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050808060010191505061097b565b50610adf565b8260218101928215610a8b579160200282015b82811115610a8a5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190610a32565b5b509050610a989190610a9c565b5090565b610adc91905b80821115610ad857600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600101610aa2565b5090565b90565b61066680610aee6000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eb191ea14610067578063149f607c146100d45780633db3cbe81461014157806345212d6d1461018e575b600080fd5b34801561007357600080fd5b50610092600480360381019080803590602001909291905050506101db565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100e057600080fd5b506100ff60048036038101908080359060200190929190505050610219565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014d57600080fd5b5061018c60048036038101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061024e565b005b34801561019a57600080fd5b506101d960048036038101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061044d565b005b6022818154811015156101ea57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008160218110151561022857fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000602160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610315576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4e6f7420746865206f776e65720000000000000000000000000000000000000081525060200191505060405180910390fd5b60228381548110151561032457fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160228481548110151561036157fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fe444fb41797c914c043482573bb752860239f86afbc9cea664ecdb03270c9797838284604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a1505050565b6000602160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610514576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f4e6f7420746865206f776e65720000000000000000000000000000000000000081525060200191505060405180910390fd5b60008360218110151561052357fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160008460218110151561055757fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f3b89cac47b77e8d8bde28526cced4e40b6bf92af779825883a7d88f083f85942838284604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15050505600a165627a7a7230582070361281ecf552cdd91d78c9483cfaaf056186ce926d238d8645fa101af950840029',
};
