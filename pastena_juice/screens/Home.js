import React , { useState }from 'react';
import {View, Text ,TouchableOpacity, Image, ScrollView} from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Home({navigation}){ 
    return(  
    <View 
    style={{
        backgroundColor: "white",
        flex:1, 
        
      
        
    }}
    >
        <ScrollView>
        
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop:55,
            
        }}>
          
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="Les pastena" size={24} color="red" />
        <View style= {{flexDirection:"row"}}>
        <Ionicons name="search" size={24} color="black" />
        <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
        </View>

        <Text style={{ fontSize:15, color:"grey",  paddingTop:15, fontWeight:"500", paddingLeft:15}}>The best juice {" "}
             <Text style={{ color : "orange", fontWeight:"bold"}}>on the market</Text>
        </Text>

        <Text style={{paddingTop:15, fontWeight:"bold", paddingLeft:25}}>Flavours</Text>
        
        <View style= {{flexDirection:"row"}}>
            

        <TouchableOpacity
        
           style={{ 
            backgroundColor : "#eee",
            marginRight:10,
             padding:10,
             borderRadius: 10,
             marginTop:20,
             marginLeft:20,
             }}
        >
            <Text style={{ color: "orange" , alignItems:"center", }}>Available</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{ 
                backgroundColor : "#eee",
                marginRight:10,
                 padding:10,
                 borderRadius: 10,
                 marginTop:20 
                 }}
        >
            <Text style={{alignItems:"center"}}>Pastena</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={{ 
               backgroundColor : "#eee",
               marginRight:10,
                padding:10,
                borderRadius: 10,
                marginTop:20 
                }}
        >
     <Text style={{ alignItems:"center" }}>Baobab</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={{ 
               backgroundColor : "#eee",
               marginRight:10,
                padding:10,
                borderRadius: 10,
                marginTop:20 
                }}
        >
     <Text style={{ alignItems:"center" }}>tchouk</Text>
        </TouchableOpacity>

        </View>
         
         
         <View style= {{flexDirection:"row"}}>

        <TouchableOpacity style={{
          marginTop:30,
           alignItems:"center",
           backgroundColor: "#fff",
           height:250,
           width:150,
           elevation:2,
           borderRadius:30,
           borderStyle:"solid",
           borderWidth: 1,
           padding:15,
           marginRight:30,
           marginLeft:25,
           marginBottom:5
      }}>
          <Ionicons style={{alignSelf:"flex-end", marginBottom:5}}
          name="heart-circle" size={24} color="orange" />
        <Image
         style={{
            marginTop:1,
            width: 140,
            height: 120,
            borderRadius: 20,
            marginBottom: 25,
           
        }}
        source={require('./images/ananas.jpeg')} 
        />
        <Text style={{ 

            color: 'lightyellow',
        }}>
        Ananas</Text>
        <Text style={{ 
            color:"orange",
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 5</Text></Text>

        </TouchableOpacity>

        <TouchableOpacity style={{
          marginTop:30,
           alignItems:"center",
           backgroundColor: "#fff",
           height:250,
           width:150,
           elevation:2,
           borderRadius:30,
           borderStyle:"solid",
           borderWidth: 1,
           padding:15,
           marginRight:30,
           marginLeft:2,
           marginBottom:5
      }}>
          <Ionicons style={{alignSelf:"flex-end", marginBottom:5}}
          name="heart-circle" size={24} color="black" />
        <Image
         style={{
            marginTop:1,
            width: 140,
            height: 120,
            borderRadius: 20,
            marginBottom: 25,
           
        }}
        source={require('./images/baobab.jpeg')} 
        />
        <Text style={{ 
            
            color: 'lightgrey',
        }}>
        Baobab</Text>
        <Text style={{ 
            color:"grey",
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 5</Text></Text>

        </TouchableOpacity>
        </View>
        <View style= {{flexDirection:"row"}}>
        <TouchableOpacity style={{
          marginTop:5,
           alignItems:"center",
           backgroundColor: "#fff",
           height:250,
           width:150,
           elevation:2,
           borderRadius:30,
           borderStyle:"solid",
           borderWidth: 1,
           padding:15,
           marginRight:30,
           marginLeft:25,
           marginBottom:5
      }}>
          <Ionicons style={{alignSelf:"flex-end", marginBottom:5}}
          name="heart-circle" size={24} color="black" />
        <Image
         style={{
            marginTop:-8,
            width: 140,
            height: 160,
            borderRadius: 20,
            
            
           
        }}
        source={require('./images/tchouk.jpeg')} 
        />
        <Text style={{ 

            color: 'lightgrey',
        }}>
         Schwinn Bike</Text>
        <Text style={{ 
            color:"orange",
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 5</Text></Text>

        </TouchableOpacity>

        <TouchableOpacity style={{
          marginTop:5,
           alignItems:"center",
           backgroundColor: "#fff",
           height:250,
           width:150,
           elevation:2,
           borderRadius:30,
           borderStyle:"solid",
           borderWidth: 1,
           padding:15,
           marginRight:30,
           marginLeft:2,
           marginBottom:5
      }}>
          <Ionicons style={{alignSelf:"flex-end", marginBottom:5}}
          name="heart-circle" size={24} color="black" />
        <Image
         style={{
            marginTop:1,
            width: 140,
            height: 120,
            borderRadius: 20,
            marginBottom: 25,
           
        }}
        source={require('./images/pastena')} 
        />
        <Text style={{ 
            
            color: 'lightred',
        }}>
        Narco Bike</Text>
        <Text style={{ 
            color:"orange",
            fontWeight:"bold"
        }}
        >$<Text style={{
            color:"black",
            fontWeight: "bold"
        }}> 5</Text></Text>

        </TouchableOpacity>
        </View>
        
        </ScrollView>
        
        
        <View style={{
            flexDirection: "row",
            backgroundColor: "#eee",
            height: 50,
            width: "100%",
            justifyContent:"space-between"
            
        }}
        
        
        >
            <Entypo style ={{ 
                paddingLeft:50,
                paddingTop:15, 

            }}
            name="home" size={26} color="blue" />


              
              <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart list")
            }}
            activeOpacity={0.8}>
              
              <Feather
              style ={{ 
                paddingRight:50,
                paddingTop:15,
                
                
            }}
        
             name="shopping-bag" size={24} color="blue" /></TouchableOpacity>
             <View
        style={{
            justifyContent:"center",
            alignItems: "center",
            position:"absolute",
            paddingLeft:385
            
            
        }}
        >
        <Ionicons
                  style={{
                    
                    position:"absolute",
                    
                }}
        
        name="md-mic-circle-sharp" size={50} color="blue" />
        </View>

            
        </View>
        

        </View>
        

       
    )

    
}







