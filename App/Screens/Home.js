import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native';

import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CategoryCard from '../Components/CategoryCard';
import Menus from '../Components/Menus';
import DATA from '../Components/Data';
import Offer from '../Components/Offer';
import FoodsCard from '../Components/FoodsCard';

const renderMenuItem = ({ item }) => (
  <Menus key={item.id} Title={item.title} Menusimg={item.imageurl} />
);

const renderMenuRows = () => {
  const dataLength = DATA.length;
  const halfLength = Math.ceil(dataLength / 2);
  const firstHalf = DATA.slice(0, halfLength);
  const secondHalf = DATA.slice(halfLength, dataLength);

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {firstHalf.map((item, index) => (
          <View key={item.id}>
            {renderMenuItem({ item })}
          </View>
        ))}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {secondHalf.map((item, index) => (
          <View key={item.id}>
            {renderMenuItem({ item })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};



const Home = () => {
  return (
    <SafeAreaView style={{ paddingHorizontal:10,}}>
      <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
      <View style={{ backgroundColor:'#f2f2f2'}}>
      <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Image source={require('../Assets/Images/icon2.png')} style={{ width:40, height:40, marginRight:10}}/>
          <View>
            <Text style={{ fontSize:14}}>Deliver Now!</Text>
            <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={{ fontSize:16, fontWeight:'bold'}}>Current Location</Text>
              <SimpleLineIcons name="arrow-down" size={12} color="black" style={{marginLeft:10}}/>
            </View>
          </View>
        </View>
        <View>
            <Image source={require('../Assets/Images/image.jpg')} style={{ width:50, height:50, borderRadius:25}}/>
        </View>
      </View>
      <View style={{ marginTop:20, position:'relative'}}>
        <TextInput
          placeholder='Search Food'
          style={{ padding:10, backgroundColor:'#fff', borderRadius:10}}
          />
          <Feather name="search" size={20} color="black" style={{ position:'absolute', top:'30%', right:10}}/>
      </View>
      </View>

        <Offer/>
        <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20}}>
          <View style={{ backgroundColor:'#D9D9D9', height:1, width:'25%'}}></View>
          <Text style={{ marginHorizontal:10, fontWeight:'700', fontSize:15}}>What's on your Mind?</Text>
          <View style={{ backgroundColor:'#D9D9D9', height:1, width:'25%'}}></View>
        </View>
      
           {
            renderMenuRows()
           }
           <View>
                <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20}}>
                    <View style={{ backgroundColor:'#D9D9D9', height:1, width:'25%'}}></View>
                    <Text style={{ marginHorizontal:10, fontWeight:'700', fontSize:15}}>Discover foods</Text>
                    <View style={{ backgroundColor:'#D9D9D9', height:1, width:'25%'}}></View>
              </View>
           </View>
        <View>
          <FoodsCard/>
          <FoodsCard/>
          <FoodsCard/>
          <FoodsCard/>
          <FoodsCard/>
          <FoodsCard/>
        </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home;