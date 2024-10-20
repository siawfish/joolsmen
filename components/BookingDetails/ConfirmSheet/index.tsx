import Button from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { fontPixel, heightPixel, widthPixel } from '@/constants/normalize';
import { useThemeColor } from '@/hooks/useThemeColor';
import BottomSheet, { BottomSheetFooter, BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetDefaultFooterProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetFooter/types';
import React, { useCallback } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import cancel from '@/assets/images/cancel.png';

interface ConfirmSheetProps {
    readonly onClose?: () => void;
}

const ConfirmSheet = ({
    onClose,
}:ConfirmSheetProps) => {
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

    const color = useThemeColor(
        {
          light: Colors.light.inputBackground,
          dark: Colors.dark.navButtonBackground,
        },
        "text"
    );
    const renderFooter = useCallback(
      (props: BottomSheetDefaultFooterProps) => (
        <BottomSheetFooter {...props}>
          <View>
            <Button 
              style={styles.btn} 
              labelStyle={styles.label}
              label="Yes, Cancel"
              onPress={onClose}
            />
          </View>
        </BottomSheetFooter>
      ),
      []
    );
    return (
        <BottomSheet
            onClose={onClose}
            enablePanDownToClose={true}
            snapPoints={["50%"]}
            style={[{ backgroundColor }, styles.container]}
            handleIndicatorStyle={[{ backgroundColor: handleColor }, styles.handle]}
            handleStyle={[{ backgroundColor: backgroundColor }, styles.handle]}
            keyboardBehavior="interactive"
            footerComponent={renderFooter}
            >
            <BottomSheetView style={[styles.contentContainer, { backgroundColor }]}>
                <Image style={styles.cancel} source={cancel} />
                <ThemedText type="title" style={styles.title}>Cancel Booking?</ThemedText>
                <ThemedText type="subtitle" style={styles.subtitle}>Are you sure you want to cancel this booking? This action can not be reversed. Gerald will also be notified.</ThemedText>
            </BottomSheetView>
        </BottomSheet>
    );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: heightPixel(20),
  },
  handle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontSize: fontPixel(24),
    lineHeight: fontPixel(32),
    paddingHorizontal: widthPixel(16),
    marginBottom: widthPixel(16),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fontPixel(16),
    lineHeight: fontPixel(24),
    paddingHorizontal: widthPixel(16),
    marginBottom: widthPixel(16),
    textAlign: 'center',
},
  btn: {
    marginBottom: heightPixel(40),
    backgroundColor: Colors.light.dangerBackground,
  },
  label: {
    color: Colors.light.danger,
  },
  cancel: {
    width: widthPixel(100),
    height: heightPixel(100),
    alignSelf: 'center',
    marginBottom: heightPixel(20),
  },
});


export default ConfirmSheet;
