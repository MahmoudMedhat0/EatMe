import React from "react";
import { View, Text } from "react-native";
import { FONTS } from "../constants";

const Header = ({ containerStyle, title, leftComponant, rightComponant }) => {
  return (
    <View style={{ flexDirection: "row", ...containerStyle }}>
      {/* LEFT */}
      {leftComponant}

      {/* Title */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ ...FONTS.h3 }}>{title}</Text>
      </View>

      {/* RIGHT */}
      {rightComponant}
    </View>
  );
};

export default Header;
