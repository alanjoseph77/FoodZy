import React, { useState ,createContext} from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Alert,

  
  ImageBackground,
  TouchableHighlight,
  Switch,
  Button,
} from "react-native";
import ForgetPass from "./ForgetPass";
import Icon from 'react-native-vector-icons/FontAwesome';
import SocialButton from "../Components/SocialButton";
import auth from '@react-native-firebase/auth'
import firebase from '@react-native-firebase/app';


import '@react-native-firebase/firestore';
import { TextInput } from "react-native-paper";


const SignUp=({navigation})=> {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  


  const signup=()=>{
    if(email !='' && password != ''){
      auth()
  .createUserWithEmailAndPassword(email,password)
  .then((res) => {
    console.log('response',res);
    Alert.alert("User account created & signed in!")
    navigation.replace("SignUp")
  })
  .catch((error) => {
    



    console.log('eror...........',error);
    Alert.alert(error.message)
  });
    }else{
         Alert.alert('both are ')
    }
  }
  

  return (


    
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg_Image}
        source={require("../../assets/white.jpeg")}
      >
        <View>
          <Text style={styles.Text1}>Welcome to</Text>
          <Text style={styles.Text2}>Enter your Phone number or Email </Text>
          <Text style={styles.Text3}>adress for signin.Enjoy your food </Text>
        </View>
        <View style={styles.container2}>
            
            
          <TextInput
            style={styles.TextInput}
            placeholder="UserName"
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
            right={<TextInput.Icon name="eye" />}
            
          ></TextInput>
          
          
       
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
          ></TextInput>

<TextInput
            style={styles.TextInput}
            placeholder="ConformPassword"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          ></TextInput>

          {/* <View style={styles.tailView}>
            <Switch
              trackColor={{ false: "#767577", true: "green" }}
              thumbColor={isEnabled ? "##008000" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              r
              value={isEnabled}
            />
            <Text style={{ alignItems: "center", padding: 1 }}>
              Remember Me
            </Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => navigation.navigate("Pass")}
            >
              <Text style={styles.frgt}>Forget Password</Text>
            </TouchableHighlight>
          </View> */}
        </View>

        <View
          style={{
            marginTop: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableHighlight
            style={styles.btnView}
            underlayColor="transparent"
            onPress={signup}
          >
            <Text style={{ marginTop: 10, color: "white",fontWeight:'bold' }}>Sign In</Text>
          </TouchableHighlight>

          
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ marginTop: 10, alignItems: "center" }}>
            Already have an  account?
          </Text>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={()=>navigation.navigate('Login')}
          >
            <Text style={{ marginTop: 10, color: "green" }}>SignIn</Text>
          </TouchableHighlight>


          
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text>OR</Text>
        </View>
        {Platform.OS === 'android' ? (
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"/>
             <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
        ):null}


      </ImageBackground>
    </View>
  );
};
export default SignUp


const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    flex: 1,
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
  },
  bg_Image: {
    height: "100%",
    width: "100%",
  },
  //signup page text
  Text1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginLeft: 20,
    marginTop: 30,
  },
  Text2: {
    fontSize: 15,
    color: "black",
    marginTop: 10,
    marginLeft: 20,
  },
  Text3: {
    fontSize: 15,
    color: "black",
    marginLeft: 20,
  },
  TextInput: {
    width: 350,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    marginTop: 20,
    borderColor:"green"
  },
  tailView: {
    alignItems: "flex-end",
    flexDirection: "row",
    marginTop: 30,
  },
  frgt: {
    color: "green",
    alignItems: "flex-end",
    marginLeft: 100,
    // marginTop:20
  },
  rmdme: {
    marginTop: 30,
  },
  btnView: {
    width: "85%",
    height: 50,
    marginTop: 10,
    backgroundColor: "green",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
