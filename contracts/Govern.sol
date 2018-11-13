pragma solidity ^0.4.24;

import "./Entry.sol";

contract Govern {

    address public supervisor;
    address public executor;

    Entry entryCtr;
    event SupervisorUpdated(address indexed from, address indexed to);
    event ExecutorUpdated(address indexed from, address indexed to, address indexed supervisor);

    modifier onlySupervisor {
        require(msg.sender == supervisor, "Supervisor required");
        _;
    }

    modifier onlyExecutor {
        require(msg.sender == executor, "Executor required");
        _;
    }

    constructor(address _supervisor, address _executor, address entryAddr) public {
        supervisor = _supervisor;
        executor = _executor;
        entryCtr = Entry(entryAddr);
    }

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

    function execute(uint256 _id, bytes _args) external onlyExecutor {
        entryCtr.execute(_id, _args);
    }
}
