import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { useTailwind} from 'nativewind';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Finder from './screens/Finder';
import ItemScreen from './screens/itemScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Finder" component={Finder} />
        <Stack.Screen name="ItemScreen" component={ItemScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


