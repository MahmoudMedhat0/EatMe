import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../constants";

import MultiSlider from "@ptomasroos/react-native-multi-slider";
const TwoPointSlider = ({
  values,
  min,
  max,
  prefix,
  postfix,
  onValuesChange,
}) => {
    console.log(postfix)
  return (
    <MultiSlider
      values={values}
      min={min}
      max={max}
      set={1}
      markerOffsetY={20}
      sliderLength={SIZES.width - SIZES.padding * 2 - 20}
      selectedStyle={{
        backgroundColor: COLORS.primary,
      }}
      trackStyle={{
        height: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2,
      }}
      minMarkerOverlapDistance={50}
      customMarker={(e) => {
        return (
          <View
            style={{
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
                borderwidth: 4,
                borderColor: COLORS.gray2,
                backgroundColor: COLORS.primary,
                ...styles.shadow,
              }}
            >
              <Text
                style={{
                  marginTop: 5,
                  marginLeft: 6,
                  color: COLORS.darkGray,
                  ...FONTS.body5,
                  alignSelf: "center",
                }}
              >
                {prefix}
                {e.currentValue} {postfix}
              </Text>
            </View>
          </View>
        );
      }}
      onValuesChange={(values) => onValuesChange(values)}
    ></MultiSlider>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
});

export default TwoPointSlider;
