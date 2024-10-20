import React from "react";
import { StyleSheet } from "react-native";
import { ThemedSafeAreaView } from "@/components/ThemedSafeAreaView";
import BookingDetails from "@/components/BookingDetails";
import Header from "@/components/BookingDetails/Header";
import Actions from "@/components/BookingDetails/Actions";
import Reschedule from "@/components/BookingDetails/Reschedule";
import ConfirmSheet from "@/components/BookingDetails/ConfirmSheet";

const Details = () => {
  const [showReschedule, setShowReschedule] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  return (
    <ThemedSafeAreaView style={styles.container}>
      <Header />
      <BookingDetails />
      <Actions 
        onReschedule={()=>setShowReschedule(true)}
        onCancel={()=>setShowConfirm(true)}
      />
      {
        showReschedule && <Reschedule onClose={()=>setShowReschedule(false)} />
      }
      {
        showConfirm && <ConfirmSheet onClose={()=>setShowConfirm(false)} />
      }
    </ThemedSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Details;
