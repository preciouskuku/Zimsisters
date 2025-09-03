// app/Onboarding.tsx
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, FlatList, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'You are safe here',
    subtitle: 'Zimsisters is your private space to track your cycle, ask questions and grow',
    image: require('../../assets/images/home.png'),
    backgroundColor: '#fbeaf1',
  },
  {
    key: '2',
    title: 'Discover features',
    subtitle: 'Track your cycle, ask questions, and connect with Zimsisters community',
    image: require('../../assets/images/onboard.png'),
    backgroundColor: '#fbeaf1',
  },
  {
    key: '3',
    title: 'You are not alone',
    subtitle: 'Connect with sisters, ask anything, and get the support you deserve without shame',
    image: require('../../assets/images/onbord.png'),
    backgroundColor: '#fbeaf1',
    isFinal: true, // flag for last slide
  },
];

export default function Onboarding() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = async () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // final slide without buttons, just in case
      await AsyncStorage.setItem('hasOnboarded', 'true');
      router.replace('/SignUp');
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('hasOnboarded', 'true');
    router.replace('/SignUp');
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) setCurrentIndex(viewableItems[0].index);
  }).current;

  const renderItem = ({ item }: any) => {
    return (
      <View style={[styles.slide, { width, backgroundColor: item.backgroundColor }]}>
        <View style={item.isFinal ? styles.finalImageContainer : styles.imagePlaceholder}>
          <Image source={item.image} style={item.isFinal ? styles.finalImage : styles.image} resizeMode="contain" />
        </View>

        <View style={styles.indicatorRow}>
          {slides.map((_, i) => (
            <View key={i} style={[styles.dot, currentIndex === i && styles.activeDot]} />
          ))}
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>

        {item.isFinal && (
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.signUpBtn}
              onPress={async () => {
                await AsyncStorage.setItem('hasOnboarded', 'true');
                router.push('/SignUp');
              }}
            >
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={async () => {
                await AsyncStorage.setItem('hasOnboarded', 'true');
                router.push('/SignIn');
              }}
            >
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          </View>
        )}

        {item.isFinal && (
          <Text style={styles.disclaimer}>
            By continuing, you agree to Zimsisters'{" "}
            <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/terms')}>
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text style={styles.link} onPress={() => Linking.openURL('https://example.com/privacy')}>
              Privacy Policy
            </Text>
          </Text>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {!slides[currentIndex].isFinal && (
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        renderItem={renderItem}
      />

      {!slides[currentIndex].isFinal && (
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>›</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  skipButton: { position: 'absolute', top: 50, right: 20, zIndex: 1 },
  skipText: { color: '#ff00dd', fontSize: 16 },
  slide: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20 },
  imagePlaceholder: { width: width * 0.8, height: width * 0.8, borderRadius: width * 0.4, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginVertical: 20, overflow: 'hidden' },
  image: { width: '90%', height: '90%' },
  finalImageContainer: { width: 220, height: 220, borderRadius: 110, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', marginBottom: 24, overflow: 'hidden' },
  finalImage: { width: 220, height: 220, resizeMode: 'cover' },
  indicatorRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  dot: { width: 10, height: 10, backgroundColor: '#ccc', borderRadius: 5, marginHorizontal: 8 },
  activeDot: { backgroundColor: '#ff00dd' },
  title: { fontWeight: 'bold', fontSize: 22, marginBottom: 10, color: '#000', textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#444', textAlign: 'center', paddingHorizontal: 20, marginBottom: 80 },
  nextButton: { position: 'absolute', bottom: 40, right: 30, backgroundColor: '#ff00dd', width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', shadowColor: '#ff00dd', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 8, elevation: 8 },
  nextButtonText: { color: '#fff', fontSize: 32, fontWeight: 'bold', lineHeight: 32 },
  buttonRow: { flexDirection: 'row', justifyContent: 'center', marginBottom: 22 },
  signUpBtn: { backgroundColor: '#fff', borderColor: '#ff00dd', borderWidth: 2, borderRadius: 20, paddingVertical: 12, paddingHorizontal: 30, marginRight: 10 },
  signUpText: { color: '#ff00dd', fontSize: 16, fontWeight: 'bold' },
  loginBtn: { backgroundColor: '#fff', borderColor: '#000', borderWidth: 1, borderRadius: 20, paddingVertical: 12, paddingHorizontal: 30, marginLeft: 10 },
  loginText: { color: '#000', fontSize: 16, fontWeight: 'bold' },
  disclaimer: { fontSize: 12, color: '#777', textAlign: 'center', marginTop: 18, paddingHorizontal: 10, lineHeight: 18 },
  link: { color: '#ff00dd', textDecorationLine: 'underline' },
});
