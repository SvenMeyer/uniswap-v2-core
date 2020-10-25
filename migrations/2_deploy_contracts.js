const Math      = artifacts.require("libraries/Math");
const SafeMath  = artifacts.require("libraries/SafeMath");
const UQ112x112 = artifacts.require("libraries/UQ112x112");

const UniswapV2ERC20 = artifacts.require("UniswapV2ERC20");
const UniswapV2Pair  = artifacts.require("UniswapV2Pair");
const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = function(deployer, network, accounts) {
	deployer.deploy(Math);
	deployer.deploy(SafeMath);
	deployer.deploy(UQ112x112);
	deployer.deploy(UniswapV2ERC20);
	deployer.deploy(UniswapV2Pair);
	deployer.deploy(UniswapV2Factory, accounts[0]);
};
