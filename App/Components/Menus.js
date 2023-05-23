import { View, Text, Image } from 'react-native';
import React from 'react';

const Menus = ({Menusimg, Title}) => {
  return (
    <View style={{ position:'relative',marginTop:20, marginRight:10, alignItems:'center'}}>
      <Image source={{uri:Menusimg}} style={{ height:55, width:80,}}/>
      <Text>{Title}</Text>
    </View>
  )
};

export default Menus;