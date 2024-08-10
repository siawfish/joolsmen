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

const Skills = ["Carpentry", "Plumbing", "Electrical", "Masonry"];

const AddWorks = () => {
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
  const inputBackgroundColor = useThemeColor(
    {
      light: Colors.light.background,
      dark: Colors.dark.navButtonBackground,
    },
    "background"
  );
  const color = useThemeColor(
    {
      light: Colors.light.inputBackground,
      dark: Colors.dark.navButtonBackground,
    },
    "text"
  );
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const renderFooter = useCallback(
    (props: BottomSheetDefaultFooterProps) => (
      <BottomSheetFooter {...props}>
        <View style={{backgroundColor}}>
          <Button 
            style={styles.btn} 
            label="Share"
            icon={<FontAwesome name="share-square" size={fontPixel(18)} color={color} />}
          />
        </View>
      </BottomSheetFooter>
    ),
    []
  );

  // renders
  return (
    <BottomSheet
      onClose={() => router.back()}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={["100%"]}
      style={[{ backgroundColor }, styles.container]}
      enableHandlePanningGesture={false}
      handleIndicatorStyle={[{ backgroundColor: handleColor }, styles.handle]}
      handleStyle={[{ backgroundColor: backgroundColor }, styles.handle]}
      keyboardBehavior="interactive"
      footerComponent={renderFooter}
      animationConfigs={{
        duration: 100,
      }}
    >
      <BottomSheetView style={[styles.contentContainer, { backgroundColor }]}>
        <View style={styles.padding}>
          <SectionTitle icon={null} title="Share Your Work" subtitle="" />
        </View>
        <BottomSheetInput
          label="Description"
          placeholder="Enter the work description"
          style={{ backgroundColor: inputBackgroundColor, ...styles.input }}
          multiline
          keyboardType="default"
          onUpload={() => {}}
        />
        <View style={[styles.padding, styles.fullLength]}>
          <SectionTitle icon={null} title="Select Skills" subtitle="" />
          <FlashList 
            keyboardDismissMode="on-drag"
            data={Skills}
            renderItem={({ item }) => (
              <SelectSkill checked={item === "Plumbing"} skill={item} />
            )}
            keyExtractor={(item) => item}
            estimatedItemSize={20}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.skillsContainer}
          />
        </View>
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
    paddingVertical: heightPixel(20),
    gap: widthPixel(16),
  },
  handle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontSize: fontPixel(24),
    paddingHorizontal: widthPixel(16),
    marginBottom: widthPixel(16),
  },
  input: {
    height: widthPixel(150),
  },
  padding: {
    paddingHorizontal: widthPixel(16),
    gap: widthPixel(10),
  },
  skillsContainer: {
    paddingBottom: heightPixel(20),
  },
  listContainer: {
    gap: heightPixel(10),
  },
  btn: {
    marginBottom: heightPixel(40),
  },
  fullLength: {
    flex: 1,
  }
});

export default AddWorks;
