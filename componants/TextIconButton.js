import React from "react";
import { TouchableOpacity, Text ,Image} from "react-native";

import { FONTS, COLORS } from "../constants";

const TextIconButton = ({
  label,
  containerStyle,
  labelStyle,
  icon,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ ...labelStyle, ...FONTS.body3 }}>{label}</Text>
      <Image
        source={icon}
        style={{
          marginLeft: 5,
          width: 20,
          height: 20,
          tintColor: COLORS.black,
          ...iconStyle,
        }}
      />
    </TouchableOpacity>
  );
};

export default TextIconButton
