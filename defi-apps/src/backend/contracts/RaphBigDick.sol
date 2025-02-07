// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; //solidity version used, it must used pragma to reject compilations with unsupported versions.

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract RaphBigDick is ERC20, ERC20Burnable, ERC20Permit {
    constructor() ERC20("Raph Big Dick", "RAPH") ERC20Permit("Raph Big Dick") {
        _mint(msg.sender, 1e24);
    }
}
