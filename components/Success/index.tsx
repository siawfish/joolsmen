import { StyleSheet, View, Image, Modal, Dimensions } from "react-native";
import React from "react";
import { fontPixel, heightPixel, widthPixel } from "@/constants/normalize";
import success from "@/assets/images/success.png";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import Button from "../Button";
import { ThemedText } from "../ThemedText";

const Success = () => {
  const backgroundColor = useThemeColor(
    {
      light: Colors.light.inputBackground,
      dark: Colors.dark.background,
    },
    "background"
  );

  return (
    <Modal animationType="slide" transparent style={styles.modal} visible>
        <View style={styles.container}>
            <View style={[styles.contentContainer, {backgroundColor}]}>
                <Image
                    source={success}
                    style={{ width: widthPixel(80), height: widthPixel(80) }}
                />
                <ThemedText style={styles.title} type='defaultSemiBold'>
                    Your account has been created
                </ThemedText>
                <ThemedText 
                    style={styles.text}
                    lightColor={Colors.light.subText}
                    darkColor={Colors.dark.subText}
                >
                    An email has been sent to your email address. Please verify your email address to activate your account.
                </ThemedText>
                <Button 
                    label='Complete your profile'
                    onPress={() => {}}
                    style={styles.btn}
                />
            </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modal: {
        height: '100%',
    },
  container: { 
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: widthPixel(16),
    },
  contentContainer: {
    height: Dimensions.get('window').height / 2,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: widthPixel(16),
    gap: widthPixel(16),
  },
  title: {
    fontSize: fontPixel(24),
    textAlign: 'center',
  },
  text: {
    fontSize: fontPixel(16),
    textAlign: 'center',
    },
    btn: {
        marginTop: widthPixel(16),
        width: '100%',
        position: 'absolute',
        bottom: heightPixel(16),
    },
});

export default Success;
