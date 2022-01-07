import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useFlutterwave, FlutterWaveButton  } from 'flutterwave-react-v3';

const TransferMoney = () => {
  const config = {
    public_key: 'FLWPUBK_TEST-5a44c1a788f292b78df4c5858a29cb70-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'munirudreamer@gmail.com',
      phonenumber: '0547963492',
      name: 'Muniru Dreamer',
      redirect_url: 'https://codetraingh.com',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
      console.log(response);
    },
    onClose: () => {},
  }
  return (
    <View>
      <Text>Transfer Money or pay bills here</Text>
      
    </View>
  )
}



export default TransferMoney
