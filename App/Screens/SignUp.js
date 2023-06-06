import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import React, {useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite'

const SignUp = ({ navigation}) => {
  const db= SQLite.openDatabase("Login.db");
  


  return (
    <SafeAreaView style={{ flex:1,}}>
      <View style={{ flexDirection:'row', alignItems:'center',marginTop:5}}>
          <TouchableOpacity onPress={()=>navigation.goBack()}><Ionicons name="ios-chevron-back-circle-sharp" size={24} color="#4E3524" style={{ marginLeft:10}} /></TouchableOpacity>
          <Text style={{ marginLeft:'30%', fontFamily:'PoppinsB', fontSize:20}}>Register</Text>
      </View>
      <View style={{ alignSelf:'center', marginTop:10}}>
        <Image source={require('../Assets/Images/icon2.png')} style={{ height:70, width:70}}/>
      </View>
      <View style={{ paddingHorizontal:20, marginTop:30}}>
        <View style={{ }}>
            <Text style={{ fontFamily:'Poppins'}}>Email Address</Text>
            <TextInput
              placeholder ='e.g example@email.com'
              style={{  borderBottomWidth:0.5, marginBottom:10, borderColor:'gray', padding:5, fontFamily:'Poppins'}}
            />
        </View>
        <View>
            <Text style={{ fontFamily:'Poppins'}}>Name</Text>
            <TextInput
              placeholder ='e.g John Doe'
              style={{  borderBottomWidth:0.5, marginBottom:10, borderColor:'gray', padding:5, fontFamily:'Poppins'}}
            />
        </View>
        <View>
            <Text style={{ fontFamily:'Poppins'}}>Phone Number</Text>
            <TextInput
              placeholder ='e.g 0700000000'
              keyboardType="numeric"
              style={{  borderBottomWidth:0.5, marginBottom:10, borderColor:'gray',padding:5, fontFamily:'Poppins'}}
            />
        </View>
        <View>
            <Text style={{ fontFamily:'Poppins'}}>Password</Text>
            <TextInput
            placeholder ='********'
            style={{  borderBottomWidth:0.5, marginBottom:10, borderColor:'gray', padding:5, fontFamily:'Poppins'}}
            />
        </View>
        <View>
            <Text style={{ fontFamily:'Poppins'}}>Re-enter Password</Text>
            <TextInput
             placeholder ='********'
             style={{  borderBottomWidth:0.5, marginBottom:10, borderColor:'gray', padding:5, fontFamily:'Poppins'}}
            />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Main')} style={{ height:40, width:'70%', backgroundColor:'#4E3524', borderRadius:15, justifyContent:'center', alignItems:'center', alignSelf:'center', marginTop:10}}>
          <Text style={{ fontFamily:'PoppinsB', color:'#fff', fontSize:20}}>
              Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{ alignSelf:'center', marginTop:20}}>
          <Text>Already have an account? <Text style={{ color:'#4E3524'}}>Sign In</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default SignUp;