pragma solidity ^0.4.24;

import "./AddrPublic.sol";

contract PermsMng is AddrPublic {
    // owner from entry contract
    address owner;
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
        for (uint i = 0; i < perms.length; i++) {
            governs.push(owner);
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
