import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { COLORS } from "../constants";

const MainLayout = ({ drawerAnimation }) => {
  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        ...drawerAnimation,
      }}
    >
      <Text>MainLayout</Text>
    </Animated.View>
  );
};

export default MainLayout;
