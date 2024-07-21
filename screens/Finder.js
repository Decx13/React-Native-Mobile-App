import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { user } from '../assets';
import MenuBar from '../components/MenuBar';

const Finder = () => {

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown : false,

    })
  }, [] )

  return (
   <SafeAreaView className="flex-1 bg-white relative top-10">
    <View className="flex-row items-center justify-between px-8">
      <View>
        <Text className="text-[40px] text-green-400 font-bold">Explore</Text>
        <Text className="text-black  text-[36px]">The best places</Text>
      </View>

      <View className=" w-12 h-12 rounded-full bg-slate-600 items-center justify-center shadow-lg">
        <Image
        source={user}
        className="w-full h-full object-cover"
        />
      </View>
    </View>

    {/* api key adding */}
    <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">

    <GooglePlacesAutocomplete
    GooglePlacesDetailsQuery={{fields : "geometry"}}
      placeholder='Search'
      fetchDetails={true}
      
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details?.geometry?.viewport);
      }}
      query={{
        key: 'AIzaSyCq93P5RT1VWezSjLLM-hcNkY2o4XxZ7Hc',
        language: 'en',
      }}
    />

    </View>
      {/* menu bar */}
      <ScrollView>
        <View className="flex-row items-center justify-center px-8 mt-8">
          <MenuBar>
            
          </MenuBar>
        </View>
      </ScrollView>
   </SafeAreaView>
  )
}

export default Finder