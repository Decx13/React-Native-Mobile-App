
import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
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
   <SafeAreaView className="bg-white flex-1 top-10">
    {/* {first Section} */}
      <View className="flex-row px-6  mt-8 items-center space-x-2  ">
        <View className=" w-16 h-16 bg-black rounded-full items-center justify-center" >
            <Text className="text-green-400 text-3xl font-semibold">Go</Text>
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
       bg-orange-300 rounded-full absolute"></View>

       <View className="flex-1 relative items-center justify-center">
         <Image source= {startscreen} className="w-30 h-30 object-cover"/>

       </View>

   </SafeAreaView>
  )
};

export default HomeScreen