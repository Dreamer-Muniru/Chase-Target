import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/HomeScreen';
import { TouchableOpacity, Text, View } from 'react-native';
import {logout} from '../redux/actions/authActions'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import AddPost from '../screens/AddPost'
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const FeedStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Case Tag"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#2e64e5',
            fontSize: 30,
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
          },
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <FontAwesome5.Button
                name="plus"
                size={22}
                backgroundColor="#fff"
                color="#2e64e5"
                onPress={() => navigation.navigate('AddPost')}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="AddPost"
        component={AddPost}
        options={{
        
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2e64e515',
            shadowColor: '#2e64e515',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="#2e64e5" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          title: '',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <View style={{marginLeft: 15}}>
              <Ionicons name="arrow-back" size={25} color="#2e64e5" />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
  
  
  
  const ProfileStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
      
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
  
  const AppStack = ({logout}) => {

    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={FeedStack}
          options={({route}) => ({
            tabBarLabel: 'Home',
            // tabBarVisible: route.state && route.state.index === 0,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="home-outline" size={30}
                
              />
            ),
          })}
        />
        <Tab.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({route}) => ({
            // Or Hide tabbar when push!
            // https://github.com/react-navigation/react-navigation/issues/7677
            // tabBarVisible: route.state && route.state.index === 0,
            // tabBarLabel: 'Home',
            tabBarIcon: () => (
              <Ionicons
                name="chatbox-ellipses-outline" size={30}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          
          options={{

            tabBarIcon: () => (
              <Ionicons name="person-outline" size={30} />
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
