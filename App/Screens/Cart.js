import { View, Text, FlatList } from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import CartItem from '../Components/CartItem';
import { AppContext } from '../Context/AppContext';
import { TouchableOpacity } from 'react-native';

const Cart = ({ navigation }) => {

  const {items, getItemsCount, getTotalPrice} = useContext(AppContext);
  
  

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
       <View style={{ flex:1, marginTop:40, flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{  fontSize:18}}>Total</Text>
          <Text style={{ }} >Ksh {total}</Text>
       </View> 
    );
  }



  function renderItem({item}) {
      return (
        <CartItem name={item.product.name} price={item.product.price} image={item.product.image} no={getItemsCount()[item.id]}/>
      );
    }


  return (
    <SafeAreaView style={{ paddingHorizontal:15, position:'relative', flex:1}}>
      <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:10}}>
        <Text style={{ fontSize:18, fontFamily:'PoppinsB'}}>Your Orders</Text>
        <AntDesign name="closecircle" size={20} color="red" />
      </View>
      <Text style={{ marginTop:10, fontFamily:'Poppins'}}>Delivering in 35-40 mins </Text>
      <View style={{ backgroundColor:'#D9D9D9', height:1, width:'100%', marginTop:20,}}></View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={Totals}
      />
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('Prep')} style={{ width:'90%', height:50, backgroundColor:'#000', alignSelf:'center', borderRadius:15, justifyContent:'center',alignItems:'center', position:'absolute', bottom:1}}>
          <Text style={{ color:'#fff',fontFamily:'PoppinsB', fontSize:16}}>Proceed to check out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Cart;