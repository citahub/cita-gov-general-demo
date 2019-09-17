pragma solidity ^0.4.24;

contract PermsMng {
    // owner from entry contract
    address owner;
    // perm addresses
    address[] public perms;
    // perm owner addresses
    address[] public governs;

    event GovernUpdated(uint id, address prevGovern, address newGovern);

    event PermUpdated(uint id, address prevPerm, address newPerm);

    modifier onlyOwner {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() public {
        owner = msg.sender;
        // TODO you can split permsInline as storage of an independent file.
        address[33] memory permsInline = [
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
        ];
        for (uint i = 0; i < permsInline.length; i++) {
            governs.push(owner);
            perms.push(permsInline[i]);
        }
    }

    function setGovern(uint id, address newGovern)
        external
        onlyOwner
    {
        address prev = governs[id];
        governs[id] = newGovern;
        emit GovernUpdated(id, prev, newGovern);
    }

    function setPerm(uint id, address newPerm)
        external
        onlyOwner
    {
        address prev = perms[id];
        perms[id] = newPerm;
        emit PermUpdated(id, prev, newPerm);
    }
}
