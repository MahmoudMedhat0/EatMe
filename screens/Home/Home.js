import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { HorizontalFoodCard } from "../../componants";
import { COLORS, dummyData, FONTS, icons, SIZES } from "../../constants";

const Section = ({ title, onPress, children }) => {
  return(
  <View>
    {/* Header */}
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: SIZES.padding,
        marginTop: 30,
        marginBottom: 20,
      }}
    >
      <Text style={{ ...FONTS.h3, flex: 1 }}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>Show All</Text>
      </TouchableOpacity>
    </View>

    {/* content */}

    {children}
  </View>)
};

const Home = () => {
  const [recommends, setRecommeds] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  function handleChangeCategory(categoryId, menuTypeId) {
    // Retrive the Recommended menu
    let selectedRecommended = dummyData.menu.find(
      (a) => a.name == "Recommended"
    );

    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);

    // set the recommended menu based on the categoryID
    setRecommeds(
      selectedRecommended?.list.filter((a) => a.categories.includes(categoryId))
    );

    //set the menu based on the categoryId
    setMenuList(
      selectedMenu.list.filter((a) => a.categories.includes(categoryId))
    );
  }

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {/* icon */}
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.black,
          }}
        />

        {/* TextInput */}

        <TextInput
          style={{
            flex: 1,
            padding: 2,
            marginLeft: SIZES.radius,
            ...FONTS.body4,
          }}
          placeholder="search food..."
        />

        {/* Filter Button */}
        <TouchableOpacity
        //onPress
        >
          <Image
            source={icons.filter}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMenuItems() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              marginLeft: SIZES.padding,
              marginRight:
                index == dummyData.menu.length - 1 ? SIZES.padding : 0,
            }}
            onPress={() => {
              setSelectedMenuType(item.id);
              handleChangeCategory(selectedCategoryId, item.id);
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                color:
                  selectedMenuType == item.id ? COLORS.primary : COLORS.black,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }
  

  function renderRecommendedSection() {
    return(
    
    <Section
    title={"Recommended"}
    onPress={() => console.log("Shaw All Recommended")}
    >
      
      <FlatList
         horizontal
         data={recommends}
         keyExtractor={(item) => `${item.id}`}
         showsHorizontalScrollIndicator={false}
        
        renderItem={({item, index}) =>  (
          
            <HorizontalFoodCard
              containerStyle={{
                height: 180,
                width: SIZES.width * 0.85,
                marginLeft: index == 0 ? SIZES.padding : 18,
                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                paddingRight: SIZES.radius,
                alignItems: "center",
              }}
              imageStyle={{
                marginTop: 35,
                height: 150,
                width: 150,
              }}
              item={item}
              onPress={"horizontalFoodCard Recommended Section"}
            />
          
        )}
      />
    </Section>)
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search Section */}
      {renderSearch()}

      {/* List Section */}
      <FlatList
        data={menuList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={
          <View>
            {/* Recommened  */}
            {renderRecommendedSection()}

            {/*  Menu Type */}

            {renderMenuItems()}
          </View>
        }
        renderItem={({ item, index }) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: "center",
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              onPress={() => {
                console.log("FoodCard");
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
