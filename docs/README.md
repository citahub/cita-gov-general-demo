On-chain governance entry contract
========================
Overview
-------------
On-chain governance entry contract transfer the SuperAdmin account permissions to the on-chain governance entry contract to achieve decentralized governance.

![](https://raw.githubusercontent.com/cryptape/appchain-gov-general/develop/docs/contract.png)

PermsMng_Contract
-------------
We divide the permissions of SuperAdmin account into 33 specific permissions, and set system administrator for each permission [ID: 1, 2, 3...33]<br>
  
Through the PermsMng_Contract, the system administrator can replace the administrator of the system and authorize an address to change the specific permission. The PermsMng_Contract is mainly divided into two parts: ``setGovern``,``setPerm`` .
* ``setGovern`` can replace the administrator of the system，the ID of permissions are listed below.
```
function setGovern(uint id, address newGovern)
        external
        onlyOwner
    {
        address prev = governs[id];
        governs[id] = newGovern;
        emit GovernUpdated(id, prev, newGovern);
    }
```
* ``setPerm`` can change the specific permission.
```
 function setPerm(uint id, address newPerm)
        external
        onlyOwner
    {
        address prev = perms[id];
        perms[id] = newPerm;
        emit PermUpdated(id, prev, newPerm);
    }
```
Entry_Contract
-------------
The Entry_Contract is the main contract of the on-chain governance entry contract and includes the following features:
* ``setAdmin`` can replace the administrator of the Entry_Contract, the default admin is SuperAdmin.
```
    function setAdmin(address newAdmin)
        external
        onlyAdmin
    {
        address prev = admin;
        admin = newAdmin;
        emit AdminUpdated(prev, newAdmin);
    }
```
* ``setPermsMng/setGovern/setPerm`` can get the latest PermsMng_Contract and all the latest updates on system permissions.
```
function setPermsMng(address newPermsMng) external {
        address prev = permsMng;
        permsMng = newPermsMng;
        emit PermsMngUpdated(prev, newPermsMng);
    }
     function setGovern (uint id, address newGovern)
        external
        onlyAdmin
    {
        PermsMng p = PermsMng(permsMng);
        p.setGovern(id, newGovern);
    }

    function setPerm(uint id, address newPerm)
        external
        onlyAdmin
    {
        PermsMng p = PermsMng(permsMng);
        p.setPerm(id, newPerm);
    }
```
* ``execute`` summarizes all system permissions that need to be replaced and executes this aggregated information in the Goven_Contract.
```
    function execute(uint256 id, bytes args) external {
        PermsMng p = PermsMng(permsMng);
        address ctrAddr = p.perms(id);
        address govern = p.governs(id);
        require(msg.sender == govern, "Specified Govern Required");
        assembly {
            let ptr := mload(40)
            calldatacopy(ptr, 0x64, sub(calldatasize, 0x64))
            switch call(gas, ctrAddr, 0, ptr, sub(calldatasize, 0x64), ptr, 0)
            case 0 { revert(0, 0) }
        }
        emit PermCalled(id);
    }
```
Govern_Contract
-------------
The Govern_Contract stipulates that each specific SuperAdmin permissions has set a unique supervisor and executor.
* Supervisor and executor can be set to Contract Accounts or Externally Owned Accounts.
* Supervisor and executor can be set to NULL, that is, no one has permission to operate.
* Only the supervisor can assign a new supervisor and assign a specific executor.
* Only the executor can modify the specific system permission.
```
 function setSupervisor(address _supervisor) external onlySupervisor {
        address _old = supervisor;
        supervisor = _supervisor;
        emit SupervisorUpdated(_old, _supervisor);
    }
    function setExecutor(address _executor) external onlySupervisor {
        address _old = executor;
        executor = _executor;
        emit ExecutorUpdated(_old, _executor, supervisor);
    }
```
When a specific supervisor and executor are set, the Govern_Contract needs to execute ``execute`` to change system permissions.
```
  function execute(uint256 _id, bytes _args) external onlyExecutor {
        entryCtr.execute(_id, _args);
    }
```
Superadmin permission IDs
-------------
The following is a list of SuperAdmin permissions that can be replaced at present. More details in [CITA documentation](https://docs.citahub.com/zh-CN/cita/cita-intro)
```
0xfFFFffFfFFffFFFffFFffFfffFFffffFFF020001, //0 approve node
0xfFFFffFfFFffFFFffFFffFfffFFffffFFF020001, //1 delete node
0xfFFFffFfFFffFFFffFFffFfffFFffffFFF020001, //2 set stake
// permission management
0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004, //3 new permission
0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004, //4 delete permission
0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004, //5 update permission name
0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004, //6 add resources
0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004, //7 delete resources
0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004, //8 set authorizations
0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004, //9 set authorization
0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004, //10 cancel authorizations
0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004, //11 cancel authorization
0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004, //12 clear authorization
// role management
0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007, //13 new role
0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007, //14 delete role
0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007, //15 update role name
0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007, //16 add permissions
0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007, //17 delete permissions
0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007, //18 set role
0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007, //19 cancel role
0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007, //20 clear role
// group management
0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a, //21 new group
0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a, //22 delete group
0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a, //23 update group name
0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a, //24 add accounts
0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a, //25 delete accounts
// quota manager
0xffffffffFfFffffffffffffffFfFffFfff020003, //26 set BQL
0xffffffffFfFffffffffffffffFfFffFfff020003, //27 set default AQL
0xffffffffFfFffffffffffffffFfFffFfff020003, //28 set AQL
// price manager
0xfffFfFFfFFffFFFffFFFffFfFfffFfFfff020010, //29 set quota price
// batch tx
0xFFfFffffffFFffffFfFFffFFfFFFfFffFf02000e, //30 multi txs
// emergency brake
0xFffffFffFFFFfFFFFfFffFFFFFfFfFFfFF02000f, //31 set state
// version manager
0xFffFFFfffffFFfFFFFFffffFFfFfFfffFf020011 //32 set version
```



