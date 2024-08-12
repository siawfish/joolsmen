import React, { useCallback, useRef } from "react";
import { StyleSheet, View } from "react-native";
import BottomSheet, { BottomSheetView, BottomSheetFooter } from "@gorhom/bottom-sheet";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import { fontPixel, heightPixel, widthPixel } from "@/constants/normalize";
import { FontAwesome } from "@expo/vector-icons";
import { BottomSheetDefaultFooterProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetFooter/types";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import BottomSheetInput from "@/components/BottomSheetInput";
import SelectSkill from "@/components/SelectSkill";
import { FlashList } from "@shopify/flash-list";
import { router } from 'expo-router'
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";

const AddWorks = () => {
  const backgroundColor = useThemeColor(
    {
      light: Colors.light.inputBackground,
      dark: Colors.dark.navButtonBackground,
    },
    "background"
  );

  // renders
  return (
    <ThemedSafeAreaView style={styles.container}>
      <View>
      </View>
    </ThemedSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default AddWorks;
