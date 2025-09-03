import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" /> 
      <Stack.Screen name="Onboarding" />
      <Stack.Screen name="Onboarding2" />
      <Stack.Screen name="SignUp" />
    </Stack>
  );
}
