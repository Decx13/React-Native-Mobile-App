import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { hotel, notfound, places, restaurant, user } from '../assets';
import MenuBar from '../components/MenuBar';
import ItemCardArea from '../components/ItemCardArea';
import { ActivityIndicator } from 'react-native';
import { getPlacesData } from '../api';




const Finder = () => {

  const navigation = useNavigation();


  const [type, setType] = useState("attractions");
  const [isLoading,setIsLoading] = useState(false);
  const [mainData,setMainData]=useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);
   
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown : false,

    });
  }, [] );

  useEffect (() => {
      setIsLoading(true);
      getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then(data => {
        setMainData(data);
        setInterval(() => {
          setIsLoading(false);
        }, 2000);
      });
  },[bl_lat, bl_lng, tr_lat, tr_lng, type]);

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

    <GooglePlacesAutocomplete
    GooglePlacesDetailsQuery={{ fields : "geometry" }}
      placeholder='Search'
      fetchDetails={true}
      
      onPress={(_data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
      }}
      query={{
        key: 'AIzaSyCq93P5RT1VWezSjLLM-hcNkY2o4XxZ7Hc',
        language: 'en',
      }}
    />
    </View>


      {/* menu bar */}
      {isLoading ? (
       <View className="flex-1 items-center justify-center ">
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
      
      ):(
     
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8  ">

          <MenuBar
           key={"attractions"}
           title="Attractions"
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
           
          <MenuBar
          key={"hotels"}
          title={"Hotels"}
          imageSrc={hotel}
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

           <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCardArea
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
            ) : (
              <>
                <View className="w-full h-[400px] items-center space-y-8 justify-center">
                  <Image
                    source={notfound}
                    className=" w-32 h-32 object-cover"
                  />
                  <Text className="text-2xl text-[#428288] font-semibold">
                    Opps...No Data Found
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
   
    )}
    </SafeAreaView>
  );
};

export default Finder