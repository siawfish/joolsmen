import { StyleSheet, View, Image } from "react-native";
import React from "react";
import emptyList from "@/assets/images/empty-list.png";
import { fontPixel, widthPixel } from "@/constants/normalize";
import { ThemedText } from "../ThemedText";

const EmptyList = ({
    message="No items found",
    children
}: {
    readonly message?: string;
    readonly children?: React.ReactNode;
}) => {
    return (
        <View style={styles.container}>
            <Image source={emptyList} style={styles.icon} />
            <ThemedText style={styles.message} type="subtitle">{message}</ThemedText>
            {children}
        </View>
    );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  icon: {
    width: widthPixel(50),
    height: widthPixel(50),
  },
  message: {
    textAlign: "center",
    fontSize: fontPixel(14),
  }
});
