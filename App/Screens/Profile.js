import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Profile = () => {
  return (
    <SafeAreaView style={{position:'relative', flex:1}}>
      <View style={{ alignItems:'center', marginTop:50}}>
        <Image source={require('../Assets/Images/image.jpg')} style={{ width:150, height:150, borderRadius:75}}/>
        <Text style={{ fontFamily:'PoppinsB', fontSize:20, marginTop:10}}>John Doe</Text>
        <Text style={{ fontFamily:'Poppins', color:'red', fontSize:15}}>View activity</Text>
      </View>
      <TouchableOpacity style={{ backgroundColor:'#fff', height:50, marginTop:10, justifyContent:'space-around', flexDirection:'row', alignItems:'center'}}>
          <Ionicons name="wallet" size={20} color="black" />
          <Text style={{ fontFamily:'Poppins', fontSize:18}}>Payments</Text>
       
        <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor:'#fff', height:50, marginTop:10, justifyContent:'space-around', flexDirection:'row', alignItems:'center'}}>
            <Ionicons name="settings" size={20} color="black" />
            <Text style={{ fontFamily:'Poppins', fontSize:18}}>Profile settings</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor:'#fff', height:50, marginTop:10, justifyContent:'space-around', flexDirection:'row', alignItems:'center'}}>
            <FontAwesome5 name="history" size={20} color="black" />
            <Text style={{ fontFamily:'Poppins', fontSize:18}}>Order History</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor:'#fff', height:50, marginTop:10, justifyContent:'space-around', flexDirection:'row', alignItems:'center'}}>
        <FontAwesome name="calendar" size={24} color="black" />
        <Text style={{ fontFamily:'Poppins', fontSize:18}}>Booking</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={{ position:'absolute', bottom:10, alignSelf:'center', padding:10, backgroundColor:'#fff', borderRadius:10}}>
        <Text style={{ fontFamily:'Poppins'}}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

export default Profile;