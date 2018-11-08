pragma solidity ^0.4.24;

contract Entry {
    address public admin;

    struct Perm {
        address ctrAddr;
        bytes4 fnName;
        address executor;
    }

    event GovernUpdated(uint indexed id, address indexed from, address indexed to);
    event AdminUpdated(address indexed from, address indexed to);
    event PermCalled(uint indexed id);

    mapping(uint => Perm) public perms;

    modifier onlyAdmin {
        require(msg.sender == admin, "Admin Required");
        _;
    }

    constructor() public { 
        admin = msg.sender;
        // init perms
        // node manager
        perms[1] = Perm(
            0xfFFFffFfFFffFFFffFFffFfffFFffffFFF020001,
            0xdd4c97a0, // approve node
            admin
        );
        perms[2] = Perm(
            0xfFFFffFfFFffFFFffFFffFfffFFffffFFF020001,
            0x2d4ede93, // delete node
            admin
        );
        perms[3] = Perm(
            0xfFFFffFfFFffFFFffFFffFfffFFffffFFF020001,
            0x51222d50, // set stake
            admin
        );

        // permission management
        perms[4] = Perm(
            0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004,
            0xfc4a089c, // new permission
            admin
        );
        perms[5] = Perm(
            0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004,
            0x98a05bb1, // delete permission
            admin
        );
        perms[6] = Perm(
            0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004,
            0x537bf9a3, // update permission name
            admin
        );
        perms[7] = Perm(
            0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004,
            0xf036ed56, // add resources
            admin
        );
        perms[8] = Perm(
            0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004,
            0x6446ebd8, // delete resources
            admin
        );
        perms[9] = Perm(
            0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004,
            0x52c5b4cc, // set authorizations
            admin
        );
        perms[10] = Perm(
            0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004,
            0x0f5aa9f3, // set authorization
            admin
        );
        perms[11] = Perm(
            0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004,
            0xba00ab60, // cancel authorizations
            admin
        );
        perms[12] = Perm(
            0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004,
            0x3482e0c9, // cancel authorization
            admin
        );
        perms[13] = Perm(
            0xffFffFffFFffFFFFFfFfFFfFFFFfffFFff020004,
            0xa5925b5b, // clear authorization
            admin
        );

        // role management
        perms[14] = Perm(
            0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007,
            0x551ef860, // new role
            admin
        );
        perms[15] = Perm(
            0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007,
            0x54b025c5, // delete role
            admin
        );
        perms[16] = Perm(
            0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007,
            0xd9c090a0, // update role name
            admin
        );
        perms[17] = Perm(
            0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007,
            0x0773e6ba, // add permissions
            admin
        );
        perms[18] = Perm(
            0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007,
            0x17b2e350, // delete permissions
            admin
        );
        perms[19] = Perm(
            0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007,
            0xa32710eb, // set role
            admin
        );
        perms[20] = Perm(
            0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007,
            0xa8319481, // cancel role
            admin
        );
        perms[21] = Perm(
            0xFFFFfFfFFFFFFfFfffFfffffffFffFFffF020007,
            0xc631e758, // clear role
            admin
        );

        // group management
        perms[22] = Perm(
            0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a,
            0xd7cd7209, // new group
            admin
        );
        perms[23] = Perm(
            0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a,
            0xbaeb8cad, // delete group
            admin
        );
        perms[24] = Perm(
            0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a,
            0x7eafcdb1, // update group name
            admin
        );
        perms[25] = Perm(
            0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a,
            0x2c84e31f, // add accounts
            admin
        );
        perms[26] = Perm(
            0xFFFffFFfffffFFfffFFffffFFFffFfFffF02000a,
            0xd86df333, // delete accounts
            admin
        );
        
        // quota manager
        perms[27] = Perm(
            0xffffffffFfFffffffffffffffFfFffFfff020003,
            0x931cd0cc, // set BQL
            admin
        );
        perms[28] = Perm(
            0xffffffffFfFffffffffffffffFfFffFfff020003,
            0xb107ea12, // set default AQL
            admin
        );
        perms[29] = Perm(
            0xffffffffFfFffffffffffffffFfFffFfff020003,
            0x5da7b59f, // set AQL
            admin
        );
        
        // price manager
        perms[30] = Perm(
            0xfffFfFFfFFffFFFffFFFffFfFfffFfFfff020010,
            0x52da800a, // set quota price
            admin
        );

        // batch tx
        perms[31] = Perm(
            0xFFfFffffffFFffffFfFFffFFfFFFfFffFf02000e,
            0x82cc3327, // multi txs
            admin
        );

        // emergency brake
        perms[32] = Perm(
            0xFffffFffFFFFfFFFFfFffFFFFFfFfFFfFF02000f,
            0xac9f0222, // set state
            admin
        );

        // version manager
        perms[33] = Perm(
            0xFffFFFfffffFFfFFFFFffffFFfFfFfffFf020011,
            0x62ddb8e1, // set version
            admin
        );
        // quota manage get bql
        perms[34] = Perm(
            0xffffffffFfFffffffffffffffFfFffFfff020003,
            0x0bc8982f,
            admin
        );
    }

    function setAdmin(address _admin)
        external 
        onlyAdmin 
    {
        address _old = admin;
        admin = _admin;
        emit AdminUpdated(_old, _admin);
    }

    function setGovern (uint8 _id, address _govern)
        external
        onlyAdmin
    {
        address from = perms[_id].executor;
        perms[_id].executor = _govern;
        emit GovernUpdated(_id, from, _govern);
    }

    function execute(uint256 _id, bytes _args) external {
        Perm storage perm = perms[_id];
        require(msg.sender == perm.executor, "Sender is not valid executor");
        address ctrAddr = perm.ctrAddr;
        assembly {
            let ptr := mload(40)
            calldatacopy(ptr, 0x64, sub(calldatasize, 0x64))
            switch call(gas, ctrAddr, 0, ptr, 0x24, ptr, 0)
            case 0 { revert(0, 0) }
        }
        emit PermCalled(_id);
        
    }
}
