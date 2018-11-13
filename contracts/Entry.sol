pragma solidity ^0.4.24;

import "./PermsMng.sol";

contract Entry {
    // admin of this entry contract
    address public admin;
    // perms and governs manager
    address public permsMng;

    event AdminUpdated(address indexed from, address indexed to);
    event GovernUpdated(uint indexed id, address indexed from, address indexed to);
    event PermsMngUpdated(address prevPerm, address newPerm);
    event PermCalled(uint indexed id);
    event Addr(address indexed ctrAddr);

    modifier onlyAdmin {
        require(msg.sender == admin, "Admin Required");
        _;
    }

    constructor(address _permsMng) public {
        admin = msg.sender;
        permsMng = _permsMng;
        // permsMng = new PermsMng();
    }

    function setPermsMng(address newPermsMng) external {
        address prev = permsMng;
        permsMng = newPermsMng;
        emit PermsMngUpdated(prev, newPermsMng);
    }

    function setAdmin(address newAdmin)
        external
        onlyAdmin
    {
        address prev = admin;
        admin = newAdmin;
        emit AdminUpdated(prev, newAdmin);
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

    function execute(uint256 id, bytes args) external {
        PermsMng p = PermsMng(permsMng);
        address ctrAddr = p.perms(id);
        address govern = p.governs(id);
        require(msg.sender == govern, "Specified Govern Required");
        assembly {
            let ptr := mload(40)
            // mstore(ptr, calldataload(0x64))
            calldatacopy(ptr, 0x64, sub(calldatasize, 0x64))
            switch call(gas, ctrAddr, 0, ptr, sub(calldatasize, 0x64), ptr, 0)
            case 0 { revert(0, 0) }
        }
        emit PermCalled(id);
    }
}
