import { View, Text, Image } from 'react-native';
import React from 'react';

const CategoryCard = ({title}) => {
  return (
    <View style={{ position:'relative',marginTop:20, marginRight:10}}>
      <Image source={require('../Assets/Images/pizza.jpg')} style={{ height:80, width:80, borderRadius:10, opacity:0.7, backgroundColor:'#000'}}/>
      <Text style={{ position:'absolute', bottom:4, left:4, color:'#fff', fontWeight:'bold', fontSize:12}}>CategoryCard</Text>
    </View>
  );
};

export default CategoryCard;