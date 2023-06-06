import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Onboarding1 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex:1,  alignItems:'center', justifyContent:'center'}}>
      <View >
        <Image source={require('../../Assets/Images/onboard.png')} style={{ height:200, width:300}}/>
        <Text style={{ fontFamily:"PoppinsB", fontSize:35, textAlign:'center', marginTop:20}}>Order your Food Anytime</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')} style={{ width:150,height:50,backgroundColor:'#4E3524', alignSelf:"center", borderRadius:15, justifyContent:'center', alignItems:'center', marginTop:30}}>
            <Text style={{ fontFamily:'Poppins', color:'#fff',fontSize:18}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};
export default Onboarding1;