import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {
    height: 250, // Adjust the height as needed
  },
  slide: {
    flex: 1,
    padding: 16,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      slides: [
        {
          title: "Slide 1",
          src: require("../assets/chd1.jpeg"),
          content: "This is slide 1",
        },
        {
          title: "Slide 2",
          src: require("../assets/pkl.jpg"),
          content: "This is slide 2",
        },
        {
          title: "Slide 3",
          src: require("../assets/mohali.jpg"),
          content: "This is slide 3",
        },
      ],
    };
  }

  handleIndexChanged = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          style={styles.swiper}
          showsPagination={false}
          autoplay={true}
          loop={true}
          onIndexChanged={this.handleIndexChanged}
        >
          {this.state.slides.map((slide, index) => (
            <View key={index} style={styles.slide}>
              <Image source={slide.src} style={styles.image} />
            </View>
          ))}
        </Swiper>
      </View>
    );
  }
}

export default Carousel;