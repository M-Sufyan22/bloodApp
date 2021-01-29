import React, { useState, useEffect } from "react";
import { View, Dimensions, FlatList, Animated, StyleSheet } from "react-native";
import CarouselItem from "./CarouselItem";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";

const { width, height } = Dimensions.get("window");
let flatList;

const sliderData = [
  {
    title: "Anise Aroma Art Bazar",
    url: img1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 1,
  },
  {
    title: "Food inside a Bowl",
    url: img2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 2,
  },
  {
    title: "Vegatable Salad",
    url: img3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    id: 3,
  },
];

function infiniteScroll() {
  const numberOfData = sliderData.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + width;
    else {
      scrollValue = 0;
      scrolled = 0;
    }

    this.flatList.scrollToOffset({ animated: true, offset: scrollValue });
  }, 3000);
}

const Carousel = ({ data = sliderData }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList);
  });

  if (data && data.length) {
    return (
      <View style={styles.crouselContainer}>
        <FlatList
          data={data}
          ref={(flatList) => {
            this.flatList = flatList;
          }}
          keyExtractor={(item, index) => "key" + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return <CarouselItem item={item} />;
          }}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ])}
        />
      </View>
    );
  }
  console.log("Please provide Images");
  return null;
};

const styles = StyleSheet.create({
  crouselContainer: {
    height: height / 3,
  },
});

export default Carousel;
