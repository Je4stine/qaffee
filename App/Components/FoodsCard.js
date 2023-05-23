import { View, Text, Image, Pressable} from 'react-native';
import React, { useState} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';




const FoodsCard = () => {
  const navigation =useNavigation();
  const [liked, setLiked] = useState(false);

  return (
    <Pressable onPress={()=>navigation.navigate('Food')} style={{ height:220, width:'95%', backgroundColor:'#fff', borderRadius:15, marginTop:20,alignSelf:'center', position:'relative',shadowColor: '#171717', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, elevation:1}}>
      <Image source={{uri:"https://res.cloudinary.com/dro4xvvnh/image/upload/v1684840382/image_1_vidrqm.jpg"}} style={{ width:'100%', height:'100%', borderRadius:15, opacity:0.7,backgroundColor:'#000'}}/>
      <View style={{ position:'absolute', bottom:0, width:'100%', height:'30%', backgroundColor:'#fff', borderBottomRightRadius:13, borderBottomLeftRadius:13,padding:5}}>
        <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{ fontWeight:'bold', fontSize:17}}>Pizza</Text>
        </View>
       <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <View style={{ flexDirection:'row', alignItems:'center', marginTop:10}}>
          <Entypo name="stopwatch" size={15} color="black" style={{ marginRight:10}}/>
          <Text style={{ marginRight:10}}>30 Mins</Text>
        </View>

        <Text style={{ marginTop:10, marginRight:10}}>Ksh. 5,000</Text>
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