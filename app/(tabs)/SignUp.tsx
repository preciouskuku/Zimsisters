import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <LinearGradient
      colors={["#FFEAF7", "#FFDFF3"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safe}>
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backArrow}>
          <Text style={{ fontSize: 24 }}>←</Text>
        </TouchableOpacity>

        {/* Heading */}
        <Text style={styles.header}>Join the sisterhood</Text>
        <Text style={styles.subheader}>
          Sign up to track your cycle, learn your body and grow in confidence
        </Text>

        {/* Form Card */}
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

          {/* Remember me */}
          <View style={styles.checkboxContainer}>
            <CheckBox value={rememberMe} onValueChange={setRememberMe} />
            <Text style={styles.checkboxLabel}>Remember me</Text>
          </View>

          {/* Primary Sign Up button */}
          <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.signUpBtnText}>Sign up</Text>
          </TouchableOpacity>

          {/* Guest button */}
          <TouchableOpacity style={styles.guestBtn}>
            <Text style={styles.guestBtnText}>Continue as a guest</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.line} />
          </View>

          {/* Social buttons */}
          <View style={styles.socialIconsRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <Image
                source={require("../../assets/images/apple-logo.png")}
                style={{ width: 28, height: 28 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Image
                source={require("../../assets/images/google.png")}
                style={{ width: 28, height: 28 }}
              />
            </TouchableOpacity>
          </View>

          {/* Footer link */}
          <TouchableOpacity onPress={() => router.push("/SignIn")}>
            <Text style={styles.signInText}>
              Already have an account?{" "}
              <Text style={styles.signInLink}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const PINK = "#FF00B8";
const DARK = "#131316";
const MUTED = "#6F6F76";

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? (StatusBar.currentHeight || 0) : 0,
    paddingHorizontal: 20,
  },
  backArrow: {
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 6,
    color: DARK,
  },
  subheader: {
    fontSize: 14,
    marginBottom: 20,
    color: MUTED,
    lineHeight: 20,
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 30,
    shadowColor: "#000",
    elevation: 3,
  },
  input: {
    backgroundColor: "#fff",
    height: 56,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#EFEFF2",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 15,
    color: MUTED,
  },
  signUpBtn: {
    backgroundColor: PINK,
    borderRadius: 14,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  signUpBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  guestBtn: {
    borderColor: "#000",
    borderWidth: 1.5,
    borderRadius: 14,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  guestBtnText: {
    fontWeight: "700",
    fontSize: 15,
    color: DARK,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 10,
  },
  line: { flex: 1, height: 1, backgroundColor: "#E8E8EE" },
  dividerText: { marginHorizontal: 8, fontSize: 13, color: MUTED },
  socialIconsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 22,
    gap: 22,
  },
  socialBtn: {
    height: 56,
    width: 56,
    borderRadius: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#EFEFF2",
    elevation: 2,
  },
  signInText: {
    color: "#444",
    textAlign: "center",
    fontSize: 14,
  },
  signInLink: {
    color: PINK,
    fontWeight: "700",
  },
});
