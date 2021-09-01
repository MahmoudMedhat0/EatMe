import React, { useState } from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import {
  FONTS,
  COLORS,
  icons,
  SIZES,
  constants,
  dummyData,
} from "../constants";

import { MainLayout } from "../screens";
import Animated from "react-native-reanimated";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ lable, icon }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        // backgroundColor
      }}
      //   onPress ={()=>{}}
    >
      <Image
        source={icon}
        style={{ height: 20, width: 20, tintColor: COLORS.white }}
      />
      <Text style={{ marginLeft: 15, color: COLORS.white, ...FONTS.h3 }}>
        {lable}
      </Text>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
        {/* Close */}
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              source={icons.cross}
              style={{ height: 35, width: 35, tintColor: COLORS.white }}
            />
          </TouchableOpacity>
        </View>

        {/* Profile */}

        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            alignItems: "center",
          }}
          onPress={() => console.log("profile")}
        >
          <Image
            source={dummyData.myProfile.profile_image}
            style={{ width: 50, height: 50, borderRadius: SIZES.radius }}
          />
          <View style={{ marginLeft: SIZES.radius }}>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {dummyData.myProfile.name.split(" ")[0]}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              View Your Profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* Drawer Items */}
        <View style={{ flex: 1, marginTop: SIZES.radius }}>
          <CustomDrawerItem lable={constants.screens.home} icon={icons.home} />
          <CustomDrawerItem
            lable={constants.screens.my_wallet}
            icon={icons.wallet}
          />
          <CustomDrawerItem
            lable={constants.screens.notification}
            icon={icons.notification}
          />
          <CustomDrawerItem
            lable={constants.screens.favourite}
            icon={icons.favourite}
          />

          {/* Line Divider */}
          <View
            style={{
              height: 1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
              backgroundColor: COLORS.lightGray1,
            }}
          />
          <CustomDrawerItem lable="Track Your Order" icon={icons.location} />
          <CustomDrawerItem lable="Coupons" icon={icons.coupon} />
          <CustomDrawerItem lable="Settings" icon={icons.setting} />
          <CustomDrawerItem lable="Invite a Friend" icon={icons.profile} />
          <CustomDrawerItem lable="Help Center" icon={icons.help} />
        </View>
        {/* Logout */}
        <View>
          <CustomDrawerItem lable="Logout" icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CusromDrawer = () => {
  const [progress, setprogress] = useState(new Animated.Value(0));

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          padding: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initialRouteName="MainLayout"
        drawerContent={(props) => {
          setTimeout(() => {
            setprogress(props.progress);
          }, 0);
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="MainLayout">
          {(props) => <MainLayout {...props} drawerAnimation={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CusromDrawer;
