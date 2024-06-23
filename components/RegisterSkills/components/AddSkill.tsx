import React, { useCallback, useRef } from "react";
import { StyleSheet, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";
import { fontPixel, widthPixel } from "@/constants/normalize";
import InputField from "@/components/TextInput";
import CostBreakdown from "./CostBreakdown";

const AddSkill = () => {
  const backgroundColor = useThemeColor(
    {
      light: Colors.light.inputBackground,
      dark: Colors.dark.navButtonBackground,
    },
    "background"
  );
  const handleColor = useThemeColor(
    {
      light: Colors.light.subText,
      dark: Colors.light.primary,
    },
    "background"
  );
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={["60%", "90%"]}
      style={[{ backgroundColor }, styles.container]}
      handleIndicatorStyle={[{ backgroundColor: handleColor }, styles.handle]}
      handleStyle={[{ backgroundColor: backgroundColor }, styles.handle]}
    >
      <BottomSheetView style={[styles.contentContainer, { backgroundColor }]}>
        <ThemedText
            type='title'
            lightColor={Colors.light.text} 
            darkColor={Colors.dark.text} 
            style={styles?.title}
        >
            Add A Skill
        </ThemedText>
        <InputField
            label='Skill Name'
            placeholder='Enter the name of the skill'
        />

        <CostBreakdown />
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  contentContainer: {
    flex: 1,
  },
  handle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontSize: fontPixel(24),
    paddingHorizontal: widthPixel(16),
    marginBottom: widthPixel(16),
  }
});

export default AddSkill;
