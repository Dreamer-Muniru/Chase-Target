import styled from "styled-components";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
} from "react-native";
import Constants from "expo-constants";

// Colors
export const colors = {
  primary: "#d2691e",
  secondary: "#800000",
  tertiary: "#E6E6E6",
  alternative: "#999999",
  white: "#fff",
  black: "#000",
  mainColor: "#00bfff"
};

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
  background-color: ${colors.white};
  padding: 20px;
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

// Header
export const HeaderView = styled.View`
  padding-vertical: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #000
  letter-spacing: 1px;
  
  
`;
export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  color: ${colors.tertiary};
`;

// List
export const ListContainer = styled.View`
  margin-bottom: 30px;
  flex: 1;
  padding-bottom: 40px;
`;

export const ListView = styled.TouchableHighlight`
  background-color: #00bfff;
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const ListViewHidden = styled.View`
  background-color: #add8e6;
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-radius: 11px;
`;

export const HiddenButton = styled.TouchableOpacity`
  width: 55px;
  height: 80px;
  align-items: center;
`;

export const TodoText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: black;
  color: #fff;
  font-weight: bold;
`;

export const TodoDate = styled.Text`
  font-size: 10px;
  letter-spacing: 1px;
  color: #fff;
  text-align: right;
  text-transform: uppercase;
`;

// Text for swiped todo row
export const SwipedTodoText = styled(TodoText)`
  color: ${colors.alternative};
  font-style: italic;
  text-decoration: line-through;
`;

// Modal Buttom
export const ModalButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #00bfff;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 15px;
`;

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #f5fffa;
`;

export const ModalView = styled.View`
  background-color: #00bfff;
  border-radius: 20px;
  padding: 35px;
`;

export const StyledInput = styled.TextInput`
  width: 300px;
  margin-bottom: 20px;
  height: 50px;
  background-color: ${colors.tertiary};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  color: ${colors.secondary};
  letter-spacing: 1px;
`;

// export const NumberInput = styled.NumericInput`
//   width: 300px;
//   margin-bottom: 20px;
//   height: 50px;
//   background-color: ${colors.tertiary};
//   padding: 10px;
//   font-size: 16px;
//   border-radius: 10px;
//   color: ${colors.secondary};NumericInput
//   letter-spacing: 1px;
// `;


export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ModalIcon = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

// Wallet Styling

export const WalletContainer = styled.View`
  
`;
export const Balance = styled.View`
  background-color: #00bfff;
  width: 80%;
  height: 150px;
  left: 30px;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
  
`;

export const AccountName = styled.Text`
  font-size: 25px;
  font-weight: bold
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  
`;

export const AccountInfo = styled.Text`
  justify-content: center;
  text-align: center;
  font-size: 40px;
  font-weight: bold
  color: #fff;
`;

export const DepositCol =styled.View`
  
`;

export const TransferCol =styled.View`
  
`;

export const DepositButton =styled.TouchableOpacity`
  height: 50px;
  background-color: #00bfff;
  border-radius: 5px;
  margin-right: 20px;
`;

export const TransferButton =styled.TouchableOpacity`
  height: 50px;
  background-color: #00bfff;
  border-radius: 5px;
`;

export const BtnText =styled.Text`
  color: #fff;
  fontSize: 20px;
  padding: 10px;
  font-weight: bold;
`;

export const WalletRow =styled.View`
  margin: auto;
  margin-bottom: 100px;
`;


export const Transaction =styled.View`
  background-color: #fffafa;
  width: 90%;
  margin: auto;
  padding: 10px;
`;

export const TransactionText =styled.Text`
  font-weight: bold;
  text-align: center;
`;

// End of Wallet Styling