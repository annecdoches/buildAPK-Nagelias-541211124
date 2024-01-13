import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack';

const Stack = createStackNavigator();


import Login from './components/Login'
import Register from './components/Register'
import Porto from './components/Porto'

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name='porto' component={Porto} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='login' component={Login} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name='register' component={Register} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;