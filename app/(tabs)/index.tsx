import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { ParallaxScrollView } from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FDE7F5', dark: '#2C1A2F' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.headerImage}
        />
      }
    >
      {/* Title Section */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">🌸 Welcome to ZimSisters 🌸</ThemedText>
      </ThemedView>

      {/* Welcome Message */}
      <ThemedView style={styles.messageContainer}>
        <ThemedText>
          Hello Precious! This is your first screen built with React Native and Expo Router.
        </ThemedText>
        <ThemedText>
          Use this space to introduce your community app, share updates, or guide your users.
        </ThemedText>
      </ThemedView>

      {/* Steps Section */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Next Steps:</ThemedText>
        <ThemedText>1. Customize this screen with your content.</ThemedText>
        <ThemedText>2. Add more screens for Profile, Community, and Explore tabs.</ThemedText>
        <ThemedText>3. Build features like posts, chats, and notifications.</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 300,
    height: 180,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  messageContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
    gap: 8,
  },
  stepContainer: {
    paddingHorizontal: 16,
    gap: 6,
    marginBottom: 20,
  },
});
