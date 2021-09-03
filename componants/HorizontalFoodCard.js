import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const HorizontalFoodCard = ({ onPress, containerStyle, imageStyle, item }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        ...containerStyle,
      }}
    >
      {/* Image */}
      <Image source={item.image} style={imageStyle} />
      {/* Detailes */}
      <View style={{ flex: 1 }}>
        {/* Name */}
        <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>

        <Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>
          {item.description}
        </Text>

        <Text
          style={{ ...FONTS.h2, color: COLORS.black, marginTop: SIZES.base }}
        >
          ${item.price}
        </Text>
      </View>
      {/* Calories */}
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          top: 5,
          right: SIZES.radius,
        }}
      >
        <Image source={icons.calories} style={{ width: 30, height: 30 }} />
        <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
          {item.calories}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalFoodCard;
