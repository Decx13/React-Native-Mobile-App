import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { useTailwind} from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Finder from './screens/Finder';
import ItemDetails from './screens/ItemDetails';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Finder" component={Finder} />
        <Stack.Screen name="ItemDetails" component={ItemDetails}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}


