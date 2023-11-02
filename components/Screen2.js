import { LinearGradient } from "expo-linear-gradient";
import { Text, TextInput, View } from "react-native";

export default Screen2 = () => {
  return (
    <View>
      <LinearGradient
        colors={["black", "#8020FF", "black"]}
        style={{ height: "100%" }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
       <View>
        <TextInput placeholder="Search for part by name,type of venue"></TextInput>
       </View>
      </LinearGradient>
    </View>
  );
};
