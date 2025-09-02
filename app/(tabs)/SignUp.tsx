import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { useRouter } from 'expo-router';

export default function SignUp() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backArrow}>
        <Text style={{fontSize: 24}}>←</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Join the sisterhood</Text>
      <Text style={styles.subheader}>
        Sign up to track your cycle, learn your body and grow in confidence
      </Text>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Full name"
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          placeholder="Email address"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
          />
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </View>

        <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpBtnText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.guestBtn}>
          <Text style={styles.guestBtnText}>Continue as a guest</Text>
        </TouchableOpacity>

        <Text style={styles.orContinueText}>Or continue with</Text>

      <View style={styles.socialIconsRow}>
  <Image source={require('../../assets/images/apple-logo.png')} style={styles.socialIcon} />
  <Image source={require('../../assets/images/google.png')} style={styles.socialIcon} />
</View>

        <TouchableOpacity onPress={() => router.push('/SignIn')}>
          <Text style={styles.signInText}>
            Already have an account? <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbeaf1',
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backArrow: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  subheader: {
    fontSize: 14,
    marginBottom: 20,
    color: '#333',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: '#000',
    elevation: 4,
  },
  input: {
    backgroundColor: '#f8f8f8',
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 14,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#555',
  },
  signUpBtn: {
    backgroundColor: '#ff00dd',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  signUpBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  guestBtn: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 14,
  },
  guestBtnText: {
    fontWeight: '600',
    fontSize: 16,
  },
  orContinueText: {
    textAlign: 'center',
    marginBottom: 14,
    color: '#888',
  },
  socialIconsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 22,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
  },
  signInText: {
    color: '#444',
    textAlign: 'center',
    fontSize: 15,
  },
  signInLink: {
    color: '#dc2ada',
    textDecorationLine: 'underline',
  },
});
