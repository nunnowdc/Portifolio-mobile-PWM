import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ModernCard } from '@/components/modern-card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Spacing, BorderRadius } from '@/constants/theme'; 
import { useColorScheme } from '@/hooks/use-color-scheme'; 

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const neonCyan = Colors.dark.tint; 
  const accent = Colors.dark.accent;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#DCDCDC', dark: '#0a0a0f' }} 
      headerImage={
        <LinearGradient
          colors={[Colors.dark.gradient1, Colors.dark.gradient2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.headerGradient}
        >
          <View style={styles.logoContainer}>
            <IconSymbol
              name="paperplane.fill"
              size={120}
              color="#fff"
              style={styles.headerIcon}
            />
          </View>
        </LinearGradient>
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: neonCyan }}>
          Bem-vindo(a)!
        </ThemedText>
        <HelloWave />
      </ThemedView>

      <ModernCard variant="highlight">
        <ThemedText type="subtitle" style={{ color: accent, marginBottom: Spacing.sm }}>
          Nunno Wakiyama Diniz Carvalho
        </ThemedText>
        <ThemedText type="default" style={{ color: Colors.dark.text }}>
          Cientista da Computação (5º Período)
        </ThemedText>
        <View style={styles.tagContainer}>
          <View style={[styles.tag, { borderColor: neonCyan }]}>
            <ThemedText style={[styles.tagText, { color: neonCyan }]}>
              React Native
            </ThemedText>
          </View>
          <View style={[styles.tag, { borderColor: accent }]}>
            <ThemedText style={[styles.tagText, { color: accent }]}>
              Python
            </ThemedText>
          </View>
          <View style={[styles.tag, { borderColor: neonCyan }]}>
            <ThemedText style={[styles.tagText, { color: neonCyan }]}>
              IA
            </ThemedText>
          </View>
        </View>
      </ModernCard>

      <ModernCard variant="gradient">
        <View style={styles.cardHeader}>
          <IconSymbol name="info.circle.fill" size={32} color="#fff" />
          <ThemedText type="subtitle" style={{ color: '#fff', marginLeft: Spacing.sm }}>
            Sobre Este Portfólio
          </ThemedText>
        </View>
        <ThemedText style={{ color: '#fff', marginTop: Spacing.md, lineHeight: 22 }}>
          Este aplicativo é um portfólio desenvolvido em{' '}
          <ThemedText type="defaultSemiBold" style={{ color: '#fff' }}>
            React Native
          </ThemedText> com{' '}
          <ThemedText type="defaultSemiBold" style={{ color: '#fff' }}>
            Expo
          </ThemedText> e{' '}
          <ThemedText type="defaultSemiBold" style={{ color: '#fff' }}>
            Expo Router
          </ThemedText>.
        </ThemedText>
      </ModernCard>

      <ModernCard>
        <View style={styles.cardHeader}>
          <IconSymbol name="chevron.left.forwardslash.chevron.right" size={28} color={neonCyan} />
          <ThemedText type="subtitle" style={{ color: neonCyan, marginLeft: Spacing.sm }}>
            Estilo Futurista
          </ThemedText>
        </View>
        <ThemedText style={{ marginTop: Spacing.md, color: Colors.dark.text, lineHeight: 22 }}>
          O tema foi atualizado para uma estética moderna de alto contraste, utilizando preto profundo, gradientes vibrantes e tons de ciano/roxo neon como acentos.
        </ThemedText>
      </ModernCard>

      <View style={styles.footer}>
        <ThemedText style={{ color: Colors.dark.icon, textAlign: 'center', fontSize: 14 }}>
          Navegue pelas abas para explorar mais
        </ThemedText>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerGradient: {
    height: 250,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 160,
    height: 160,
    borderRadius: BorderRadius.round,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  headerIcon: {
    transform: [{ rotate: '45deg' }],
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagContainer: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginTop: Spacing.md,
    flexWrap: 'wrap',
  },
  tag: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
  },
  tagText: {
    fontSize: 12,
    fontWeight: '600',
  },
  footer: {
    marginTop: Spacing.xl,
    marginBottom: Spacing.lg,
  },
});