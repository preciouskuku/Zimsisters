import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

// Define navigation stack params (adjust routes to match your app)
type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <LinearGradient
      colors={["#FFEAF7", "#FFDFF3"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safe}>
        {/* Back */}
        <TouchableOpacity
          hitSlop={{ top: 12, left: 12, bottom: 12, right: 12 }}
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Ionicons name="chevron-back" size={24} />
        </TouchableOpacity>

        {/* Heading */}
        <View style={styles.headerWrap}>
          <Text style={styles.title}>Welcome back, sister</Text>
          <Text style={styles.subtitle}>
            Your rhythm, your space, your people — let’s pick{"\n"}up where you
            left off
          </Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          {/* Inputs */}
          <View style={styles.inputWrap}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email address"
              placeholderTextColor="#9A9AA0"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <View style={[styles.inputWrap, { marginTop: 14 }]}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#9A9AA0"
              secureTextEntry
              style={styles.input}
            />
          </View>

          {/* Forgot */}
          <TouchableOpacity
            style={styles.forgotWrap}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          {/* Primary CTA */}
          <TouchableOpacity activeOpacity={0.9} style={styles.primaryBtn}>
            <Text style={styles.primaryBtnText}>Log In</Text>
          </TouchableOpacity>

          {/* Guest */}
          <TouchableOpacity activeOpacity={0.8} style={styles.ghostBtn}>
            <Text style={styles.ghostBtnText}>Continue as a guest</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Or continue with</Text>
            <View style={styles.line} />
          </View>

          {/* Socials */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <AntDesign name="google" size={24} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <FontAwesome name="apple" size={26} />
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={styles.footerWrap}>
            <Text style={styles.footerText}>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signupText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const PINK = "#FF00B8";
const DARK = "#131316";
const MUTED = "#6F6F76";
const CARD = "#FFFFFF";

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  safe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? (StatusBar.currentHeight || 0) : 0,
  },
  backBtn: { marginLeft: 16, marginTop: 4 },
  headerWrap: { paddingHorizontal: 20, marginTop: 12, marginBottom: 12 },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: DARK,
    letterSpacing: 0.2,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14.5,
    lineHeight: 20,
    color: MUTED,
  },
  card: {
    backgroundColor: CARD,
    marginHorizontal: 12,
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingTop: 14,
    paddingBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  inputWrap: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EFEFF2",
    paddingHorizontal: 12,
    height: 56,
    justifyContent: "center",
  },
  input: {
    fontSize: 16,
    color: DARK,
  },
  forgotWrap: { marginTop: 10, alignSelf: "flex-end", paddingRight: 8 },
  forgotText: { color: PINK, fontSize: 13.5 },
  primaryBtn: {
    marginTop: 12,
    backgroundColor: PINK,
    height: 56,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtnText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  ghostBtn: {
    marginTop: 12,
    height: 56,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#1A1A1D",
    alignItems: "center",
    justifyContent: "center",
  },
  ghostBtnText: {
    color: "#1A1A1D",
    fontWeight: "700",
    fontSize: 15,
  },
  dividerRow: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 8,
  },
  line: { flex: 1, height: 1, backgroundColor: "#E8E8EE" },
  dividerText: { fontSize: 12.5, color: MUTED },
  socialRow: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "center",
    gap: 22,
  },
  socialBtn: {
    height: 56,
    width: 56,
    borderRadius: 14,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#EFEFF2",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  footerWrap: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  footerText: { color: MUTED, fontSize: 13.5 },
  signupText: { color: PINK, fontSize: 13.5, fontWeight: "700" },
});
