import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
  Button,
  ScrollViewComponent,Alert
} from "react-native";
import React, { useState, useRef ,useEffect} from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");
import { ListItem, SearchBar } from "react-native-elements";
import { AirbnbRating } from "@rneui/themed";
import BottomSheet1 from "../BottomSheet.js/BottomSheet";
import RBSheet from "react-native-raw-bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { addToCart } from './Redux/CartActions';

const salad = [
  {
    id: 1,
    title: 'Salad 1',
    author: 'Author 1',
    price: 9.99,
    image: require('../../assets/reci.jpeg'), // Replace with the actual image path
  },
];

const biriyani = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    price: 9.99,
    image: require('../../assets/reci.jpeg'), // Replace with the actual image path
  },
];

const fry = [
  {
    id: 1,
    title: 'Money 1',
    author: 'Author 1',
    price: 9.99,
    image: require('../../assets/reci.jpeg'), // Replace with the actual image path
  },
];

const foodspecial = [
  {
    id: 1,
    title: 'Food 1',
    author: 'Author 1',
    price: 9.99,
    image: require('../../assets/reci.jpeg'), // Replace with the actual image path
  },
];


const FoodScreen = ({ navigation ,addToCart}) => {
  const handleAddToCart = (item) => {
    addToCart(item);
    Alert.alert("Added Sucesfully")
    navigation.navigate('Recipies')
  };
  
  const refRBSheet = useRef();
  const refRBSheet0 = useRef();
  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();
  const refRBSheet3 = useRef();
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const contentOffsetX = scrollViewRef.current?.contentOffset?.x ?? 0;
      const nextScrollX = contentOffsetX + width;

      scrollViewRef.current?.scrollTo({ x: nextScrollX, animated: true });
    }, 6000); // Adjust the interval duration as needed

    return () => clearInterval(scrollInterval);
  }, []);
 
 

  return (
    <SafeAreaView
      style={{ width: "100%", height: "100%", backgroundColor: "white" }}
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View
        style={{
          backgroundColor: "#252324",
          height: hp("10%"),

          borderBottomLeftRadius: 140,
          borderTopLeftRadius: 140,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../assets/recipies9.jpeg")}
            style={{ width: 70, height: 70, marginLeft: 40 }}
          />

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 40,
              marginLeft: 30,
              color: "white",
              marginTop: 10,
            }}
          >
            FOodZy
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("profile")}>
            <Image
              source={require("../../assets/profilehome1.png")}
              style={{ width: 40, height: 40, marginLeft: 58, marginTop: 18 }}
            />
          </TouchableOpacity>
        </View>
        {/* <View >
                      <Text style={{fontWeight:"bold",fontSize:15,marginLeft:35,color:"white",paddingBottom:40}}>what you want to order today?</Text>
                    </View> */}
      </View>

      <ScrollView autoplay={true} 
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          flex: 1,
        }}
      >
        <ScrollView
           ref={scrollViewRef}
          horizontal
          
          style={{ width: "100%", height: "100%", backgroundColor: "white" }}
        >
          {/* cofeecard........................................................... */}
          <View
            style={{
              borderRadius: 40,
              backgroundColor: "grey",
              height: height * 0.3,
              width: width * 0.45,
              marginTop: 80,
              marginLeft: 20,
            }}
          >
            <View
              style={{
                shadowColor: "#a27250",
                backgroundColor: "rgba(255,255,255,0.2)",
                shadowRadius: 30,
                shadowOffset: { width: 0, height: 40 },
                shadowOpacity: 0.8,
                marginTop: -55,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  height: 150,
                  width: 150,
                }}
                source={require("../../assets/recipes/special11.png")}
              ></Image>
            </View>

            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  paddingBottom: 9,
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 20,
                }}
              >
                Special Salad
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                flex: 1,
                paddingLeft: 10,
              }}
            >
              <AirbnbRating
                ratingcount={5}
                showRating={false}
                reviews={["Bad", "OK", "Good", "Very Good", "Amazing", ,]}
                defaultRating={4}
                size={15}
                reviewSize={15}
              />

              {/* <Rating
type="heart"
          ratingcount={5}
          showRating={true}
          fraction={1}
          jumbValue={0.5}
          startingValue={5}
          defaultRating={4}
          size={18}
          reviewSize={1}
          onFinishRating={(rating)=>alert(rating)}
        /> */}

              {/* aroowwwwwwwwwwwwwwwwwwwwwwwwwwww */}

              <TouchableOpacity onPress={() => refRBSheet0.current.open()}>
                <Image
                  source={require("../../assets/recipes/round.png")}
                  style={{
                    width: 49,
                    height: 49,
                    marginLeft: 6,
                    marginTop: 14,
                  }}
                />
              </TouchableOpacity>
            </View>
{/* ..................................................................RBSheet................................................................................. */}
<RBSheet
  ref={refRBSheet0}
  closeOnDragDown={true}
  closeOnPressMask={true}
  customStyles={{
    wrapper: {
      backgroundColor: "transparent",
    },
    draggableIcon: {
      backgroundColor: "#000",
    },
    container: {
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      paddingTop: 10,
      height: "70%",
      borderColor: "green",
      borderRadius: 3,
    },
  }}
