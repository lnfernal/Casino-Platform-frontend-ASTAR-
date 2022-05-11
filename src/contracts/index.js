import { ethers } from "ethers";

import Contrats from "./contracts/26.json";

const supportChainId = 26;

const RPCS = {
    250: "https://rpc.ftm.tools/",
    4002: "https://rpc.testnet.fantom.network",
    26: "https://rpc.icicb.com",
    1337: "http://localhost:7545",
    31337: "http://localhost:8545/",
};

const providers = {
    // 1: new ethers.providers.JsonRpcProvider(RPCS[1]),
    26: new ethers.providers.JsonRpcProvider(RPCS[26]),
    // 250: new ethers.providers.JsonRpcProvider(RPCS[250]),
    // 4002: new ethers.providers.JsonRpcProvider(RPCS[4002]),
    // 1337: new ethers.providers.JsonRpcProvider(RPCS[1337]),
    // 31337: new ethers.providers.JsonRpcProvider(RPCS[31337])
};


const routerContract = new ethers.Contract(Contrats.router.address, Contrats.router.abi, providers[supportChainId]);
const ICICBContract = new ethers.Contract(
    Contrats.ICICB.address,
    Contrats.ICICB.abi,
    providers[supportChainId]
);

const treasuryContract = new ethers.Contract(
    Contrats.treasury.address,
    Contrats.treasury.abi,
    providers[supportChainId]
);

const stakingPoolAbi = Contrats.stakingPool.abi;

export {
    providers,
    routerContract,
    ICICBContract,
    treasuryContract,
    supportChainId,
    stakingPoolAbi,
};