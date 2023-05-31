import { View, Text, Image } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

const Frequent = () => {
  return (
    <View style={{ marginBottom:10}}>
      <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Entypo name="plus" size={20} color="black" />
            <Text style={{ marginLeft:20, fontFamily:'Poppins'}}>Coka Cola</Text>
        </View>
        <Image source={{ uri:"https://res.cloudinary.com/dro4xvvnh/image/upload/v1684840382/image_1_vidrqm.jpg"}} style={{ width:50, height:60}}/>
      </View>
      <View style={{ backgroundColor:'#D9D9D9', height:1, width:'100%'}}></View>
    </View>
  )
};

export default Frequent;