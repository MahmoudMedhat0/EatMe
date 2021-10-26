import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const VerticalFoodCard = ({item , containerStyle , onPress})=>{
return (
 <TouchableOpacity style = {{
     width : 200,
     padding : SIZES.padding,
     alignItems: 'center',
     borderRadius : SIZES.radius,
     backgroundColor: COLORS.lightGray2,
     ...containerStyle
 }}  onPress = {onPress}>

{/*  calories and Favourite */}
<View style = {{flexDirection:'row'}}>
    {/* calories */}
    <View style = {{flex:1,flexDirection:'row'}}>
        <Image source= {icons.calories} style={{width:30,height:30}} />
        <Text style={{color:COLORS.darkGray2,...FONTS.body5}}>{item.calories} calories</Text>
    </View>
    

    {/* favourite */}
    <Image source = {icons.love} style={{
        width:20,height:20,tintColor:item.isFavourite ? COLORS.primary: COLORS.gray
    }}
    />
</View>

{/* Image */}
<View style= {{
    height:150, width:150,alignItems:'center',justifyContent:'center'
}}>
<Image source = {item.image} style={{width:"100%" , height:'100%'}} />
</View>

{/* info */}

<View style={{
    alignItems:'center',
    marginTop : -20
}}>

    <Text style={{...FONTS.h3}}>{item.name}</Text>
    <Text style={{color:COLORS.darkGray2,textAlign:'center'}}>{item.description}</Text>
    <Text style={{marginTop:SIZES.radius,...FONTS.h2}}>${item.price}</Text>
</View>
</TouchableOpacity>

)
}

export default VerticalFoodCard