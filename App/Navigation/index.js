import { View, Text } from 'react-native'
import React, { useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import * as SQLite from 'expo-sqlite';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import Profile from '../Screens/Profile';
import FoodDetail from '../Components/FoodDetail';
import Preparing from '../Screens/Preparing';
import Categories from '../Screens/Categories';
import Onboarding1 from '../Screens/Onboarding/Onboarding1';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator options ={{  tabBarShowLabel: false, headerShown: false, }} screenOptions={{ tabBarHideOnKeyboard: true,}}>
      <Tab.Screen name="Home" component={Home} 
        options = {{
        tabBarActiveTintColor:"#58362a",
        tabBarInactiveTintColor:'#808080',
        title:'',
        tabBarIcon: ({ color, size, backgroundColor }) => (
          <Entypo name="home" size={20} color={color} />
        ),
        headerShown: false,
      }}/>

      <Tab.Screen name="Cart" component={Cart} 
        options = {{
            tabBarActiveTintColor:"#58362a",
            tabBarInactiveTintColor:'#808080',
            title:'',
            tabBarIcon: ({ color, size, backgroundColor }) => (
                <FontAwesome5 name="shopping-cart" size={20} color={color} />
            ),
            headerShown: false,
        }}
      />
      <Tab.Screen name="Profile" component={Profile} 
       options = {{
        tabBarActiveTintColor:"#58362a",
        tabBarInactiveTintColor:'#808080',
        title:'',
        tabBarIcon: ({ color, size, backgroundColor }) => (
            <Ionicons name="person" size={20} color={color} />
        ),
        headerShown: false,
      }}
      />
    </Tab.Navigator>
  );
};

function MainStack(){
  
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Onboard" component={Onboarding1} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                <Stack.Screen name="Main" component={MainTabs} options={{headerShown: false}}/>
                <Stack.Screen name='Food' component={FoodDetail} options={{ headerShown: false}}/>
                <Stack.Screen name='Prep' component={Preparing} options={{ headerShown: false}}/>
                <Stack.Screen name ='Categories' component={Categories} options={{ headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default MainStack;