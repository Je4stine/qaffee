import { View, Text, Image } from 'react-native';
import React from 'react';

const Offer = () => {
  return (
    <View style={{ height:120, width:'95%', backgroundColor:'red', alignSelf:'center', borderRadius:20, marginTop:20, padding:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <Text style={{ color:'#fff'}}>Offers</Text>
      <Image source={{ uri:'https://res.cloudinary.com/dro4xvvnh/image/upload/v1684845286/pngwing.com_28_zkjo5u.png'}} style={{ width:90, height:90}}/>
    </View>
  )
};

export default Offer;