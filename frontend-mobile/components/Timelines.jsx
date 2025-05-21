import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import { lightTheme } from "../theme/colors";

export default class Timelines extends Component {
  constructor() {
    super();
    this.data = [
      { time: "1 Juni", title: "Tomat 1", description: "Event 1 Description", icon: require('../assets/icons8-tomato-48.png')},
      {
        time: "2 Juni",
        title: "Citron 2",
        description: "Event 2 Description", icon: require('../assets/icons8-citrus-48.png')
      },
      { time: "3 Juni", title: "Tomat 3", description: "Event 3 Description", icon: require('../assets/icons8-tomato-48.png') },
      {
        time: "4 Juni",
        title: "Citron 4",
        description: "Event 4 Description", icon: require('../assets/icons8-citrus-48.png')
      },
      { time: "5 Juni", title: "Tomat 5", description: "Event 5 Description", icon: require('../assets/icons8-tomato-48.png') },
    ];
  }

  render() {
    return (
      <View style={styles.container}>
                <Timeline 
          style={styles.list}
          data={this.data}
          circleSize={30}
          circleColor={lightTheme.primary}
          lineColor={{backgroundColor:lightTheme.neutral}}
          timeContainerStyle={{minWidth:80, marginTop: 5}}
          timeStyle={{textAlign: 'center', backgroundColor:lightTheme.primary, color:'white', padding:5, borderRadius:4}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          innerCircle={'icon'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    backgroundColor: lightTheme.secondary,
  },
  list: {
    flex: 1,
    marginTop: 20,
    color: lightTheme.primary,
  },
});
