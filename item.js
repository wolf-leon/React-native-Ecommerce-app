import * as React from 'react';
import { Button, View, Text,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-web';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1,alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' ,}}>
      
      
      <Image style={{
        width:'340px',
       height:'340px',
      alignSelf:'center',
      }} source={require('./assets/watchbg.png')} 
      />

      <View style={{justifyContent:'space-between',alignItems: 'center',}}>
     
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'35px',justifyContent:'center',paddingBottom:'30px',fontFamily:'sans-serif'}}> Smart on the inside, Fashionable on the outside</Text>
      <Text style={{color:'#808080',textAlign:'center',fontSize:'25px',justifyContent:'center',marginTop:'0px',paddingBottom:'30px',}}> Never Settle</Text>

      <TouchableOpacity
      style={{padding:'20px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'300px',}}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Let's start</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}


function DesScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' ,}}>
      
      <View>
      <Image style={{
        width:'340px',
       height:'340px',
      alignSelf:'center',
      marginTop:10,
      }} source={require('./assets/shoebg.png')} 
      />
      </View>

      <View>


      </View>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',justifyContent:'center',paddingBottom:'20px',fontFamily:'sans-serif',marginTop:'50px',marginLeft:'20px',}}> Nike Enzo X2</Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Nike Enzo X2 is a Nike running shoe designed by Christian Tresser. It was inspired by Japan's high-speed Bullet Trains and features a mix of leather, foam, and full-length visible Air.</Text>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'45px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'35px',}}> Rs.12,800</Text>
      <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'200px',marginTop:'35px',justifyContent:'center',}}
        onPress={() => navigation.navigate('ck')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Shop</Text>
      </TouchableOpacity>
    </View>
  );
}

function Des1Screen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' ,}}>
      
      <View>
      <Image style={{
        width:'340px',
       height:'340px',
      alignSelf:'center',
      marginTop:10,
      }} source={require('./assets/sbg.png')} 
      />
      </View>

      <View>


      </View>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',justifyContent:'center',paddingBottom:'20px',fontFamily:'sans-serif',marginTop:'50px',marginLeft:'20px',}}> JBL PartyBox</Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> The JBL PartyBox 300 is a powerful party speaker with JBL sound quality and vivid light effects. Thanks to its rechargeable battery and 12V DC input you can bring the party everywhere. Stream your playlist via Bluetooth or from a USB stick.</Text>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'45px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'35px',}}> Rs.35,200</Text>
      <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'200px',marginTop:'35px',justifyContent:'center',}}
        onPress={() => navigation.navigate('ck1')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Shop</Text>
      </TouchableOpacity>
    </View>
  );
}

function Des2Screen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' ,}}>
      
      <View>
      <Image style={{
        width:'340px',
       height:'340px',
      alignSelf:'center',
      marginTop:10,
      }} source={require('./assets/smbg.png')} 
      />
      </View>

      <View>


      </View>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',justifyContent:'center',paddingBottom:'20px',fontFamily:'sans-serif',marginTop:'50px',marginLeft:'20px',}}>Apple Watch</Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}>The Apple Watch is designed to pair, or connect, with another Apple iOS device like the iPhone to push Apple Watch-specific content to the device smartwatch in order to access Apple Watch’s full set of features. </Text>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'45px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'35px',}}> Rs.42,900</Text>
      <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'200px',marginTop:'35px',justifyContent:'center',}}
        onPress={() => navigation.navigate('ck2')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Shop</Text>
      </TouchableOpacity>
    </View>
  );
}

function CheckoutScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' ,}}>
      
      <View style={{  
        flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fffffff',
     height: 270,
     marginTop:40
      }}>
      <View>
      <Image style={{
        width:'200px',
       height:'200px',
      alignSelf:'center',
      }} source={require('./assets/shoebg.png')} 
      />
        </View>

        <View style={{justifyContent:'center',alignItems:'center',}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'25px',justifyContent:'center',fontFamily:'sans-serif',}}> Nike Enzo X2 </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Running shoes to give your feet comfort  </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'5px',fontStyle:'italic',}}>  made with soft leather soles. </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'20px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Rs.12,800</Text>
        
        
      </View>
      </View>


      <View style={{justifyContent: 'center',
     alignItems: 'center',}}>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',justifyContent:'center',paddingBottom:'10px',fontFamily:'sans-serif',marginTop:'20px',}}>Billing</Text>
      <Text style={{color:'#808080',textAlign:'center',fontSize:'20px',justifyContent:'center',marginTop:'10px',paddingBottom:'10px',}}>Additonal 15% off on Online Payment! </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> SubTotal - 12800 </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Discount -  1920 </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Shipping -  100 </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Total    - 10980 </Text>

      <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'300px',marginTop:'50px',justifyContent:'center',}}
        onPress={() => navigation.navigate('final')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Checkout</Text>
      </TouchableOpacity>

      </View>

      
    </View>
  );
}

function CheckoutsScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' ,}}>
      
      <View style={{  
        flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fffffff',
     height: 270,
     marginTop:40
      }}>
      <View>
      <Image style={{
        width:'200px',
       height:'200px',
      alignSelf:'center',
      }} source={require('./assets/sbg.png')} 
      />
        </View>

        <View style={{justifyContent:'center',alignItems:'center',}}>
       
        <View style={{justifyContent:'center',alignItems:'center',}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'25px',justifyContent:'center',fontFamily:'sans-serif',}}> JBL PartyBox  </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Kick out the hottest jams in town </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'5px',fontStyle:'italic',}}>  with JBL PartyBox </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'20px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Rs.35,200</Text>
        
        
      </View>
      </View>
    </View>



      <View style={{justifyContent: 'center',
     alignItems: 'center',}}>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',justifyContent:'center',paddingBottom:'10px',fontFamily:'sans-serif',marginTop:'20px',}}>Billing</Text>
      <Text style={{color:'#808080',textAlign:'center',fontSize:'20px',justifyContent:'center',marginTop:'10px',paddingBottom:'10px',}}>Additonal 15% off on Online Payment! </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> SubTotal - 35200 </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Discount -  5280 </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Shipping -  100 </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Total    - 30020 </Text>

      <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'300px',marginTop:'50px',justifyContent:'center',}}
        onPress={() => navigation.navigate('final1')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Checkout</Text>
      </TouchableOpacity>

      </View>

      
    </View>
  );
}

function CheckoutfScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' ,}}>
      
      <View style={{  
        flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fffffff',
     height: 270,
     marginTop:40
      }}>
      <View>
      <Image style={{
        width:'200px',
       height:'200px',
      alignSelf:'center',
      }} source={require('./assets/smbg.png')} 
      />
        </View>

        <View style={{justifyContent:'center',alignItems:'center',}}>
       
        <View style={{justifyContent:'center',alignItems:'center',}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'25px',justifyContent:'center',fontFamily:'sans-serif',}}> Apple Watch </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Watch which makes your hand  </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'5px',fontStyle:'italic',}}>  look sleek and fashionable. </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'20px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Rs.42,900</Text>
        
        
      </View>
      </View>
    </View>



      <View style={{justifyContent: 'center',
     alignItems: 'center',}}>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',justifyContent:'center',paddingBottom:'10px',fontFamily:'sans-serif',marginTop:'20px',}}>Billing</Text>
      <Text style={{color:'#808080',textAlign:'center',fontSize:'20px',justifyContent:'center',marginTop:'10px',paddingBottom:'10px',}}>Additonal 15% off on Online Payment! </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> SubTotal - 42900 </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Discount -  6435 </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Shipping -  100 </Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Total    - 36565 </Text>

      <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'300px',marginTop:'50px',justifyContent:'center',}}
        onPress={() => navigation.navigate('final2')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Checkout</Text>
      </TouchableOpacity>

      </View>

      
    </View>
  );
}






function FinalScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' ,}}>
      
      <View style={{  
        flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fffffff',
     height: 270,
     marginTop:40
      }}>
      <View>
      <Image style={{
        width:'200px',
       height:'200px',
      alignSelf:'center',
      }} source={require('./assets/shoebg.png')} 
      />
        </View>

        <View style={{justifyContent:'center',alignItems:'center',}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'25px',justifyContent:'center',fontFamily:'sans-serif',}}> Nike Enzo X2 </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Running shoes to give your feet comfort  </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'5px',fontStyle:'italic',}}>  made with soft leather soles. </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'20px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Rs.10,980</Text>
        
        
      </View>
      </View>


      <View style={{justifyContent: 'center',
     alignItems: 'center',}}>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',justifyContent:'center',paddingBottom:'10px',fontFamily:'sans-serif',marginTop:'20px',}}>Order Shipped</Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Thanks for shopping with us! Order wil be delivered within 3-4 days.</Text>
      <Image style={{
        width:'150px',
       height:'150px',
      alignSelf:'center',
      }} source={require('./assets/tick1.png')} 
      />
      <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'300px',marginTop:'50px',justifyContent:'center',}}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Home</Text>
      </TouchableOpacity>

      </View>

      
    </View>
  );
}

function FinaldScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' ,}}>
      
      <View style={{  
        flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fffffff',
     height: 270,
     marginTop:40
      }}>
      <View>
      <Image style={{
        width:'200px',
       height:'200px',
      alignSelf:'center',
      }} source={require('./assets/sbg.png')} 
      />
        </View>

        <View style={{justifyContent:'center',alignItems:'center',}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'25px',justifyContent:'center',fontFamily:'sans-serif',}}> JBL PartyBox  </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Kick out the hottest jams in town </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'5px',fontStyle:'italic',}}>  with JBL PartyBox </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'20px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Rs.30,020</Text>
        
        
      </View>
      </View>


      <View style={{justifyContent: 'center',
     alignItems: 'center',}}>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',justifyContent:'center',paddingBottom:'10px',fontFamily:'sans-serif',marginTop:'20px',}}>Order Shipped</Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Thanks for shopping with us! Order wil be delivered within 3-4 days.</Text>
      <Image style={{
        width:'150px',
       height:'150px',
      alignSelf:'center',
      }} source={require('./assets/tick1.png')} 
      />
      <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'300px',marginTop:'50px',justifyContent:'center',}}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Home</Text>
      </TouchableOpacity>

      </View>

      
    </View>
  );
}

function FinalfScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' ,}}>
      
      <View style={{  
        flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fffffff',
     height: 270,
     marginTop:40
      }}>
      <View>
      <Image style={{
        width:'200px',
       height:'200px',
      alignSelf:'center',
      }} source={require('./assets/smbg.png')} 
      />
        </View>

        <View style={{justifyContent:'center',alignItems:'center',}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'25px',justifyContent:'center',fontFamily:'sans-serif',}}> Apple Watch </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Watch which makes your hand  </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'5px',fontStyle:'italic',}}>  look sleek and fashionable. </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'20px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Rs.36565</Text>
        
        
      </View>
      </View>


      <View style={{justifyContent: 'center',
     alignItems: 'center',}}>
      <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'40px',justifyContent:'center',paddingBottom:'10px',fontFamily:'sans-serif',marginTop:'20px',}}>Order Shipped</Text>
      <Text style={{textAlign:'center',fontSize:'18px',justifyContent:'center',marginTop:'20px',paddingBottom:'10px',}}> Thanks for shopping with us! Order wil be delivered within 3-4 days.</Text>
      <Image style={{
        width:'150px',
       height:'150px',
      alignSelf:'center',
      }} source={require('./assets/tick1.png')} 
      />
      <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'300px',marginTop:'50px',justifyContent:'center',}}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Home</Text>
      </TouchableOpacity>

      </View>

      
    </View>
  );
}



