import React, { useEffect,useState } from "react";

// import Index from "./src/Screens/index";
import SignUp from "./src/Screens/SignUp";
import Login from "./src/Screens/Login";
import { StatusBar } from "react-native";
import { Image } from "react-native";
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/Screens/Redux/Store';

// import Splash from "./src/Screens/Splash";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Boarding from "./src/Screens/OnBoarding";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import AsyStorage from "./src/Storage/AsyStorage";
// import Onboarding from "react-native-onboarding-swiper";
import ForgetPass from "./src/Screens/ForgetPass";
import Home from "./src/Screens/Home";
import FoodScreen from "./src/Screens/FoodHome";
import Profile from "./src/Screens/Profile";
import Recipies from "./src/Screens/Recipies";
import Search from "./src/Screens/Search";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomSheet1 from "./src/BottomSheet.js/BottomSheet";

import SplashPage from "./src/Screens/Splash";




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MyStack() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    // Simulate a delay for the splash screen
    const splashTimeout = setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000); // 2000 milliseconds (2 seconds)

    return () => clearTimeout(splashTimeout);
  }, []);
  return (
    
    
    
    <Stack.Navigator screenOptions={{ headerShown: false ,}}>
       {showSplashScreen ? (
          <Stack.Screen
            name="Splash1"
            component={SplashPage}
            options={{ headerShown: false }}
          />): (
            <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, headerTintColor: "black" }}
        initialRoute={{ statusBarHidden: false }}
      ></Stack.Screen>
          )}
      
      <Stack.Screen name="Splash"
      component={Boarding}
      options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="Pass"
      component={ForgetPass}
      options={{headerShown:false}}></Stack.Screen>

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: true, headerTintColor: "black" }}
        initialRoute={{ statusBarHidden: true }}
      ></Stack.Screen>
      

<Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false, headerTintColor: "black" }}
        initialRoute={{ statusBarHidden: false }}
      ></Stack.Screen>
      


<Stack.Screen
        name="FoodHome"
        component={MyTabs}
        options={{ headerShown: false, headerTintColor: "black" }}
        initialRoute={{ statusBarHidden: false }}
      ></Stack.Screen>

<Stack.Screen name="BtmSheet"
      component={BottomSheet1}
      options={{headerShown:false}}></Stack.Screen>
      
    </Stack.Navigator>
   
  );
}



function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShadow:false,tabBarShowLabel:false,olor: 'white',
    }}>
      <Tab.Screen name="Home" component={FoodScreen} 
      options={{headerShown: false,tabBarStyle:{
        marginBottom:20,
        borderRadius:190,backgroundColor:'black'
      }
,        tabBarIcon: () => (<Image source={require("../../Project/Chat/assets/home2.png")}  style={{width: 20, height: 20}} />)
    }} />
      <Tab.Screen name="Search" component={Search}
       options={{tabBarStyle:{
        marginBottom:10,
        borderRadius:60,backgroundColor:'black',
      },
        tabBarIcon: () => (<Image source={require("../../Project/Chat/assets/search3.png")} style={{width: 20, height: 20}} />)
    }} />
      <Tab.Screen name="Recipies" component={Recipies}
      options={{headerShown: false,
        tabBarIcon: () => (<Image source={require("../../Project/Chat/assets/loc.png")} style={{width: 30, height: 30}} />)
    }} />
      <Tab.Screen name="profile" component={Profile} 
     options={{headerShown: false,
      tabBarIcon: () => (<Image source={require("../../Project/Chat/assets/profile22.png")} style={{width: 20, height: 20}} />)
  }}
  
/>
    </Tab.Navigator>
  );
}

export default function App() {
  
    return (
      <StoreProvider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <MyStack />
          </NavigationContainer>
        </PersistGate>
      </StoreProvider>
    );
  }
