import { Text, View ,Image} from 'react-native'
import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'


const Drawer=createDrawerNavigator()
function Screen1({ route }) {
  return (
    <View style={{flex:1,width:"100%",height:"100%",backgroundColor:"blue"}}>
      <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"red",height:100,width:"50%"}}>
      <Image style={{width: 90,
    height: 90,
    borderRadius: 75,
    marginBottom: 16,}}
      source={require('../../assets/recipes/fry.png')}></Image>
      </View>
      <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"green",flexDirection:"row"}}>
      <Image style={{width: 90,
    height: 90,
    borderRadius: 75,
    marginBottom: 16,}}
      source={require('../../assets/recipes/fry.png')}></Image>
      <Image style={{width: 90,
    height: 90,
    borderRadius: 75,
    marginBottom: 16,}}
      source={require('../../assets/recipes/fry.png')}></Image>
      </View>
      <View style={{alignItems:"center",justifyContent:"center",backgroundColor:"black"}}>
      <Image style={{width: 90,
    height: 90,
    borderRadius: 75,
    marginBottom: 16,}}
      source={require('../../assets/recipes/fry.png')}></Image>
      </View>
    </View>
  );
}

function Screen2() {
  return (
    <View>
      <Text>Screen 2</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View>
      <Text>Screen 3</Text>
    </View>
  );
}

const Profile=()=>{
  
  return(
    <Drawer.Navigator options={{ headerShown: false, headerTintColor: "black" }}
    >
    <Drawer.Screen name="PROFILE" component={Screen1} 
   ></Drawer.Screen>
    <Drawer.Screen name="Drawer2" component={Screen2} />
    <Drawer.Screen name="Drawer3" component={Screen3} />
  </Drawer.Navigator>
  )
}

export default Profile
