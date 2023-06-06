import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FoodsCard from '../Components/FoodsCard';


const Categories = ({ route}) => {
  const {title, imageUrl}= route.params
  return (
    <SafeAreaView style={{ flex:1, padding:10}}>
      <Text  style={{fontFamily:'PoppinsB', fontSize:20}}>{title}</Text>
      <View>
        <View>
          
        </View>
      </View>
      <ScrollView>
        <View>
            <FoodsCard image={'https://res.cloudinary.com/dro4xvvnh/image/upload/v1684840382/image_1_vidrqm.jpg'} name={'Peperoni'} duration={'30 min'} price={'1200'}/>
            <FoodsCard image={'https://res.cloudinary.com/dro4xvvnh/image/upload/v1684840382/image_1_vidrqm.jpg'} name={'Chicken Periperi'} duration={'30 min'} price={'1200'}/>
            <FoodsCard image={'https://res.cloudinary.com/dro4xvvnh/image/upload/v1684840382/image_1_vidrqm.jpg'} name={'Beef'} duration={'30 min'} price={'1200'}/>
            <FoodsCard image={'https://res.cloudinary.com/dro4xvvnh/image/upload/v1684840382/image_1_vidrqm.jpg'} name={'Peperoni'} duration={'30 min'} price={'1200'}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Categories;