import { Text, View ,TextInput,SafeAreaView} from 'react-native'
import React, { Component ,useState} from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon';
 


const Search=()=> {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    // Perform your search logic here
  };
  
  
    return (
      <SafeAreaView style={{width:"100%",height:'100%',flex:1,backgroundColor:"black"}}>

       
           <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
      <Icon name="search" size={20} color="white" />
      <TextInput style={{borderRadius:18,width:'90%'
            ,height:40,marginLeft:20,backgroundColor:"white",marginTop:10}}
        placeholder="User Nickname"
        onChangeText={(searchString) => console.log(searchString)}
        underlineColorAndroid="transparent"
      />
    </View>
                </SafeAreaView>
     
    )
}

export default Search