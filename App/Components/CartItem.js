import { View, Text, Image } from 'react-native'
import React from 'react'

const CartItem = ({image, price, name, no}) => {
  return (
    <View style={{ width:'100%', height:60, flexDirection:'row',marginTop:10, alignItems:'center'}}>
      <Text style={{ fontFamily:'Poppins', marginRight:20}}>{no}</Text>
      <Image source={{ uri:image}} style={{ width:50, height:50, borderRadius:25, marginRight:20}}/>
      <View>
        <Text style={{ fontFamily:'PoppinsB'}}>{name}</Text>
        <Text style={{ fontWeight:'500', fontFamily:'Poppins'}}>Ksh. {price} </Text>
        <Text style={{ fontFamily:'Poppins'}}>Delivered to Ngong Road</Text>
      </View>
      
    </View>
  )
}

export default CartItem;