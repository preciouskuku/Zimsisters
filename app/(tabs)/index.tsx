// app/index.tsx
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const onboarded = await AsyncStorage.getItem("hasOnboarded");
        if (onboarded) {
          router.replace("/SignIn"); // or "/SignUp" if you want new users to register first
        } else {
          router.replace("/Onboarding");
        }
      } catch (error) {
        console.error("Error checking onboarding:", error);
        router.replace("/Onboarding"); // fallback
      } finally {
        setLoading(false);
      }
    };

    checkOnboarding();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ff00dd" />
      </View>
    );
  }

  return null;
}
