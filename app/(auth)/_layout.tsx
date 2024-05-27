import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen options={{ headerShown: false }} name="index" />
      <Stack.Screen options={{ headerShown: false }} name="otp" />
      <Stack.Screen options={{ headerShown: false }} name="register" />
    </Stack>
  );
}
