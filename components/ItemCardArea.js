import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ItemCardArea = ({imageSrc,title,location}) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px]">
        <Image
            source={{uri: imageSrc}}
            className="w-full h-40 rounded-md object-cover"
        />
        <Text className="text-green-400 text-[18px] font-bold">
            {title?.length > 14 ? `${title.slice(0,14)}..` : title}
        </Text>
        <View>
        <Text className="text-green-400 text-[18px] font-bold">
            {location?.length > 14 ? `${location.slice(0,14)}..` : location}
        </Text>

        </View>
    </TouchableOpacity>
   
  )
}

export default ItemCardArea