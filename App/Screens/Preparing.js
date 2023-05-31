import { View, Text, Image } from 'react-native';
import React, {useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable'


const Preparing = () => {
    useEffect(() => {
        setTimeout(() => {
        }, 4000);
    }, []);

  return (
    <SafeAreaView style={{ justifyContent:'center', alignItems:'center', flex:1, backgroundColor:'#fff'}}>
        <Animatable.Image source={require('../Assets/Images/PreparingOrderImage.gif')} style={{ height:380, width:380}}
        animation="slideInUp"
        iterationCount={1}
        />
        <Progress.Bar color='#cb202d' indeterminate={true} progress={0.3} width={200} style={{marginTop:20}}/>
      <Text style={{ marginTop:20}}>Waiting for Resturant to prepare Order</Text>
    </SafeAreaView>
  )
}

export default Preparing;




// import MapView, { Marker } from 'react-native-maps'

{/* <MapView
initialRegion={{
    latitude: restraunt.lat,
    longitude: restraunt.long,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,

}}
style={styles.font_bold}
className="flex-1 -mt-10 z-0"
mapType='mutedStandard'
>
<Marker
    coordinate={{
        latitude: restraunt.lat,
        longitude: restraunt.long,
    }}
    // image={urlFor(restraunt.imgUrl).width().url()}
    title={restraunt.title}

    description={restraunt.short_description}
    identifier='origin'
    pinColor='#cb202d'
/>


</MapView> */}