import { View, Text, Image, StyleSheet, TextInput, ScrollView, FlatList, Pressable } from 'react-native';

import React, { useContext, useEffect, useState} from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CategoryCard from '../Components/CategoryCard';
import Menus from '../Components/Menus';
import DATA from '../Components/Data';
import Offer from '../Components/Offer';
import FoodsCard from '../Components/FoodsCard';
import { getProducts } from '../Components/ProductList/Products';
import { useNavigation } from '@react-navigation/native';
import { BottomSheet } from 'react-native-btr';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { AppContext } from '../Context/AppContext';


const renderMenuItem = ({ item, menuPress }) => (
  <Menus
    key={item.id}
    Title={item.title}
    Menusimg={item.imageurl}
    menuPress={() => menuPress(item)} // Pass the item as an argument to menuPress
  />
);

const renderMenuRows = (menuPress) => {
  const dataLength = DATA.length;
  const halfLength = Math.ceil(dataLength / 2);
  const firstHalf = DATA.slice(0, halfLength);
  const secondHalf = DATA.slice(halfLength, dataLength);

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {firstHalf.map((item, index) => (
          <View key={item.id}>
            {renderMenuItem({ item, menuPress })}
          </View>
        ))}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {secondHalf.map((item, index) => (
          <View key={item.id}>
            {renderMenuItem({ item, menuPress })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


    



const Home = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [productId, setProductId]=useState(0);
  const navigation = useNavigation();
  const [errorMsg, setErrorMsg] = useState(null);
  const [myL, setMyL]=useState(null)
  const { location, setLocation, myAddress, setMyAddress} = useContext(AppContext);

  const GetCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
  
    if (status !== 'granted') {
      Alert.alert(
        'Permission not granted',
        'Allow the Qaffee Point to use location service.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
  
    let { coords } = await Location.getCurrentPositionAsync();
    setLocation(coords);
    setMyL(coords)
    console.log(myL)
  
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
      
  
      for (let item of response) {
        let address = `${item.district}, ${item.city}`;
  
        // setDisplayCurrentAddress(address);
        setMyAddress(address)
      }
    }
  };



  useEffect(() => {
    GetCurrentLocation()
  }, []);

  const menuPress =(item)=>{
    navigation.navigate('Categories', { imageurl:item.imageurl, title:item.title})
  }


 

  

  const toggleBottomNavigationView = () => {
    setVisible(!visible);
  
  };


  useEffect(() => {
    setProducts(getProducts());
    setProductId(products.id)
  },[]);

  const renderProduct =({ item})=>{
    return(
      <FoodsCard name={item.name} duration={item.duration} price={item.price} image={item.image}/>
    )
  
  };

 
  // const viewCategories =()=>{
  //   navigation.navigate('Food',{ imageurl:item.imageurl, Title:item.title})
  // };
  



  return (
    <SafeAreaView style={{ paddingHorizontal:10,}}>
      <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
      <View style={{ backgroundColor:'#f2f2f2'}}>
        
      <Pressable onPress={toggleBottomNavigationView} style={{ flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Image source={require('../Assets/Images/icon2.png')} style={{ width:40, height:40, marginRight:10}}/>
          <View>
            <Text style={{ fontSize:14, fontFamily:'Poppins'}}>Deliver Now!</Text>
            <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={{ fontSize:16, fontFamily:'PoppinsB'}}>{myAddress || 'Current Location'}</Text>
              <SimpleLineIcons name="arrow-down" size={12} color="black" style={{marginLeft:10}}/>
            </View>
          </View>
        </View>

        <View>
            <Image source={require('../Assets/Images/image.jpg')} style={{ width:50, height:50, borderRadius:25}}/>
        </View>
      </Pressable>

      <View style={{ marginTop:20, position:'relative'}}>
        <TextInput
          placeholder='Search Food'
          style={{ padding:10, backgroundColor:'#fff', borderRadius:10, fontFamily:'Poppins'}}
          />
          <Feather name="search" size={20} color="black" style={{ position:'absolute', top:'30%', right:10}}/>
      </View>
      </View>

        <Offer/>
        <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20}}>
          <View style={{ backgroundColor:'#D9D9D9', height:1, width:'25%'}}></View>
          <Text style={{ marginHorizontal:10,fontSize:15, fontFamily:'PoppinsB'}}>What's on your Mind?</Text>
          <View style={{ backgroundColor:'#D9D9D9', height:1, width:'25%'}}></View>
        </View>
      
        {renderMenuRows(menuPress)}
           <View>
                <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20}}>
                    <View style={{ backgroundColor:'#D9D9D9', height:1, width:'25%'}}></View>
                    <Text style={{ marginHorizontal:10, fontSize:15, fontFamily:'PoppinsB'}}>Discover foods</Text>
                    <View style={{ backgroundColor:'#D9D9D9', height:1, width:'25%'}}></View>
              </View>
           </View>
        <View>     
         {
          products.map((item)=>{
            return(
            <FoodsCard key={item.id} name={item.name} rating={item.rating} duration={item.duration} price={item.price} image={item.image} onPress={()=>navigation.navigate('Food',{ productId:item.id, name:item.name, price:item.price, description:item.description, image: item.image, duration:item.duration, rating: item.rating })}/>
            )
          })
         }
        </View>
        </ScrollView>
        <BottomSheet
          visible={visible}
          onBackButtonPress={toggleBottomNavigationView}
          onBackdropPress={toggleBottomNavigationView}>
          <View style={{
              margin: 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              }}>
            <View><Text style={{ color:'#000', fontFamily:'PoppinsB', marginBottom:10}}>Your Current location is {myAddress || 'Current Location'}</Text></View>
            <View style={{backgroundColor: '#fff',
              width: '100%',
              height: '75%',
              justifyContent: 'center',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              }}>
         {location ? (
              <MapView
              initialRegion={{
                  latitude: location.latitude ,
                  longitude:location.longitude,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,

              }}

              mapType='mutedStandard'
              style={{ flex:1}}
              >
              <Marker
                  coordinate={{
                      latitude: location.latitude ,
                      longitude: location.longitude ,
                  }}
                  // image={urlFor(restraunt.imgUrl).width().url()}
                  // title={restraunt.title}

                  // description={restraunt.short_description}
                  identifier='origin'
                  pinColor='#cb202d'
              />


              </MapView>
               ) : (
                <Text>Loading map...</Text>
              )}

              </View>
            </View>
          </BottomSheet>
    </SafeAreaView>
  )
}

export default Home;