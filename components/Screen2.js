import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default Screen2 = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectDate, setSelectedDate] = useState("Select Date");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");

    setSelectedDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    hideDatePicker();
  };
  return (
    <View>
      <LinearGradient
        colors={["black", "#8020FF", "black"]}
        style={{ height: "100%" }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={{ margin: 13, marginTop: 90, backgroundColor: "#191717" }}>
          <View
            style={{
              flexDirection: "row",
              borderColor: "#2D2727",
              borderWidth: 1,
            }}
          >
            <Image
              style={{
                width: 19,
                height: 19,
                borderRadius: 50,
                marginTop: 12,
                marginLeft: 10,
              }}
              source={require("./img/search.png")}
            ></Image>
            <TextInput
              placeholder="Search for party by name,type or venue"
              style={{ color: "grey", padding: 9 }}
            >
              <Text>Search for party by name,type or venue</Text>
            </TextInput>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
          <TouchableOpacity
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: "#2D2727",
              justifyContent: "flex-start",
              alignItems: "left",
              flexDirection: "row",
            }}
            onPress={() => {
              showDatePicker();
            }}
          >
            <Image
              style={{
                width: 19,
                height: 19,
                borderRadius: 50,
                marginTop: 10,
                marginLeft: 15,
              }}
              source={require("./img/date.png")}
            />
            <Text style={{ color: "grey", padding: 10 }}>{selectDate}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#8000FF",
              justifyContent: "center",
              alignItems: "center",
              padding:8,
            }}
          >
            <Text style={{fontWeight:900,color:'white',fontSize:12}}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        {/* ----------------------- */}
        <View style={{margin:10}}>
        <Text style={{color:'white',fontWeight:900,fontSize:15}}>Events I'm invited to</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:3}}>
          <Text style={{color:'#D0D4CA', fontSize:11}}>Event where you were invited to attend</Text>
          <Text style={{color:'#8000FF',fontSize:11,}}>View all</Text>
        </View>
        </View>
      </LinearGradient>
    </View>
  );
};
