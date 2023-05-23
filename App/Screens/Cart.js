import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const Cart = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal:15}}>
      <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:10}}>
        <Text style={{ fontSize:18, fontWeight:'bold'}}>Your Orders</Text>
        <AntDesign name="closecircle" size={20} color="red" />
      </View>
      <Text style={{ marginTop:10}}>Delivering in 35-40 mins </Text>
      <View style={{ backgroundColor:'#D9D9D9', height:1, width:'100%', marginTop:20,}}></View>
    </SafeAreaView>
  )
}

export default Cart;