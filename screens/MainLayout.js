import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import {
  FONTS,
  COLORS,
  icons,
  SIZES,
  constants,
  dummyData,
} from "../constants";

import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tabs/tabActions";

import { Home, CartTab, Search, Favourite, Notification } from "../screens";
import { Header } from "../componants";
import LinearGradient from "react-native-linear-gradient";

const TabButton = ({
  lable,
  icon,
  onPress,
  isFocused,
  outerContainerStyle,
  innerContainerStyle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={
          [
            {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            },
          ],
          outerContainerStyle
        }
      >
        <Animated.View
          style={[
            {
              flexDirection: "row",
              width: "80%",
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            },
            innerContainerStyle,
          ]}
        >
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: isFocused? COLORS.white: COLORS.gray2,
            }}
          />

          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                ...FONTS.h4,
                color: COLORS.white,
                marginLeft: SIZES.base,
              }}
            >
              {lable}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
const MainLayout = ({
  drawerAnimation,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  //Reanimated Shared Value

  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);

  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);

  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);

  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);

  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  // Reanimated Shared Style

  const homeFlexStyle = useAnimatedStyle(() => {
    return { flex: homeTabFlex.value };
  });
  const homeColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: homeTabColor.value };
  });

  const searchFlexStyle = useAnimatedStyle(() => {
    return { flex: searchTabFlex.value };
  });
  const searchColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: searchTabColor.value };
  });

  const cartFlexStyle = useAnimatedStyle(() => {
    return { flex: cartTabFlex.value };
  });
  const cartColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: cartTabColor.value };
  });

  const favouriteFlexStyle = useAnimatedStyle(() => {
    return { flex: favouriteTabFlex.value };
  });
  const favouriteColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: favouriteTabColor.value };
  });

  const notificationFlexStyle = useAnimatedStyle(() => {
    return { flex: notificationTabFlex.value };
  });
  const notificationColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: notificationTabColor.value };
  });
  // to set init value of selectedTab
  useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  useEffect(() => {
    if (selectedTab == constants.screens.home) {
      // console.log( homeTabFlex.value, homeColorStyle.value);
      homeTabFlex.value = withTiming(4, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.primary, { duration: 500 });

    } else {
      console.log( homeTabFlex.value, homeColorStyle.value);
      homeTabFlex.value = withTiming(1, { duration: 500 });
      homeTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

     if (selectedTab == constants.screens.cart) {
      cartTabFlex.value = withTiming(4, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 });
      cartTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

    if (selectedTab == constants.screens.search) {
      searchTabFlex.value = withTiming(4, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 });
      searchTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

    if (selectedTab == constants.screens.favourite) {
      favouriteTabFlex.value = withTiming(4, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 });
    } else {
      favouriteTabFlex.value = withTiming(1, { duration: 500 });
      favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 });
    }

    if (selectedTab == constants.screens.notification) {
      notificationTabFlex.value = withTiming(4, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.primary, {
        duration: 500,
      });
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 });
      notificationTabColor.value = withTiming(COLORS.white, {
        duration: 500,
      });
    }
  }, [selectedTab]);

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...drawerAnimation,
      }}
    >
      {/* Header */}

      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 20,
          alignItems: "center",
        }}
        title={selectedTab.toUpperCase()}
        leftComponant={
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            activeOpacity={0.5}
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponant={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              justifyContent: "center",
              alignItems: "center",
            }}
            // onPress={() => {}}
          >
            <Image
              source={dummyData.myProfile.profile_image}
              style={{ width: 40, height: 40, borderRadius: SIZES.radius }}
            />
          </TouchableOpacity>
        }
      />

      {/* Content */}
      <View style={{ flex: 1 }}>
        <Text>MainLayout</Text>
      </View>
      {/* Footer => Custom Tab Navigator */}
      <View
        style={{
          height: 100,
          justifyContent: "flex-end",
        }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 4 }}
          colors={[COLORS.transparent, COLORS.darkGray2]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        />
        {/* Tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            backgroundColor: COLORS.white,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <TabButton
            lable={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => setSelectedTab(constants.screens.home)}
          />

          <TabButton
            lable={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab == constants.screens.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle}
            onPress={() => setSelectedTab(constants.screens.search)}
          />

          <TabButton
            lable={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab == constants.screens.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => setSelectedTab(constants.screens.cart)}
          />

          <TabButton
            lable={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.favourite}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            onPress={() => setSelectedTab(constants.screens.favourite)}
          />

          <TabButton
            lable={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() => setSelectedTab(constants.screens.notification)}
          />
        </View>
      </View>
    </Animated.View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
