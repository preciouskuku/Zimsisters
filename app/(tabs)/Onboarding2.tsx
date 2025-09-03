import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated, Easing } from "react-native";
import { useRouter } from "expo-router";
import { Image } from "react-native";

const { width } = Dimensions.get("window");

export default function Onboarding() {
  const router = useRouter();
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 20, // move right
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -20, // move left
          duration: 600,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0, // back to center
          duration: 400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [translateX]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/SignUp")} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.imagePlaceholder}>
        <Image source={require("../../assets/images/home.png")} />
      </View>

      <View style={styles.indicatorRow}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <Text style={styles.title}>Learn your body. Own your power</Text>
      <Text style={styles.subtitle}>
        Get friendly tips, badges and tools to track your period, mood and wellness
      </Text>

      {/* Swipe Hand Animation */}
      <Animated.View
        style={[
          styles.handContainer,
          { transform: [{ translateX }] }
        ]}
      >
        <Text style={styles.hand}>🤚</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbeaf1",
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  skipButton: {
    alignSelf: "flex-end",
  },
  skipText: {
    color: "#ff00dd",
    fontSize: 16,
  },
  imagePlaceholder: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  indicatorRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: "#ff00dd",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
    color: "#000",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  handContainer: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
  hand: {
    fontSize: 32,
  },
});
