import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import {
  IconButton,
  TextButton,
  TwoPointSlider,
  TextIconButton,
} from "../../componants";

import { COLORS, FONTS, SIZES, constants, icons } from "../../constants";
const Section = ({ containerStyle, title, children }) => {
  return (
    <View style={{ marginTop: SIZES.padding, ...containerStyle }}>
      <Text style={{ ...FONTS.h3 }}>{title}</Text>
      {children}
    </View>
  );
};
const FilterModal = ({ isVisible, onClose }) => {
  const modalAnimatedValue = useRef(new Animated.Value(0)).current;
  const [showFilterModal, setShowFilterModal] = useState(isVisible);
  const [deliveryTiem, setDeliveryTiem] = useState("");
  const [rating, setRating] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      });
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [100, SIZES.height - 680],
  });
  function renderDistance() {
    return (
      <Section title="Distance">
        <View style={{ alignItems: "center" }}>
          <TwoPointSlider
            values={[1, 10]}
            min={1}
            max={20}
            postfix={"km"}
            onValuesChange={(values) => console.log(values)}
          />
        </View>
      </Section>
    );
  }
  function renderDeliveryTime() {
    return (
      <Section title="Delivery Time" containerStyle={{ marginTop: 40 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: SIZES.radius,
          }}
        >
          {constants.delivery_time.map((item, index) => {
            return (
              <TextButton
                key={`delivery_time-${index}`}
                lable={item.label}
                labelStyle={{
                  color: item.id == deliveryTiem ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  width: "30%",
                  heigh: 50,
                  margin: 5,
                  alignItems: "center",
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == deliveryTiem ? COLORS.white : COLORS.lightGray2,
                }}
                onPress={() => {
                  setDeliveryTiem(item.id);
                }}
              />
            );
          })}
        </View>
      </Section>
    );
  }
  function renderPrincingRange() {
    return (
      <Section title="Pricing Range">
        <View style={{ alignItems: "center" }}>
          <TwoPointSlider
            values={[10, 50]}
            min={1}
            max={100}
            prefix="$"
            postfix=""
            onValuesChange={(values) => {
              console.log(values);
            }}
          ></TwoPointSlider>
        </View>
      </Section>
    );
  }
  function renderRatings() {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        {constants.ratings.map((item, index) => {
          return (
            <TextIconButton
              key={`Ratings-${index}`}
              containerStyle={{
                flex: 1,
                height: 50,
                margin: 5,
                alignItems: "center",
                borderRadius: SIZES.base,
                backgroundColor:
                  item.id == rating ? COLORS.primary : COLORS.lightGray2,
              }}
              label={item.label}
              labelStyle={{
                color: item.id == rating ? COLORS.white : COLORS.gray,
              }}
              icon={icons.star}
              iconStyle={{
                tintColor: item.id == rating ? COLORS.primary : COLORS.gray,
              }}
              onPress={() => setRating(item.id)}
            ></TextIconButton>
          );
        })}
      </View>
    );
  }

  function renderTags() {
    return (
      <Section title="tags">
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {constants.tags.map((item, index) => {
            return (
              <TextButton
                key={`Tags-${index}`}
                label={item.label}
                labelStyle={{
                  color: item.id == tags ? COLORS.white : COLORS.gray,
                  ...FONTS.body3,
                }}
                buttonContainerStyle={{
                  height: 50,
                  margin: 5,
                  paddingHorizontal: SIZES.padding,
                  alignItems: "center",
                  borderRadius: SIZES.base,
                  backgroundColor:
                    item.id == tags ? COLORS.primary : COLORS.lightGray2,
                }}
                onPress={() => setTags(item.id)}
              />
            );
          })}
        </View>
      </Section>
    );
  }
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={{ flex: 1, backgroundColor: COLORS.transparentBlack7 }}>
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          />
        </TouchableWithoutFeedback>

        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            top: modalY,
            width: "100%",
            height: "100%",
            padding: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}
        >
          {/* Header */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ ...FONTS.h3, flex: 1, fontSize: 18 }}>
              Filter Your Search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{ tintColor: COLORS.gray2 }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 250 }}
          >
            {/* Distance */}
            {renderDistance()}
            {/* Delivery Time */}
            {renderDeliveryTime()}
            {/* Princing Range */}
            {renderPrincingRange()}
            {/* Ratings */}
            {renderRatings()}
            {/* Tags */}
            {renderTags()}
            {/* Apply Button */}
            <View
              style={{
                position: "absolute",
                bottom: 150,
                left: 0,
                right: 0,
                height: 110,
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.radius,
                backgroundColor: COLORS.white,
              }}
            >
              <TextButton
                label="Apply Filters"
                buttonContainerStyle={{
                  heigh: 50,
                  borderRadius: SIZES.base,
                  backgroundColor: COLORS.primary,
                }}
                onPress={() => {
                  console.log("apply Filters");
                }}
              />
            </View>
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
