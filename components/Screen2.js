import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
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
              padding: 8,
            }}
          >
            <Text style={{ fontWeight: 900, color: "white", fontSize: 12 }}>
              SEARCH
            </Text>
          </TouchableOpacity>
        </View>
        {/* ----------------------- */}
        <View style={{ margin: 10 }}>
          <Text style={{ color: "white", fontWeight: 900, fontSize: 15 }}>
            Events I'm invited to
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 3,
            }}
          >
            <Text style={{ color: "#D0D4CA", fontSize: 11 }}>
              Event where you were invited to attend
            </Text>
            <Text style={{ color: "#8000FF", fontSize: 11 }}>View all</Text>
          </View>
        </View>

        {/* background-image--1-strt------ */}
        <ScrollView horizontal={true}>
        <View style={{flexDirection:'row'}}>
        <View
          style={{
            justifyContent: "center",
            margin:20,
           
            // width:400,
            width:330,
            height:200,
           
            alignItems: "center",
            borderRadius:10,
          }}
        >
          <ImageBackground
            style={{ width: "100%", height: 200}}
            imageStyle={{ borderRadius:10}}
            source={require("./img/background.jpg")}
          >
            {/* ---icon---- */}
            <View style={{ alignItems: "flex-end"}}>
              <View style={{backgroundColor:'purple',padding:7,borderRadius:20, marginTop:20,marginRight:20}}>
              <Image style={{width:25,height:25}}source={require("./img/fav.png")}></Image>
              </View>
            </View>
            {/* ------/icon---- */}
            <View
              style={{
                flexDirection: "row",
                height: "65%",
                // backgroundColor:'yellow',
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding:10,
              }}
            >
              <View>
                <Text style={{ color: "#fff" }}>Event Name</Text>
                <Text style={{ color: "#fff", fontSize: 10 }}>
                  March 1,2023-6:00pm
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("./img/pk.jpg")}
              ></Image>
               <Image
                style={{ width: 40, height: 40, borderRadius: 20,marginLeft:10,marginRight:10 }}
                source={require("./img/pk.jpg")}
              ></Image>
                <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("./img/pk.jpg")}
              ></Image></View>
            </View>
          </ImageBackground>
        </View>
        {/* ---------/background-1------------ */}
        <View
          style={{
            justifyContent: "center",
            margin: 20,
            width:330,
            height:200,
            backgroundColor: "blue",
            alignItems: "center",
            borderRadius:10,
          }}
        >
          <ImageBackground
            style={{ width: "100%", height: 200}}
            imageStyle={{ borderRadius:10}}
            source={require("./img/background.jpg")}
          >
            {/* ---icon---- */}
            <View style={{ alignItems: "flex-end"}}>
              <View style={{backgroundColor:'purple',padding:7,borderRadius:20, marginTop:20,marginRight:20}}>
              <Image style={{width:25,height:25}}source={require("./img/fav.png")}></Image>
              </View>
            </View>
            {/* ------/icon---- */}
            <View
              style={{
                flexDirection: "row",
                height: "65%",
                // backgroundColor:'yellow',
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding:10,
              }}
            >
              <View>
                <Text style={{ color: "#fff" }}>Event Name</Text>
                <Text style={{ color: "#fff", fontSize: 10 }}>
                  March 1,2023-6:00pm
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("./img/pk.jpg")}
              ></Image>
               <Image
                style={{ width: 40, height: 40, borderRadius: 20,marginLeft:10,marginRight:10 }}
                source={require("./img/pk.jpg")}
              ></Image>
                <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("./img/pk.jpg")}
              ></Image></View>
            </View>
          </ImageBackground>
        </View>
        {/* --------/-background2------ */}
        <View
          style={{
            justifyContent: "center",
            margin: 20,
            width:330,
            height:200,
            backgroundColor: "red",
            alignItems: "center",
            borderRadius:10,
          }}
        >
          <ImageBackground
            style={{ width: "100%", height: 200}}
            imageStyle={{ borderRadius:10}}
            source={require("./img/background.jpg")}
          >
            {/* ---icon---- */}
            <View style={{ alignItems: "flex-end"}}>
              <View style={{backgroundColor:'purple',padding:7,borderRadius:20, marginTop:20,marginRight:20}}>
              <Image style={{width:25,height:25}}source={require("./img/fav.png")}></Image>
              </View>
            </View>
            {/* ------/icon---- */}
            <View
              style={{
                flexDirection: "row",
                height: "65%",
                // backgroundColor:'yellow',
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding:10,
              }}
            >
              <View>
                <Text style={{ color: "#fff" }}>Event Name</Text>
                <Text style={{ color: "#fff", fontSize: 10 }}>
                  March 1,2023-6:00pm
                </Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("./img/pk.jpg")}
              ></Image>
               <Image
                style={{ width: 40, height: 40, borderRadius: 20,marginLeft:10,marginRight:10 }}
                source={require("./img/pk.jpg")}
              ></Image>
                <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={require("./img/pk.jpg")}
              ></Image></View>
            </View>
          </ImageBackground>

        </View>
        </View>
        </ScrollView>
        {/* -----/--background3------ */}
    
      </LinearGradient>
    </View>
  );
};
