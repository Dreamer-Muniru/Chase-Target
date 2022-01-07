import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import {
    WalletContainer,
    colors,
    Balance,
    AccountName,
    AccountInfo,
    DepositCol,
    TransferCol,
    DepositButton,
    TransferButton,
    BtnText,
    WalletRow,
    Transaction,
    TransactionText,
    
     } from '../styles/AppStyles'


class Wallet extends Component {
    render() {
        return (
            <WalletContainer>
                <Balance  style={{borderWidth: 2, borderColor: '#f5f5f5',}}>
                    <AccountName>Account Balance:</AccountName>
                    <AccountInfo>GHS 103.00</AccountInfo>
                </Balance>

                <WalletRow style={{flexDirection: "row"}}>
                    <DepositCol>
                        <DepositButton onPress={() => alert('Deposit Feature Coming Soon!')}>
                            <BtnText>Deposit</BtnText>
                        </DepositButton>
                    </DepositCol>
                        
                    <TransferCol>
                        <TransferButton onPress={() => alert('Transfer Feature Coming Soon!')}>
                            <BtnText>Transfer</BtnText>
                        </TransferButton>
                    </TransferCol>
                </WalletRow>
                

                <Transaction style={{borderWidth: 2, borderColor: '#f5f5f5',}}>
                    <TransactionText>
                        Recent Transactions
                    </TransactionText>
                    {/* <TransatDetails>

                    </TransatDetails> */}
                </Transaction>
            </WalletContainer>
        )
    }
}



export default Wallet;