>
<View style={styles.container1}>
      <View style={styles.sliderContainer}>
        <Swiper style={styles.wrapper} showsButtons={true}  loop={true}
          autoplay={true} >
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad1.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad2.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad5.jpg')}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
       <View style={{alignItems:"center",justifyContent:"center"}}>
     <Text
                style={{
                  paddingBottom: 9,
                  color: "black",
                  fontSize: 19,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 20,
                }}
              >
                Special Salad
              </Text>

              <Text
                style={{
                  paddingBottom: 9,
                  color: "black",
                  fontSize: 10,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 20,
                }}
              >
                 A salad is a dish consisting of mixed, mostly natural ingredients. They are typically served chilled or at room temperature, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.
              </Text>

              
      {salad.map((item) => (
        <Button
          key={item.id}
          title={`Add to Cart`}
          onPress={() => handleAddToCart(item)}
        />
      ))}
    
      </View> 
     
    </View>

</RBSheet>


{/* ..................................................................RBSheet................................................................................. */}
          </View>

          {/* second card,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

          <View
            style={{
              borderRadius: 30,
              backgroundColor: "grey",
              height: height * 0.3,
              width: width * 0.45,
              marginTop: 80,
              marginLeft: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                shadowColor: "#a27250",
                shadowRadius: 30,
                shadowOffset: { width: 0, height: 40 },
                shadowOpacity: 0.8,
                marginTop: -55,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 30,
                }}
                source={require("../../assets/recipes/biriyanni.png")}
              ></Image>
            </View>

            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  paddingBottom: 10,
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 50,
                }}
              >
                COFFEE
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                flex: 1,
                paddingLeft: 10,
              }}
            >
              <AirbnbRating
                ratingcount={5}
                showRating={false}
                reviews={["Bad", "OK", "Good", "Very Good", "Amazing", ,]}
                defaultRating={4}
                size={15}
                reviewSize={15}
              />

              {/* <Rating
type="heart"
          ratingcount={5}
          showRating={true}
          fraction={1}
          jumbValue={0.5}
          startingValue={5}
          defaultRating={4}
          size={18}
          reviewSize={1}
          onFinishRating={(rating)=>alert(rating)}
        /> */}

              {/* aroowwwwwwwwwwwwwwwwwwwwwwwwwwww */}

              <TouchableOpacity onPress={() => refRBSheet1.current.open()}>
                <Image
                  source={require("../../assets/recipes/round.png")}
                  style={{
                    width: 49,
                    height: 49,
                    marginLeft: 6,
                    marginTop: 14,
                  }}
                />
              </TouchableOpacity>
            </View>
{/* /////////////////////////////////////////////////////////////////////////////RBSheet///////////////////////////////////////////////////////////// */}
            <RBSheet
              ref={refRBSheet1}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: "blue",
                },
                draggableIcon: {
                  backgroundColor: "#000",
                },
                container: {
                  borderTopRightRadius: 40,
                  borderTopLeftRadius: 40,
                  paddingTop: 10,
                  height: "70%",
                },
              }}
            >
              <View style={styles.container1}>
      <View style={styles.sliderContainer}>
        <Swiper style={styles.wrapper} showsButtons={true}  loop={true}
          autoplay={true} >
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad1.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad2.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad5.jpg')}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
       <View style={{alignItems:"center",justifyContent:"center"}}>
     <Text
                style={{
                  paddingBottom: 9,
                  color: "black",
                  fontSize: 19,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 20,
                }}
              >
                Special Salad
              </Text>

              <Text
                style={{
                  paddingBottom: 9,
                  color: "black",
                  fontSize: 10,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 20,
                }}
              >
                 A salad is a dish consisting of mixed, mostly natural ingredients. They are typically served chilled or at room temperature, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.
              </Text>

              
      {biriyani.map((item) => (
        <Button
          key={item.id}
          title={`Add to Cart`}
          onPress={() => handleAddToCart(item)}
        />
      ))}
    
      </View> 
     
    </View>
            </RBSheet>
          </View>

          {/* third card............................................. */}

          <View
            style={{
              borderRadius: 40,
              backgroundColor: "grey",
              height: height * 0.3,
              width: width * 0.45,
              marginTop: 80,
              marginLeft: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                shadowColor: "#a27250",
                shadowRadius: 30,
                shadowOffset: { width: 0, height: 40 },
                shadowOpacity: 0.8,
                marginTop: -65,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  height: 160,
                  width: 160,
                }}
                source={require("../../assets/recipes/fry.png")}
              ></Image>
            </View>
            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  paddingBottom: 10,
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 50,
                }}
              >
                COFFEE
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                flex: 1,
                paddingLeft: 10,
              }}
            >
              <AirbnbRating
                ratingcount={5}
                showRating={false}
                reviews={["Bad", "OK", "Good", "Very Good", "Amazing", ,]}
                defaultRating={4}
                size={15}
                reviewSize={15}
              />

              {/* aroowwwwwwwwwwwwwwwwwwwwwwwwwwww */}

              <TouchableOpacity onPress={() => refRBSheet2.current.open()}>
                <Image
                  source={require("../../assets/recipes/round.png")}
                  style={{
                    width: 49,
                    height: 49,
                    marginLeft: 6,
                    marginTop: 14,
                  }}
                />
              </TouchableOpacity>
            </View>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////rbsheet//////////////////////////////////////////////// */}
            <RBSheet
              ref={refRBSheet2}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: "green",
                },
                draggableIcon: {
                  backgroundColor: "#000",
                },
                container: {
                  borderTopRightRadius: 40,
                  borderTopLeftRadius: 40,
                  paddingTop: 10,
                  height: "70%",
                },
              }}
            >
              <View style={styles.container1}>
      <View style={styles.sliderContainer}>
        <Swiper style={styles.wrapper} showsButtons={true}  loop={true}
          autoplay={true} >
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad1.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad2.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad5.jpg')}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
       <View style={{alignItems:"center",justifyContent:"center"}}>
     <Text
                style={{
                  paddingBottom: 9,
                  color: "black",
                  fontSize: 19,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 20,
                }}
              >
                Special Salad
              </Text>

              <Text
                style={{
                  paddingBottom: 9,
                  color: "black",
                  fontSize: 10,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 20,
                }}
              >
                 A salad is a dish consisting of mixed, mostly natural ingredients. They are typically served chilled or at room temperature, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.
              </Text>

              
      {fry.map((item) => (
        <Button
          key={item.id}
          title={`Add to Cart`}
          onPress={() => handleAddToCart(item)}
        />
      ))}
    
      </View> 
     
    </View>
            </RBSheet>
{/* ////////////////////////////////////////////////////////////////////////end RBSheet/////////////////////////////////////////////////////////// */}
          </View>

          {/* fourth card...................................................... */}

          <View
            style={{
              borderRadius: 30,
              backgroundColor: "grey",
              height: height * 0.3,
              width: width * 0.45,
              marginTop: 80,
              marginLeft: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                shadowColor: "#a27250",
                shadowRadius: 30,
                shadowOffset: { width: 0, height: 40 },
                shadowOpacity: 0.8,
                marginTop: -65,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  height: 160,
                  width: 160,
                  borderRadius: 30,
                }}
                source={require("../../assets/recipes/cofee.png")}
              ></Image>
            </View>

            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  paddingBottom: 10,
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 50,
                }}
              >
                COFFEE
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                flex: 1,
                paddingLeft: 10,
              }}
            >
              <AirbnbRating
                ratingcount={5}
                showRating={false}
                reviews={["Bad", "OK", "Good", "Very Good", "Amazing", ,]}
                defaultRating={4}
                size={15}
                reviewSize={15}
              />

              {/* aroowwwwwwwwwwwwwwwwwwwwwwwwwwww */}

              <TouchableOpacity onPress={() => refRBSheet3.current.open()}>
                <Image
                  source={require("../../assets/recipes/round.png")}
                  style={{
                    width: 49,
                    height: 49,
                    marginLeft: 6,
                    marginTop: 14,
                  }}
                />
              </TouchableOpacity>
            </View>
{/* ////////////////////////////////////////////////////////////////////////////////RBSheet///////////////////////////////////////////////////////////// */}
            <RBSheet
              ref={refRBSheet3}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: "black",
                },
                draggableIcon: {
                  backgroundColor: "#000",
                },
                container: {
                  borderTopRightRadius: 40,
                  borderTopLeftRadius: 40,
                  paddingTop: 10,
                  height: "70%",
                },
              }}
            >
              <View style={styles.container1}>
      <View style={styles.sliderContainer}>
        <Swiper style={styles.wrapper} showsButtons={true}  loop={true}
          autoplay={true} >
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad1.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad2.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.slideContainer}>
            <Image
              source={require('../../assets/recipes/salad5.jpg')}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
       <View style={{alignItems:"center",justifyContent:"center"}}>
     <Text
                style={{
                  paddingBottom: 9,
                  color: "black",
                  fontSize: 19,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 20,
                }}
              >
                Special Salad
              </Text>

              <Text
                style={{
                  paddingBottom: 9,
                  color: "black",
                  fontSize: 10,
                  fontWeight: "bold",
                  fontFamily: "monospace",
                  paddingLeft: 20,
                }}
              >
                 A salad is a dish consisting of mixed, mostly natural ingredients. They are typically served chilled or at room temperature, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.
              </Text>

              
      {foodspecial.map((item) => (
        <Button
          key={item.id}
          title={`Add to Cart`}
          onPress={() => handleAddToCart(item)}
        />
      ))}
    
      </View> 
     
    </View>

            </RBSheet>
 {/* ////////////////////////////////////////////////////////////////////////////////endRBSheet/////////////////////////////////////////////////////////////            */}
          </View>
        </ScrollView>

        {/* end scrollll........................................................recipies */}

        {/* <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      /> */}
      </ScrollView>
    </SafeAreaView>
  );
};
const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(FoodScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  //rbsheet design
  container1: {
    height: height * 0.5, // Adjust the height to your preference
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    width: width,
    height: '80%', // Adjust the height to your preference
    marginBottom: 20,
  },
  wrapper: {
    // Optional styles for the swiper container
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width / 2,
    height: width / 2,
    borderRadius: 20,
    marginTop:18
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});
