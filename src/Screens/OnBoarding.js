import React, { Component,useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import auth from '@react-native-firebase/auth'



// const Skip = ({...props})=>{
// <TouchableOpacity
// style={{marginHorizontal:10, fontWeight:'bold'}}
// {...props}/>
//  }
const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
      <View 
          style={{
            
              width:6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor
          }}
      />
  );
}

const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);
const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);




const Boarding = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  auth().onAuthStateChanged((user)=>{
    if(user){
      navigation.navigate('Home')
    }
  })
  
  return (
    
    <Onboarding
      style={styles.slide}
       SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/search.jpeg")} />,
          title: "DISCOVER PLACES NEAR YOU",
          subtitle:
            "We make it simple to find the food you crave enter your adress and let us do rest",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/order.jpeg")} />,
          title: "ORDER YOUR FAVOURITE",
          subtitle:
            "When you order eat street,we will hook you up with exclusive coupns,special sand rewards",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/delivery.jpeg")} />,
          title: "FASTEST DELIVERY",
          subtitle:
            "We make food ordering fast,simple and free-no matter if you are online or cash",
        },
      ]}
    />
    
  );
};
export default Boarding;

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1,
    height: "100%",
    width: "100%",
    

    // Take up all screen
    // justifyContent: 'center',   // Center vertically
    // alignItems: 'center',       // Center horizontally
  },
  // Header styles
  header: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center",
  },
});
