import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Menus = ({Menusimg, Title, menuPress}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={menuPress} style={{ position:'relative',marginTop:20, marginRight:10, alignItems:'center'}}>
      <Image source={{uri:Menusimg}} style={{ height:55, width:80,}}/>
      <Text style={{ fontFamily:'Poppins'}}>{Title}</Text>
    </TouchableOpacity>
  )
};

export default Menus;