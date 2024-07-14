import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import { widthPixel } from "@/constants/normalize";
import SummaryCard from "./components/SummaryCard";
import { Colors } from "@/constants/Colors";

const Summary = () => {
  return (
    <ThemedView style={styles.container}>
      <SummaryCard
        lightColor={Colors.light.purple}
        darkColor={Colors.dark.purple}
        title="Total Bookings"
        value="5"
      />
      <SummaryCard
        lightColor={Colors.light.green}
        darkColor={Colors.dark.green}
        title="Completed Bookings"
        value="3"
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    gap: widthPixel(16),
    justifyContent: "space-evenly",
  },
});

export default Summary;
