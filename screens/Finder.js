import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { hotel, places, restaurant, user } from '../assets';
import MenuBar from '../components/MenuBar';


const Finder = () => {

  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");
  
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
    <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-xl shadow-black mt-4">

    <GooglePlacesAutocomplete className="bg-slate-300"
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
        <View className="flex-row items-center justify-between px-8 mt-8  ">
          <MenuBar
           key={"hotel"}
           title="Hotels"
           imageSrc= {hotel}
           type={type}
           setType={setType}
          />

<MenuBar
           key={"places"}
           title="Places"
           imageSrc= {places}
           type={type}
           setType={setType}
          />

<MenuBar
           key={"restaurants"}
           title="Restaurants"
           imageSrc= {restaurant}
           type={type}
           setType={setType}
          />
           
          
        </View>

        {/* Middle section */}
        <View>
          <View className="flex-row items-center justify-between px-4 mt-8">
            <Text className="text-green-400 text-[28px] font-semibold">Trending</Text>
            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
              <Text className="text-green-400 text-[20px] font-semibold">Explore</Text>
              <FontAwesome name="long-arrow-right" size={24} color="green" />
            </TouchableOpacity>
          </View>

          {/* item area */}

          <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap bg-slate-400">
           
          
          </View>

        </View>
      </ScrollView>
   </SafeAreaView>
  )
}

export default Finder