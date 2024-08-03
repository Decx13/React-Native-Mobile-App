
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { startscreen } from '../assets';

const HomeScreen = () => {

    const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown : false,

      })
    }, [] )

  return (
   <SafeAreaView className="bg-white flex-1  relative">
    {/* {first Section} */}
      <View className="flex-row px-6  mt-8 items-center space-x-2  ">
        <View className=" w-16 h-16 bg-black rounded-full items-center justify-center" >
            <Text className="text-green-400 text-3xl font-semibold">You</Text>
        </View>
            <Text className="text-black text-3xl font-semibold">Travel</Text>
      </View> 

      {/* second section */}
      <View className="px-6 mt-8 space-y-3">

        <Text className="text-black text-[42px]">Enjoy your trip with</Text>
        <Text className="text-green-400 text-[38px] font-bold">Good Moments</Text>
        <Text className="text-base text-gray-950">Find the best ever places as your wish and travel through out the world! make your trip awesome is our vision.So lets find your destination here.</Text>

      </View>

      {/* 3rd section / image ection */}
      <View className="w-[400px] h-[400px] bottom-36 -right-36
       bg-blue-500 rounded-full absolute">
      </View>

      <View className="w-[400px] h-[400px] -bottom-28 -left-40
       bg-orange-300 rounded-full absolute">
       </View>

      <View className="flex-1 relative items-center justify-center">
           <Animatable.Image
            animation="fadeIn"
            easing="ease-in-out"
            source= {startscreen}
            className="w-full h-full object-cover top-6"/>
            
        <TouchableOpacity onPress={() => navigation.navigate("Finder")}>
          <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"}
           className=" absoluteitems-center justify-center bottom-20 w-24 h-12 rounded-3xl border-l-2 border-r-2 border-t-4 border-blue-500">
                <View className="items-center justify-center w-24 h-12  bg-green-400 rounded-3xl">

                  <Text className="text-white font-bold text-[20px]">Start</Text>
                </View>
          </Animatable.View>
        </TouchableOpacity>

      </View>

   </SafeAreaView>
  )
};

export default HomeScreen