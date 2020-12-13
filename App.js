import React, {Component} from 'react';
import {View, Text, Animated, StyleSheet, TouchableOpacity} from 'react-native';
 
class App extends Component{
 
 constructor(props){
   super(props);
   this.state={
     AltAnimada:new Animated.Value(0),
     LargAnimada:new Animated.Value(0),
     textoAparece:new Animated.Value(0),
     texto:new Animated.Value(70)
   };
 
   this.startAnimation = this.startAnimation.bind(this);
 }
 
 startAnimation(){
   Animated.loop(
     Animated.sequence([
 
       Animated.parallel([ // Quadrado aumenta
         Animated.timing(
           this.state.AltAnimada,
           {
             toValue:350,
             duration:1000,
             useNativeDriver:false
           }
         ),
         Animated.timing(
           this.state.LargAnimada,
           {
             toValue:350,
             duration:1000,
             useNativeDriver:false
           }
         )
       ]),
 
       Animated.timing(
         this.state.textoAparece,
         {
           toValue:1,
           duration:1500,
           useNativeDriver:false
         }
       ),
       Animated.timing(
         this.state.texto,
         {
           toValue:120,
           duration:800,
           useNativeDriver:false
         }
       ),
       Animated.timing(
         this.state.texto,
         {
           toValue:0,
           duration:800,
           useNativeDriver:false
         }
       ),
       Animated.parallel([ // Quadrado cobre toda a tela
         Animated.timing(
           this.state.AltAnimada,
           {
             toValue:800,
             duration:800,
             useNativeDriver:false
           }
         ),
         Animated.timing(
           this.state.LargAnimada,
           {
             toValue:800,
             duration:800,
             useNativeDriver:false
           }
         )
       ]) 
     ])
   ).start();
 }
 
 render(){
 
   return(
 
     <View style={styles.container}>
 
       <Animated.View style={{
         height:this.state.AltAnimada,
         width:this.state.LargAnimada,
         backgroundColor:'#4169e1',
         justifyContent:'center',
         borderRadius:10
         }}>
 
         <Animated.Text style={{
           fontSize:this.state.texto,
           fontWeight:'bold',
           color:'#fff',
           textAlign:'center',
           opacity:this.state.textoAparece           
           }}>
           React Native
         </Animated.Text>
 
       </Animated.View>
 
       <View style={{
         width:'100%',
         alignItems:'center',
         paddingTop:5
         }}>
 
         <TouchableOpacity style={{
           height:40,
           width:'85%',
           backgroundColor:'#FA1A29',
           justifyContent:'center',
           borderRadius:20,
           }} onPress={this.startAnimation}>
 
           <Text style={{
             fontSize:20,
             fontWeight:'bold',
             color:'#fff',
             textAlign:'center'
             }}>
             Start Animation
           </Text>
         </TouchableOpacity>
 
       </View>
 
     
     
 
     </View>
 
   );
 }
}
 
const styles = StyleSheet.create({
 container:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 }
});
 
export default App;
 
