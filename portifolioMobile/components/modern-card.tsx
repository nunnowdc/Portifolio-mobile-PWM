import { PropsWithChildren } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors, BorderRadius, Spacing, Shadows } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type CardVariant = 'default' | 'gradient' | 'highlight';

interface ModernCardProps extends PropsWithChildren {
  variant?: CardVariant;
  style?: ViewStyle;
}

export function ModernCard({ children, variant = 'default', style }: ModernCardProps) {
  const colorScheme = useColorScheme() ?? 'dark';
  
  if (variant === 'gradient') {
    return (
      <LinearGradient
        colors={[Colors.dark.gradient1, Colors.dark.gradient2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.card, styles.gradientCard, style]}
      >
        {children}
      </LinearGradient>
    );
  }

  if (variant === 'highlight') {
    return (
      <View style={[styles.card, styles.highlightCard, style]}>
        <View style={styles.highlightBorder} />
        {children}
      </View>
    );
  }

  return (
    <View 
      style={[
        styles.card, 
        { backgroundColor: Colors.dark.cardBackground },
        style
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    ...Shadows.medium,
  },
  gradientCard: {
    ...Shadows.large,
  },
  highlightCard: {
    backgroundColor: Colors.dark.cardBackground,
    borderWidth: 2,
    borderColor: Colors.dark.accent,
    position: 'relative',
    overflow: 'hidden',
  },
  highlightBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: Colors.dark.accentSecondary,
  },
});