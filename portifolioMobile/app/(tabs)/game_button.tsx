import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ModernCard } from '@/components/modern-card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Spacing, BorderRadius } from '@/constants/theme'; 
import { useColorScheme } from '@/hooks/use-color-scheme'; 

export default function GameButtonScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const neonCyan = Colors.dark.tint;
  const accent = Colors.dark.accent;
  const router = useRouter();

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
              size={120}
              color="#fff"
              name="gamecontroller.fill"
            />
          </View>
        </LinearGradient>
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: neonCyan }}>
          Jogo da Forca
        </ThemedText>
      </ThemedView>

      <ThemedText style={{ color: Colors.dark.icon, marginBottom: Spacing.lg, lineHeight: 22 }}>
        Teste seus conhecimentos em um jogo interativo e divertido!
      </ThemedText>

      <ModernCard variant="highlight">
        <View style={styles.gameInfo}>
          <View style={[styles.infoIcon, { backgroundColor: `${accent}20` }]}>
            <IconSymbol name="gamecontroller.fill" size={32} color={accent} />
          </View>
          <View style={{ flex: 1, marginLeft: Spacing.md }}>
            <ThemedText type="subtitle" style={{ color: accent, marginBottom: Spacing.xs }}>
              Como Jogar
            </ThemedText>
            <ThemedText style={{ color: Colors.dark.text, lineHeight: 22 }}>
              Adivinhe a palavra letra por letra antes que o boneco seja completado. Você tem chances limitadas!
            </ThemedText>
          </View>
        </View>
      </ModernCard>

      <ModernCard variant="gradient">
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <IconSymbol name="chevron.left.forwardslash.chevron.right" size={24} color="#fff" />
            </View>
            <ThemedText style={{ color: '#fff', fontSize: 14, textAlign: 'center', marginTop: Spacing.xs }}>
              Interface Interativa
            </ThemedText>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <IconSymbol name="book.fill" size={24} color="#fff" />
            </View>
            <ThemedText style={{ color: '#fff', fontSize: 14, textAlign: 'center', marginTop: Spacing.xs }}>
              Várias Categorias
            </ThemedText>
          </View>
          <View style={styles.featureItem}>
            <View style={styles.featureIcon}>
              <IconSymbol name="paperplane.fill" size={24} color="#fff" />
            </View>
            <ThemedText style={{ color: '#fff', fontSize: 14, textAlign: 'center', marginTop: Spacing.xs }}>
              Desafio Crescente
            </ThemedText>
          </View>
        </View>
      </ModernCard>

      <TouchableOpacity 
        style={styles.playButton}
        onPress={() => router.push('/hangman-game')}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={[Colors.dark.gradient1, Colors.dark.gradient2]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.playButtonGradient}
        >
          <IconSymbol name="gamecontroller.fill" size={32} color="#fff" />
          <ThemedText style={styles.playButtonText}>
            COMEÇAR JOGO
          </ThemedText>
        </LinearGradient>
      </TouchableOpacity>

      <ModernCard>
        <ThemedText type="defaultSemiBold" style={{ color: neonCyan, marginBottom: Spacing.sm }}>
          Status do Desenvolvimento
        </ThemedText>
        <View style={styles.statusContainer}>
          <View style={[styles.statusDot, { backgroundColor: accent }]} />
          <ThemedText style={{ color: Colors.dark.icon, flex: 1 }}>
            A tela de jogo será implementada no arquivo{' '}
            <ThemedText type="defaultSemiBold" style={{ color: Colors.dark.text }}>
              app/hangman-game.tsx
            </ThemedText>
            {' '}(próxima etapa).
          </ThemedText>
        </View>
      </ModernCard>

      <View style={styles.tipsContainer}>
        <ThemedText type="subtitle" style={{ color: neonCyan, marginBottom: Spacing.md }}>
          Dicas para Jogar
        </ThemedText>
        
        <View style={styles.tipCard}>
          <View style={[styles.tipNumber, { backgroundColor: `${neonCyan}30`, borderColor: neonCyan }]}>
            <ThemedText style={{ color: neonCyan, fontWeight: 'bold' }}>1</ThemedText>
          </View>
          <ThemedText style={{ color: Colors.dark.text, flex: 1, marginLeft: Spacing.md }}>
            Comece com as vogais mais comuns
          </ThemedText>
        </View>

        <View style={styles.tipCard}>
          <View style={[styles.tipNumber, { backgroundColor: `${accent}30`, borderColor: accent }]}>
            <ThemedText style={{ color: accent, fontWeight: 'bold' }}>2</ThemedText>
          </View>
          <ThemedText style={{ color: Colors.dark.text, flex: 1, marginLeft: Spacing.md }}>
            Preste atenção no tamanho da palavra
          </ThemedText>
        </View>

        <View style={styles.tipCard}>
          <View style={[styles.tipNumber, { backgroundColor: `${neonCyan}30`, borderColor: neonCyan }]}>
            <ThemedText style={{ color: neonCyan, fontWeight: 'bold' }}>3</ThemedText>
          </View>
          <ThemedText style={{ color: Colors.dark.text, flex: 1, marginLeft: Spacing.md }}>
            Pense na categoria antes de escolher
          </ThemedText>
        </View>
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
  titleContainer: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.sm,
  },
  gameInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoIcon: {
    width: 64,
    height: 64,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureIcon: {
    width: 64,
    height: 64,
    borderRadius: BorderRadius.md,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    marginVertical: Spacing.lg,
    borderRadius: BorderRadius.lg,
    overflow: 'hidden',
  },
  playButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.lg,
    gap: Spacing.md,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.dark.cardBackgroundSecondary,
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 8,
    marginRight: Spacing.md,
  },
  tipsContainer: {
    marginTop: Spacing.md,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
    backgroundColor: Colors.dark.cardBackground,
    borderRadius: BorderRadius.md,
    marginBottom: Spacing.sm,
  },
  tipNumber: {
    width: 32,
    height: 32,
    borderRadius: BorderRadius.round,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});