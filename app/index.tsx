import { Ionicons } from "@expo/vector-icons";
import { Text } from "@react-navigation/elements";
import { router, useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";
import { Easing } from "react-native-reanimated";

export default function SlidingGlobe3() {
  //  useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.replace("/(tabs)");
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, []);
  
  return (
    <View style={styles.container}>
        <Image 
        source={require("../assets/images/AAA.png")} 
        style={{ width: "100%", height: "100%" }}
        />
        <View style={styles.box}>
          <TouchableOpacity style={styles.button}
        onPress={()=>router.replace("/(tabs)")}
        >
          Ilovaga kirish
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000016"
  },
  box: {
    position: "absolute",
    bottom: 120,
  },
  heading: {
    fontSize: 32,
    fontWeight: "500",
    color: "white",
    marginVertical: 4,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: "azure",
    borderRadius: 8
  }
});
