import { providers } from 'ethers';
import { KEYS, _log } from '../configs/utils';

const network = {
  name: 'homestead',
  chainId: 1
};

const { INFURA_URL, ALCHEMY_URL, ETHERSCAN_KEY, MAIN_WS_URL } = KEYS;

const { WebSocketProvider, EtherscanProvider } = providers;

const MAIN_WS_URL_PROVIDER = new WebSocketProvider(MAIN_WS_URL);
const ETHERSCAN_PROVIDER = new EtherscanProvider(network, ETHERSCAN_KEY);

const INFURA_WS_PROVIDER = new WebSocketProvider(INFURA_URL, network);
const ALCHEMY_WS_PROVIDER = new WebSocketProvider(ALCHEMY_URL, network);

const mempoolProviders: Array<any> = [INFURA_WS_PROVIDER];
const confirmedProviders: Array<any> = [ALCHEMY_WS_PROVIDER];

export { mempoolProviders, confirmedProviders, ETHERSCAN_PROVIDER, MAIN_WS_URL_PROVIDER, INFURA_WS_PROVIDER };
