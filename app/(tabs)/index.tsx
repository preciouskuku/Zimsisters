import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Onboarding() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity onPress={() => router.push('/SignUp')} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      {/* Illustration */}
      <View style={styles.imagePlaceholder}>
        <Image 
          source={require('../../assets/images/home.png')} 
          style={styles.image} 
          resizeMode="contain" 
        />
      </View>

      {/* Indicator Dots */}
      <View style={styles.indicatorRow}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Title & Subtitle */}
      <Text style={styles.title}>You are safe here</Text>
      <Text style={styles.subtitle}>
        Zimsisters is your private space to track your cycle, ask questions and grow
      </Text>

      {/* Next Button */}
      <TouchableOpacity onPress={() => router.push('/Onboarding2')} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>›</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbeaf1',
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  skipButton: {
    alignSelf: 'flex-end',
  },
  skipText: {
    color: '#ff00dd',
    fontSize: 16,
  },
  imagePlaceholder: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    overflow: 'hidden',
  },
  image: {
    width: '90%',
    height: '90%',
  },
  indicatorRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 8,
  },
  activeDot: {
    backgroundColor: '#ff00dd',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 80,
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    backgroundColor: '#ff00dd',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ff00dd',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
});
