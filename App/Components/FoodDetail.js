import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const FoodDetail = ({navigation}) => {
  return (
    <View style={{ position:'relative', flex:1}}>
      <Image source={{ uri:'https://res.cloudinary.com/dro4xvvnh/image/upload/v1684840382/image_1_vidrqm.jpg'}} style={{ width:'100%', height:250}}/>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{ position:'absolute', top:40, left:10}}><AntDesign name="leftcircle" size={24} color="#fff" /></TouchableOpacity>
      <View style={{ backgroundColor:'#fff', padding:10}}>
            <Text style={{ fontWeight:'bold', fontSize:25}}>
                Pizza
            </Text>
            <Text style={{ fontWeight:'bold', fontSize:15,  marginBottom:20}}>
                Ksh.500
            </Text>
            <Text style={{ fontSize:14}}>
                Rich, hearty and Satisfying. Our house special pizza is baked to perfection with layers of cheesy goodness and sweetness.
            </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems:'center', padding:10}}>
        <View style={{ flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
            <EvilIcons name="question" size={24} color="green" />
            <Text>Have any food allergies? Notify us</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
      <TouchableOpacity style={{ backgroundColor:'#000', height:50, width:'95%', borderRadius:10, justifyContent:'center', alignItems:'center', alignSelf:'center', position:'absolute', bottom:1}}>
        <Text style={{ fontWeight:'600', fontSize:15, color:'#fff' }}>
            Add Item to cart Ksh.500
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export default FoodDetail;