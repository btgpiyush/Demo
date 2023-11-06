import { StatusBar } from "react-native";
import Screen1 from "./components/Screen1";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from "./components/Screen2";
// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
import Screen3 from "./components/Screen3";



import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
   
        <Stack.Screen
          name="Home"
          
          options={{
            headerStyle: {
              backgroundColor: "black",
            },
          }}
          component={Screen1}
        />
        
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
