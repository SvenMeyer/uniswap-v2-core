# Uniswap V2

[![Actions Status](https://github.com/Uniswap/uniswap-v2-core/workflows/CI/badge.svg)](https://github.com/Uniswap/uniswap-v2-core/actions)
[![Version](https://img.shields.io/npm/v/@uniswap/v2-core)](https://www.npmjs.com/package/@uniswap/v2-core)

In-depth documentation on Uniswap V2 is available at [uniswap.org](https://uniswap.org/docs).

The built contract artifacts can be browsed via [unpkg.com](https://unpkg.com/browse/@uniswap/v2-core@latest/).

# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`

## Deploy

moonbeam alpha (testnet) : get some funds here [https://docs.moonbeam.network/getting-started/testnet/faucet/](https://docs.moonbeam.network/getting-started/testnet/faucet/)

make sure to specify a private key (and the right one).
Check `truffle-config.js` for setup.

Do not put your private key (ever) into a file (which might end up on github). Define an environment variable. You may put this in your `.bashrc`

`export METAMASK_DEV_KEY_3="50c2d3e07adc3...........37f1d1426d1452ab7e0c5a3501"`

`truffle migrate --network mbtest --reset`