function DetailsScreen({ navigation }) {
  return (
    <View >
      <Text style={{textAlign:'left',fontWeight:'bold',fontSize:'40px',justifyContent:'center',paddingBottom:'20px',fontFamily:'sans-serif',marginTop:'40px',marginLeft:'20px',}}> Hi,Leon</Text>
      <Text style={{color:'#808080',textAlign:'left',fontSize:'15px',justifyContent:'center',marginTop:'0px',paddingBottom:'30px',marginLeft:'20px',}}> Trending Products this Week</Text>
        

        {/* card 1 */}
      <View style={{  
        flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#D3D3D3',
     height: 270
      }}>
      <View>
      <Image style={{
        width:'200px',
       height:'200px',
      alignSelf:'center',
      }} source={require('./assets/shoebg.png')} 
      />
        </View>

        <View style={{justifyContent:'center',alignItems:'center',}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'25px',justifyContent:'center',fontFamily:'sans-serif',}}> Nike Enzo X2 </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Running shoes to give your feet comfort  </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'5px',fontStyle:'italic',}}>  made with soft leather soles. </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'20px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Rs.12,800</Text>
        <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'150px',marginTop:'10px',justifyContent:'center',}}
        onPress={() => navigation.navigate('des')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Shop</Text>
      </TouchableOpacity>
        
      </View>

      </View>
      
      {/* card 2 */}
      <View style={{  
        flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#D3D3D3',
     height: 270,
     marginTop:'25px',
      }}>
      <View>
      <Image style={{
        width:'200px',
       height:'200px',
      alignSelf:'center',
      }} source={require('./assets/sbg.png')} 
      />
        </View>

        <View style={{justifyContent:'center',alignItems:'center',}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'25px',justifyContent:'center',fontFamily:'sans-serif',}}> JBL PartyBox  </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Kick out the hottest jams in town </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'5px',fontStyle:'italic',}}>  with JBL PartyBox </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'20px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Rs.35,200</Text>
        <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'150px',marginTop:'10px',justifyContent:'center',}}
        onPress={() => navigation.navigate('des1')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Shop</Text>
      </TouchableOpacity>
        
      </View>

      </View>

      {/* card 3 */}
      <View style={{  
        flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#D3D3D3',
     height: 270,
     marginTop:'25px',
     marginBottom:'25px',

      }}>
      <View>
      <Image style={{
        width:'200px',
       height:'200px',
      alignSelf:'center',
      }} source={require('./assets/smbg.png')} 
      />
        </View>

        <View style={{justifyContent:'center',alignItems:'center',}}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'25px',justifyContent:'center',fontFamily:'sans-serif',}}> Apple Watch </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Watch which makes your hand  </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'10px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'5px',fontStyle:'italic',}}>  look sleek and fashionable. </Text>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:'20px',justifyContent:'center',fontFamily:'sans-serif',marginTop:'10px',}}> Rs.42,900</Text>
        <TouchableOpacity
      style={{padding:'10px',alignItems:'center',backgroundColor:'#000000',borderRadius:'40px',width:'150px',marginTop:'10px',justifyContent:'center',}}
        onPress={() => navigation.navigate('des2')}
      >
        <Text style={{color:"#ffffff",fontSize:'20px',}}>Shop</Text>
      </TouchableOpacity>
        
      </View>

      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Leon() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000000',
        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{ title: 'LeonApp'  }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} 
             options={{ title: 'LeonApp'  }}
        />
        <Stack.Screen name="des" component={DesScreen} 
          options={{ title: 'LeonApp'  }}
        />
        <Stack.Screen name="des1" component={Des1Screen} 
          options={{ title: 'LeonApp'  }}
        />
        <Stack.Screen name="des2" component={Des2Screen} 
          options={{ title: 'LeonApp'  }}
        />
        <Stack.Screen name="ck" component={CheckoutScreen} 
          options={{ title: 'LeonApp'  }}
        />
        <Stack.Screen name="ck1" component={CheckoutsScreen} 
          options={{ title: 'LeonApp'  }}
        />
        <Stack.Screen name="ck2" component={CheckoutfScreen} 
          options={{ title: 'LeonApp'  }}
        />
         <Stack.Screen name="final" component={FinalScreen} 
          options={{ title: 'LeonApp'  }}
        />
        <Stack.Screen name="final1" component={FinaldScreen} 
          options={{ title: 'LeonApp'  }}
        />
        <Stack.Screen name="final2" component={FinalfScreen} 
          options={{ title: 'LeonApp'  }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Leon;

