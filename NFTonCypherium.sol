// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";

contract NFTonCypherium is ERC721Full, Ownable {
    uint256 public nextTokenId;

    constructor() public ERC721Full("NFTonCypherium.sol", "CPHNFT") {
        nextTokenId = 0;
    }

    function mintNFT(address to, string memory tokenURI) public payable {
        require(msg.value >= 0.1 ether, "Minting fee of 0.1 ETH is required");

        // ミント処理
        _mint(to, nextTokenId);
        _setTokenURI(nextTokenId, tokenURI);
        nextTokenId++;

        // コントラクトオーナーに手数料を転送
        address(uint160(owner())).transfer(msg.value);
    }
}
