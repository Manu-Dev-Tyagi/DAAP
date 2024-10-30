import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect } from 'react';

export function ShowSolBalance() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalance() { 
        if (wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
        }
    }

    useEffect(() => {
        getBalance();
    }, [wallet.publicKey]); // Fetch balance only when the wallet's public key changes

    return (
        <div>
            <p>SOL Balance:</p> <div id="balance"></div>
        </div>
    );
}
