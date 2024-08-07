import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ItemCardArea = ({imageSrc,title,location,data}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
    onPress = {() => navigation.navigate("ItemDetails", { param: data})}
    className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px]">
      
        <Image
            source={{uri: imageSrc}}
            className="w-full h-40 rounded-md object-cover"
        />
        {title ? (
          <>
          <Text className="text-green-400 text-[18px] font-bold">
            {title?.length > 14 ? `${title.slice(0,14)}..` : title}
        </Text>


        <View className="flex-row items-center space-x-1">
        <FontAwesome name="map-marker" size={24} color="gray" />
        <Text className="text-green-400 text-[14px] font-bold">
            {location?.length > 18 ? `${location.slice(0,14)}..` : location}
        </Text>

        </View>
          </>
        ) : (
          <></>
        )}
    </TouchableOpacity>
   
  )
}

export default ItemCardArea