import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { fontPixel } from '@/constants/normalize';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: fontPixel(16),
    fontFamily: 'Regular',
  },
  defaultSemiBold: {
    fontSize: fontPixel(16),
    fontFamily: 'SemiBold',
  },
  title: {
    fontSize: fontPixel(32),
    fontFamily: 'Bold',
  },
  subtitle: {
    fontSize: fontPixel(18),
    fontFamily: 'Regular',
    fontWeight: 400,
  },
  link: {
    fontSize: fontPixel(16),
    color: Colors.light.primary,
    fontFamily: 'Italic',
  },
});
