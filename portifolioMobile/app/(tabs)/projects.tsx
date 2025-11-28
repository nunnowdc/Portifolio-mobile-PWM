import { StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ModernCard } from '@/components/modern-card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Spacing, BorderRadius } from '@/constants/theme'; 
import { useColorScheme } from '@/hooks/use-color-scheme'; 

export default function ProjectsScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const neonCyan = Colors.dark.tint;
  const accent = Colors.dark.accent;

  const projects = [
    {
      title: 'Sistema Integrado de Gerenciamento',
      period: '07/2024 - 11/2024',
      description: 'Projeto Java com conceito CRUD para gerenciamento de 3 áreas distintas: restaurante, eventos e clínica médica. O sistema utiliza princípios de POO como encapsulamento, abstração e reutilização de código.',
      skills: ['Java', 'Github', 'POO', 'Trabalho em Equipe'],
      icon: 'hammer.fill',
      color: neonCyan,
    },
    {
      title: 'Sistema de Receituário - UPA',
      period: '03/2025 - 06/2025',
      description: 'Projeto Django com conceito CRUD para gerenciamento de uma aplicação web destinada para uso médico e com fins pediátricos. A aplicação foi desenvolvida usando o princípio de arquitetura em 3 camadas.',
      skills: ['Python', 'Django', 'Fullstack', 'SQLite3', 'Trabalho em Equipe'],
      icon: 'house.fill',
      color: accent,
    },
  ];

  const githubLink = 'https://github.com/nunnowdc';

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
              name="hammer.fill"
            />
          </View>
        </LinearGradient>
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: neonCyan }}>
          Projetos
        </ThemedText>
      </ThemedView>

      <ThemedText style={{ color: Colors.dark.icon, marginBottom: Spacing.lg, lineHeight: 22 }}>
        Principais projetos desenvolvidos durante minha jornada acadêmica
      </ThemedText>
      
      {projects.map((item, index) => (
        <ModernCard key={index} variant={index === 0 ? 'highlight' : 'default'}>
          <View style={styles.projectHeader}>
            <View style={[styles.projectIcon, { backgroundColor: `${item.color}20` }]}>
              <IconSymbol name={item.icon as any} size={28} color={item.color} />
            </View>
            <View style={{ flex: 1, marginLeft: Spacing.md }}>
              <ThemedText type="subtitle" style={{ color: item.color, marginBottom: Spacing.xs }}>
                {item.title}
              </ThemedText>
              <View style={styles.periodContainer}>
                <View style={[styles.dot, { backgroundColor: item.color }]} />
                <ThemedText style={{ color: Colors.dark.icon, fontSize: 13 }}>
                  {item.period}
                </ThemedText>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <ThemedText type="defaultSemiBold" style={{ color: Colors.dark.text, marginBottom: Spacing.sm }}>
              Descrição
            </ThemedText>
            <ThemedText style={{ color: Colors.dark.icon, lineHeight: 22 }}>
              {item.description}
            </ThemedText>
          </View>

          <View style={styles.section}>
            <ThemedText type="defaultSemiBold" style={{ color: Colors.dark.text, marginBottom: Spacing.sm }}>
              Tecnologias
            </ThemedText>
            <View style={styles.skillsContainer}>
              {item.skills.map((skill, idx) => (
                <View key={idx} style={[styles.skillChip, { borderColor: item.color }]}>
                  <ThemedText style={[styles.skillText, { color: item.color }]}>
                    {skill}
                  </ThemedText>
                </View>
              ))}
            </View>
          </View>

          <TouchableOpacity 
            style={[styles.githubButton, { borderColor: item.color }]}
            onPress={() => Linking.openURL(githubLink)}
          >
            <IconSymbol name="paperplane.fill" size={18} color={item.color} />
            <ThemedText style={[styles.githubText, { color: item.color }]}>
              Ver no Github
            </ThemedText>
          </TouchableOpacity>
        </ModernCard>
      ))}

      <ModernCard variant="gradient">
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <IconSymbol name="hammer.fill" size={40} color="#fff" />
            <ThemedText style={{ fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: Spacing.sm }}>
              2
            </ThemedText>
            <ThemedText style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
              Projetos
            </ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <IconSymbol name="chevron.left.forwardslash.chevron.right" size={40} color="#fff" />
            <ThemedText style={{ fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: Spacing.sm }}>
              5+
            </ThemedText>
            <ThemedText style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
              Tecnologias
            </ThemedText>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <IconSymbol name="person.3.fill" size={40} color="#fff" />
            <ThemedText style={{ fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: Spacing.sm }}>
              100%
            </ThemedText>
            <ThemedText style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>
              Em Equipe
            </ThemedText>
          </View>
        </View>
      </ModernCard>

      <ModernCard>
        <View style={styles.githubCard}>
          <IconSymbol name="paperplane.fill" size={48} color={neonCyan} />
          <View style={{ flex: 1, marginLeft: Spacing.md }}>
            <ThemedText type="subtitle" style={{ color: neonCyan, marginBottom: Spacing.xs }}>
              Veja Mais Projetos
            </ThemedText>
            <ThemedText style={{ color: Colors.dark.icon, fontSize: 14, marginBottom: Spacing.md }}>
              Explore todos os meus projetos no Github
            </ThemedText>
            <TouchableOpacity 
              style={[styles.fullGithubButton, { backgroundColor: neonCyan }]}
              onPress={() => Linking.openURL(githubLink)}
            >
              <ThemedText style={{ color: '#0a0a0f', fontWeight: '600' }}>
                Acessar Github
              </ThemedText>
            </TouchableOpacity>
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
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
  },
  projectIcon: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  periodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#2a2a3a',
    marginBottom: Spacing.md,
  },
  section: {
    marginBottom: Spacing.md,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  skillChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.md,
    borderWidth: 1.5,
  },
  skillText: {
    fontSize: 12,
    fontWeight: '500',
  },
  githubButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 2,
    gap: Spacing.sm,
  },
  githubText: {
    fontSize: 14,
    fontWeight: '600',
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
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  githubCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullGithubButton: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});