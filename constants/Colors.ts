/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#f6f6f6',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    subText: '#687076',
    primary: "#fcba03",
    lightPrimary: "#fffcdc",
    inputBackground: "#ffffff",
    navButtonBackground: "#151718",
    grey: "#dbdbde",
    green: "#34d39a",
    purple: "#818bf8",
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    subText: '#929292',
    primary: "#fcba03",
    lightPrimary: "rgba(252, 186, 3, 0.1)",
    inputBackground: "#1a1a1a",
    navButtonBackground: "#000000",
    grey: "#2b2b2b",
    green: "#34d39a",
    purple: "#818bf8",
  },
};
