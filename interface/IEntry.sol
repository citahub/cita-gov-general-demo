pragma solidity 0.4.24;

interface IEntry {
    function setAdmin (address _admin) external;
    function setGovern (uint8 _id, address _govern) external;
}
