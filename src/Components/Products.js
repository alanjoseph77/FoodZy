import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,Image
} from "react-native";

class Products extends Component {

    renderProducts = (products) => {
        console.log(products)
        return products.map((item, index) => {
            return (
                <View key={index} style={{ padding: 20 }}>
                    <Button onPress={() => this.props.onPress(item)} title={item.author + " - " + item.name } />
                    
                    
                    
                </View>
            )
        })
    }



    render() {
        return (
            <View style={styles.container}>
                {this.renderProducts(this.props.products)}
            </View>
        );
    }
}
export default Products;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});