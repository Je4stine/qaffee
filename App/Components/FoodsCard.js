import { View, Text, Image, Pressable} from 'react-native';
import React, { useState} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';





const FoodsCard = ({ name, duration, price, image, onPress, rating }) => {
  const navigation =useNavigation();
  const [liked, setLiked] = useState(false);

  return (
    <Pressable onPress={onPress} style={{ height:220, width:'95%', backgroundColor:'#fff', borderRadius:15, marginTop:20,alignSelf:'center', position:'relative',shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, elevation:1}}>
      <Image source={{uri:image}} style={{ width:'100%', height:'100%', borderRadius:15, opacity:0.7,backgroundColor:'#000'}}/>
      <View style={{ position:'absolute', bottom:0, width:'100%', height:'30%', backgroundColor:'#fff', borderBottomRightRadius:13, borderBottomLeftRadius:13,padding:5}}>
        <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{ fontSize:17, fontFamily:'PoppinsB'}}>{name}</Text>
            <View style={{ flexDirection:'row', justifyContent:'center', }}>
            <Text style={{ fontFamily:'Poppins', marginRight:3}}>{rating}</Text>
            <FontAwesome name="star" size={13} color="black" style={{ marginTop:2}}/>
            </View>
        </View>
       <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center',marginTop:10}}>
          <Entypo name="stopwatch" size={15} color="black" style={{ marginRight:10}}/>
          <Text style={{ marginRight:10, fontFamily:'Poppins'}}>{duration}</Text>
        </View>

        <Text style={{ marginTop:10, marginRight:10, fontFamily:'Poppins'}}>Ksh.{price}</Text>
       </View> 
      </View>
      <View style={{ position:'absolute', right:10, top:15, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Pressable onPress={() => setLiked((isLiked) => !isLiked)}>
                <MaterialCommunityIcons
                name={liked ? "heart" : "heart-outline"}
                size={25}
                color={liked ? "red" : "white"}
              />
        </Pressable>
        <Entypo name="dots-three-vertical" size={20} color="#fff" style={{ marginLeft:10}}/>
      </View>
    </Pressable>
  )
};

export default FoodsCard;