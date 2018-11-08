pragma solidity 0.4.24;

interface IGovern {
    function setExecutor(address _executor) external;
    function setSupervisor(address _supervisor) external;
}
