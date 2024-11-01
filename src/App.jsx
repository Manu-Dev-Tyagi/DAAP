import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';
import { RequestAirdrop } from './RequestAirdrop';
import { ShowSolBalance } from './ShowSolBalance';


import './App.css';

function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <div className="container">
                  <div className="wallet-buttons">
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                  </div>
                  <div className="section">
                    <RequestAirdrop />
                    <ShowSolBalance />
                  </div>
                  <SignMessage />
                  <SendTokens />
                </div>
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default App;
