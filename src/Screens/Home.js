import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import auth from "@react-native-firebase/auth";


const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      setUser(user);
    });

    return subscriber;
  }, []);
  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure? You want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return null;
          },
        },
        {
          text: "Confirm",
          onPress: () => {
            auth()
              .signOut()
              .then(() => navigation.replace("Login"))
              .catch((error) => {
                console.log(error);
                if (error.code === "auth/no-current-user")
                  navigation.replace("Login");
                else alert(error);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar barStyle="light-content" backgroundColor="white"/> */}
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Firebase Auth
          </Text>
          {user ? (
            <Text>
              Welcome{" "}
              {user.displayName
                ? user.displayName
                : user.email}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={logout}
          >
            <Text style={styles.buttonTextStyle}>Logout
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={()=>navigation.navigate('FoodHome')}
          >
            <Text style={styles.buttonTextStyle}>goto
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "grey",
          }}
        >
          React Native Firebase Authentication
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "grey",
          }}
        >
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  buttonStyle: {
    minWidth: 300,
    backgroundColor: "#7DE24E",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
