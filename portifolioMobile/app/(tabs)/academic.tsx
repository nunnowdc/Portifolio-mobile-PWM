import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ModernCard } from '@/components/modern-card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Spacing, BorderRadius } from '@/constants/theme'; 
import { useColorScheme } from '@/hooks/use-color-scheme'; 

export default function AcademicScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const neonCyan = Colors.dark.tint;
  const accent = Colors.dark.accent;

  const education = [
    {
      title: 'Bacharel em Ciência da Computação',
      institution: 'Universidade Católica de Pernambuco',
      location: 'Pernambuco/PE',
      period: '02/2023 - 06/2027',
      current: '5º Período',
      icon: 'book.fill',
      color: neonCyan,
    },
    {
      title: 'Curso de Idiomas - Inglês',
      institution: 'Senac PE',
      location: 'Pernambuco/PE',
      period: '02/2023 - 06/2026',
      current: 'Upper-Intermediate B1',
      icon: 'paperplane.fill',
      color: accent,
    },
  ];

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
              name="book.fill"
            />
          </View>
        </LinearGradient>
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: neonCyan }}>
          Experiência Acadêmica
        </ThemedText>
      </ThemedView>

      <ThemedText style={{ color: Colors.dark.icon, marginBottom: Spacing.lg, lineHeight: 22 }}>
        Minha trajetória educacional e desenvolvimento acadêmico
      </ThemedText>
      
      {education.map((item, index) => (
        <ModernCard key={index} variant={index === 0 ? 'highlight' : 'default'}>
          <View style={styles.cardHeader}>
            <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
              <IconSymbol name={item.icon as any} size={32} color={item.color} />
            </View>
            <View style={{ flex: 1, marginLeft: Spacing.md }}>
              <ThemedText type="subtitle" style={{ color: item.color, marginBottom: Spacing.xs }}>
                {item.title}
              </ThemedText>
              <View style={[styles.badge, { backgroundColor: `${item.color}30`, borderColor: item.color }]}>
                <ThemedText style={[styles.badgeText, { color: item.color }]}>
                  {item.current}
                </ThemedText>
              </View>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <View style={[styles.dot, { backgroundColor: item.color }]} />
              <View style={{ flex: 1 }}>
                <ThemedText type="defaultSemiBold" style={{ color: Colors.dark.text, fontSize: 13 }}>
                  Instituição
                </ThemedText>
                <ThemedText style={{ color: Colors.dark.icon, fontSize: 14, marginTop: 2 }}>
                  {item.institution}
                </ThemedText>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={[styles.dot, { backgroundColor: item.color }]} />
              <View style={{ flex: 1 }}>
                <ThemedText type="defaultSemiBold" style={{ color: Colors.dark.text, fontSize: 13 }}>
                  Local
                </ThemedText>
                <ThemedText style={{ color: Colors.dark.icon, fontSize: 14, marginTop: 2 }}>
                  {item.location}
                </ThemedText>
              </View>
            </View>

            <View style={styles.detailRow}>
              <View style={[styles.dot, { backgroundColor: item.color }]} />
              <View style={{ flex: 1 }}>
                <ThemedText type="defaultSemiBold" style={{ color: Colors.dark.text, fontSize: 13 }}>
                  Período
                </ThemedText>
                <ThemedText style={{ color: Colors.dark.icon, fontSize: 14, marginTop: 2 }}>
                  {item.period}
                </ThemedText>
              </View>
            </View>
          </View>
        </ModernCard>
      ))}

      <ModernCard variant="gradient">
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <ThemedText style={{ fontSize: 32, fontWeight: 'bold', color: '#fff' }}>
              5º
            </ThemedText>
            <ThemedText style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
              Período
            </ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ThemedText style={{ fontSize: 32, fontWeight: 'bold', color: '#fff' }}>
              B1
            </ThemedText>
            <ThemedText style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
              Nível Inglês
            </ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <ThemedText style={{ fontSize: 32, fontWeight: 'bold', color: '#fff' }}>
              2
            </ThemedText>
            <ThemedText style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
              Formações
            </ThemedText>
          </View>
        </View>
      </ModernCard>
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
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.lg,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.sm,
    borderWidth: 1,
    marginTop: Spacing.xs,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  detailsContainer: {
    gap: Spacing.md,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 6,
    marginRight: Spacing.md,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});