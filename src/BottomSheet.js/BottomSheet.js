import React,{useState} from "react";
import { BottomSheet } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {Text} from "react-native"

const BottomSheet1=()=>{
    return(
        <SafeAreaProvider>
            <BottomSheet>
                <Text>hhhhhhhhhhhhhhhhhhhh</Text>
            </BottomSheet>
        </SafeAreaProvider>
    )
}
export default BottomSheet1
