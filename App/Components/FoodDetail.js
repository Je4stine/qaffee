import { View, Text, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import React,{ useState, useContext, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Frequent from './Frequent';
import { AppContext } from '../Context/AppContext';
import { getProduct } from './ProductList/Products';

import { FontAwesome } from '@expo/vector-icons';


const FoodDetail = ({navigation, route}) => {
  const { image, price, duration, description, name, productId, rating} = route.params;
  const { increment, setIncrement, addItemToCart}=useContext(AppContext);
  const [product, setProduct] = useState({});


  
  useEffect(() => {
    setProduct(getProduct(productId));
    console.log(productId)
  },[]);

  function onAddToCart() {
    addItemToCart(product.id);
    navigation.navigate('Cart');
  };



  const handleCount = ()=>{
    setIncrement(increment + 1)
  };

  const handleMinus =()=>{
    if(increment===0){
        console.log(0)
    }else{
      setIncrement(increment - 1)
    }
   
  }
  

  return (
    <>
    <ScrollView style={{ position:'relative', flex:1}}>
    <View >
      <Image source={{ uri:image}} style={{ width:'100%', height:250}}/>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{ position:'absolute', top:40, left:10}}><AntDesign name="leftcircle" size={24} color="#fff" /></TouchableOpacity>
      <View style={{ backgroundColor:'#fff', padding:10}}>
            <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{ fontFamily:'PoppinsB', fontSize:25}}>
                    {name}
                </Text>
                <View style={{ flexDirection:'row', justifyContent:'center', }}>
                  <Text style={{ fontFamily:'Poppins', marginRight:3}}>{rating}</Text>
                  <FontAwesome name="star" size={13} color="black" style={{ marginTop:2}}/>
                </View>
            </View>
            
            <Text style={{ fontFamily:'PoppinsB', fontSize:15,  marginBottom:20}}>
                Ksh.{price}
            </Text>
            <Text style={{ fontSize:14, fontFamily:'Poppins'}}>
                {description}
            </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems:'center', padding:10}}>
        <View style={{ flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
            <EvilIcons name="question" size={24} color="green" />
            <Text style={{fontFamily:'Poppins'}}>Have any food allergies? Notify us</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
      
      <View style={{ flexDirection:'row',alignItems:'center',justifyContent:'space-around', marginLeft:20, marginTop:20, marginBottom:20,padding:8, backgroundColor:'#D3D3D3', width:'25%', borderRadius:20}}>
        <TouchableOpacity onPress={handleMinus}><Fontisto name="minus-a" size={10} color="black" /></TouchableOpacity>
        <Text style={{ fontSize:15}}>{increment}</Text>
        <TouchableOpacity onPress={handleCount}><MaterialCommunityIcons name="plus" size={18} color="black" /></TouchableOpacity>
      </View>
      <View style={{ backgroundColor:'#fff', padding:10 }}>
        <Text style={{ fontFamily:'PoppinsB', fontSize:22}}>Frequently bought with</Text>
        <Frequent/>
        <Frequent/>
        <Frequent/>
        <Frequent/>
      </View>
    </View>
    </ScrollView>
    <TouchableOpacity onPress={onAddToCart} style={{ backgroundColor:'#000', height:50, width:'95%', borderRadius:10, justifyContent:'center', alignItems:'center', alignSelf:'center', position:'absolute',bottom:10,}}>
        <Text style={{ fontFamily:'PoppinsB', fontSize:15, color:'#fff' }}>
            Add Item to cart Ksh.{price}
        </Text>
      </TouchableOpacity>
    </>
  )
};

export default FoodDetail;