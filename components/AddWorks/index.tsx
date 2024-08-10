import React, { useCallback, useRef } from "react";
import { StyleSheet, View } from "react-native";
import BottomSheet, { BottomSheetView, BottomSheetFooter } from "@gorhom/bottom-sheet";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import { fontPixel, heightPixel, widthPixel } from "@/constants/normalize";
import BottomSheetInput from "../BottomSheetInput";
import SectionTitle from "../SectionTitle";
import SelectSkill from "../SelectSkill";
import Button from "../Button";
import { FontAwesome } from "@expo/vector-icons";
import { BottomSheetDefaultFooterProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetFooter/types";

const Skills = ["Carpentry", "Plumbing", "Electrical", "Masonry"];

interface AddWorksProps {
  onClose: () => void;
}

const AddWorks = ({
  onClose,
}:AddWorksProps) => {
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
        <View>
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
      onClose={onClose}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      snapPoints={["60%", "90%"]}
      style={[{ backgroundColor }, styles.container]}
      handleIndicatorStyle={[{ backgroundColor: handleColor }, styles.handle]}
      handleStyle={[{ backgroundColor: backgroundColor }, styles.handle]}
      keyboardBehavior="interactive"
      footerComponent={renderFooter}
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
        <View style={styles.padding}>
          <SectionTitle icon={null} title="Select Skills" subtitle="" />
          <View style={styles.listContainer}>
            {
              Skills.map((skill) => (
                <SelectSkill key={skill} skill={skill} />
              ))
            }
          </View>
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
    gap: widthPixel(10),
  },
  listContainer: {
    gap: heightPixel(10),
  },
  btn: {
    marginBottom: heightPixel(120),
  }
});

export default AddWorks;
