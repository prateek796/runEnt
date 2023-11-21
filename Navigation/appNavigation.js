import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import Signup from '../screens/Signup';
import HamBurger from '../components/HamBurger';
import Carousel from '../components/Carousel';
import BookingScreen from '../screens/BookingScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="Signup" component={Signup} />
        <Stack.Screen options={{headerShown:false}} name="Ham" component={HamBurger} />
        <Stack.Screen options={{headerShown:false}} name="car" component={Carousel} />
        <Stack.Screen options={{headerShown:false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="Booking" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}