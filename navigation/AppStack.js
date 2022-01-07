import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity, Text, View } from 'react-native';
import {logout} from '../redux/actions/authActions'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddTarget from '../screens/AddTarget';
import Wallet from '../screens/Wallet'
// styled components
import {
  colors,
} from '../styles/AppStyles'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


// const FeedStack = ({navigation}) => (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Chase Tag"
//         component={HomeScreen}
//         options={{
//           headerTitleAlign: 'center',
//           headerTitleStyle: {
//             color: '#d2691e',
//             fontSize: 30,
//           },
//           headerStyle: {
//             shadowColor: '#fff',
//             elevation: 0,
//           },
          
//         }}
//       />
      
 
//     </Stack.Navigator>
//   );
  
  
  const AppStack = ({logout, navigation}) => {
    
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({route}) => ({
            tabBarLabel: 'Home',
            // tabBarVisible: route.state && route.state.index === 0,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="home-outline" size={27} color={colors.mainColor} 
              />
            ),
            headerRight:()=>(
              <TouchableOpacity
                style={{marginRight: 30}} 
             >
              <Ionicons name="notifications-outline" size={30} color={colors.mainColor} />
              </TouchableOpacity>
            )
          })}
        />
         <Tab.Screen
          name="Set Target"
          component={AddTarget}
          options={({route}) => ({
            // Or Hide tabbar when push!
            // https://github.com/react-navigation/react-navigation/issues/7677
            // tabBarVisible: route.state && route.state.index === 0,
            // tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Ionicons name="ios-add-circle-outline" size={30} color={colors.mainColor} />
            ),
          })}
        />

        <Tab.Screen
          name="Wallet"
          component={Wallet}
          options={({route}) => ({
            // Or Hide tabbar when push!
            // https://github.com/react-navigation/react-navigation/issues/7677
            // tabBarVisible: route.state && route.state.index === 0,
            // tabBarLabel: 'Home',
            tabBarIcon: () => (
              <SimpleLineIcons name="wallet" size={20} color={colors.mainColor} />
            ),
          })}
        />
      
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          
          options={{

            tabBarIcon: () => (
              <Ionicons name="person-outline" size={25} color={colors.mainColor}/>
            ),
            headerRight:()=>(
                <TouchableOpacity
                style={{marginRight: 30}} onPress={logout} 
               >
                  <Text>Logout</Text>
                </TouchableOpacity>
              )
          }}
        />
      </Tab.Navigator>
    );
  };
  

const mapStateToProps = (state)=>{
    return {auth:state}
  }
export default connect(mapStateToProps, {logout}) (AppStack)
