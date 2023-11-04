import React from 'react'
import { Text,View,Image,StyleSheet, Button, TouchableOpacity, ScrollView } from "react-native";

// import { StatusBar } from 'expo-status-bar';
// <StatusBar style="auto" />
export default Page1 = (props) => {
  return (
    <ScrollView style={{backgroundColor:'black'}}>
    <View >
      <Text>hello</Text>
        <View style={styles.container}>
        <View>
        <Image style={{width:100,height:100, borderRadius:50}}source={require('./img/pk.jpg')} />
        </View>
      <View style={{marginLeft:20}}>
        <Text style={{fontSize:22,fontWeight:900,color:'white'}}>Daniel Ancuta</Text>
        <Text style={{fontSize:14,color:'white'}}>Basic level</Text>
        <Text style={{fontSize:11,color:'white'}}>0 points</Text>
      </View>
      </View>
      {/* --------- */}
      <View style={{flexDirection:'row',marginTop:20}}>
        
     <TouchableOpacity  onPress={()=>props.navigation.navigate("Screen2")}style={{backgroundColor:'#78C1F3', padding:6,marginLeft:6,borderRadius:3}}>
        <Text style={{fontSize:12,color:'white',fontWeight:900}}>INVITE FRIENDS</Text>
     </TouchableOpacity>
     <TouchableOpacity  style={{backgroundColor:'#FFD93D',flexDirection:'row', padding:6,marginLeft:10, borderRadius:3}}>
        <Image style={{width:20,height:20}} source={require('./img/diamond.png')}></Image>
        <Text style={{fontSize:12,fontWeight:900}}> UPGRADE TO VIP</Text>
     </TouchableOpacity>
      </View>
      <View style={{marginLeft:5,marginTop:5}}>
      <Text style={{color:'white',fontSize:12}}>5 minutes left</Text>
      <Text style={{color:'white' ,fontSize:17,fontWeight:900,marginTop:20}}>Account</Text>
      <Text style={{color:'white',fontSize:12}}>Manage your account</Text>
      </View>
      {/* ----------container----- */}
      <View style={styles.box}>
      <View style={{flexDirection:'row',marginTop:10}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/profile2.png')} />
      <Text style={styles.text}>Personal Info</Text>
      </View>
       <View style={{flexDirection:'row',marginTop:17}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/security.png')} />
      <Text style={styles.text}>Account Security</Text>
      </View>
       <View style={{flexDirection:'row',marginTop:17}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/wallet.png')} />
      <Text style={styles.text}>Wallet</Text>
      </View>
       <View style={{flexDirection:'row',marginTop:17}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/booking.png')} />
      <Text style={styles.text}>Bookings</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:17}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/list.png')} />
      <Text style={styles.text}>Guestlist</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:17}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/fav.png')} />
      <Text style={styles.text}>Favorites</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:17}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/review.png')} />
      <Text style={styles.text}>Reviews</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:17}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/reward.png')} />
      <Text style={styles.text}>Rewards</Text>
      </View>
      </View>
      {/* ---------------- */}
      <Text style={{color:'white' ,fontSize:17,fontWeight:900,marginLeft:5,marginTop:32}}>Support Center</Text>
       <Text style={{color:'white',fontSize:11,marginLeft:5}}>Need help? Get in touch with us</Text>
       <View style={styles.box}>
      <View style={{flexDirection:'row',marginTop:17}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/service.png')} />
      <Text style={styles.text}>support Center</Text>
      </View>
        <View style={{flexDirection:'row',marginTop:17}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/email.png')} />
      <Text style={styles.text}>Write us</Text>
      </View>
        <View style={{flexDirection:'row',marginTop:17}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/call.png')} />
      <Text style={styles.text}>Call Us</Text>
      </View>
       </View>
       {/* ------------ */}
       <Text style={{color:'white' ,fontSize:17,fontWeight:900,marginLeft:5,marginTop:32}}>App Setting</Text>
       <Text style={{color:'white',fontSize:11,marginLeft:5}}>Manage global app settings</Text>
      <View style={styles.box}>
          <View style={{flexDirection:'row',marginTop:17}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/about.png')} />
      <Text style={styles.text}>About Thump</Text>
      </View>
        <View style={{flexDirection:'row',marginTop:27}}>
      <Image style={{width:20,height:20, marginRight:10,marginLeft:5}}source={require('./img/setting.png')} />
      <Text style={styles.text}>Settings</Text>
      </View>
      </View>
    </View>
    </ScrollView>
  );
};
const styles=StyleSheet.create({
    container:{
        // backgroundColor:'red',
        flexDirection:'row',
       marginTop:30,
    },
    text:{
   color:'white',
    },
    box:{
    padding:10,
    marginTop:10,
    backgroundColor:'#191717',
    margin:10,
    borderRadius:10,
    },
})
