import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal:10}}>
      <View style={{ width:'90%', borderRadius:2, padding:10, alignSelf:'center',  elevation: 1,shadowColor: '#52006A',}}>
        <Text style={{ fontFamily:'Poppins'}}>John Doe</Text>
        <Text style={{ fontFamily:'PoppinsB', color:'red'}}>View Activity</Text>
      </View>
    </SafeAreaView>
  )
};

export default Profile;