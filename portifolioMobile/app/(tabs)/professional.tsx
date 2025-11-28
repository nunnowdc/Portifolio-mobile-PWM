import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ModernCard } from '@/components/modern-card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Spacing, BorderRadius } from '@/constants/theme'; 
import { useColorScheme } from '@/hooks/use-color-scheme'; 

export default function ProfessionalScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const neonCyan = Colors.dark.tint;
  const accent = Colors.dark.accent;

  const experience = [
    {
      title: 'Voluntariado - PIBIC',
      fullTitle: 'Programa Institucional de Bolsas de Iniciação Científica',
      period: '08/2024 - 08/2025',
      duration: '1 ano',
      projectTitle: 'Implementação de um dispositivo móvel para detecção de manifestações patológicas em edificações através da inteligência artificial para fins de reparo.',
      skills: ['Python', 'IA', 'TensorFlow', 'Keras', 'Pesquisa Científica'],
      icon: 'person.3.fill',
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
              name="person.3.fill"
            />
          </View>
        </LinearGradient>
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: neonCyan }}>
          Experiência Profissional
        </ThemedText>
      </ThemedView>

      <ThemedText style={{ color: Colors.dark.icon, marginBottom: Spacing.lg, lineHeight: 22 }}>
        Minha trajetória profissional e projetos de pesquisa
      </ThemedText>
      
      {experience.map((item, index) => (
        <ModernCard key={index} variant="highlight">
          <View style={styles.cardHeader}>
            <View style={[styles.iconContainer, { backgroundColor: `${item.color}20` }]}>
              <IconSymbol name={item.icon as any} size={32} color={item.color} />
            </View>
            <View style={{ flex: 1, marginLeft: Spacing.md }}>
              <ThemedText type="subtitle" style={{ color: item.color, marginBottom: Spacing.xs }}>
                {item.title}
              </ThemedText>
              <ThemedText style={{ color: Colors.dark.icon, fontSize: 13, marginBottom: Spacing.xs }}>
                {item.fullTitle}
              </ThemedText>
              <View style={styles.periodBadge}>
                <View style={[styles.dot, { backgroundColor: item.color }]} />
                <ThemedText style={{ color: Colors.dark.text, fontSize: 13 }}>
                  {item.period}
                </ThemedText>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <ThemedText type="defaultSemiBold" style={{ color: neonCyan, marginBottom: Spacing.sm }}>
              Projeto
            </ThemedText>
            <ThemedText style={{ color: Colors.dark.text, lineHeight: 22 }}>
              {item.projectTitle}
            </ThemedText>
          </View>

          <View style={styles.section}>
            <ThemedText type="defaultSemiBold" style={{ color: neonCyan, marginBottom: Spacing.sm }}>
              Tecnologias Utilizadas
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
        </ModernCard>
      ))}

      <ModernCard variant="gradient">
        <View style={styles.infoContainer}>
          <IconSymbol name="info.circle.fill" size={48} color="#fff" />
          <View style={{ flex: 1, marginLeft: Spacing.md }}>
            <ThemedText type="subtitle" style={{ color: '#fff', marginBottom: Spacing.sm }}>
              Em Busca de Oportunidades
            </ThemedText>
            <ThemedText style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 22 }}>
              Procuro minha primeira oportunidade de estágio em Inteligência Artificial para aplicar e expandir meus conhecimentos em um ambiente profissional.
            </ThemedText>
          </View>
        </View>
      </ModernCard>

      <ModernCard>
        <ThemedText type="subtitle" style={{ color: neonCyan, marginBottom: Spacing.md }}>
          Competências Profissionais
        </ThemedText>
        
        <View style={styles.competencyItem}>
          <View style={styles.competencyIcon}>
            <IconSymbol name="chevron.left.forwardslash.chevron.right" size={20} color={neonCyan} />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText type="defaultSemiBold" style={{ color: Colors.dark.text }}>
              Desenvolvimento & IA
            </ThemedText>
            <ThemedText style={{ color: Colors.dark.icon, fontSize: 13, marginTop: 4 }}>
              Python, TensorFlow, Keras, Machine Learning
            </ThemedText>
          </View>
        </View>

        <View style={styles.competencyItem}>
          <View style={styles.competencyIcon}>
            <IconSymbol name="book.fill" size={20} color={accent} />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText type="defaultSemiBold" style={{ color: Colors.dark.text }}>
              Pesquisa Científica
            </ThemedText>
            <ThemedText style={{ color: Colors.dark.icon, fontSize: 13, marginTop: 4 }}>
              Metodologia científica, análise de dados, documentação
            </ThemedText>
          </View>
        </View>

        <View style={styles.competencyItem}>
          <View style={styles.competencyIcon}>
            <IconSymbol name="person.3.fill" size={20} color={neonCyan} />
          </View>
          <View style={{ flex: 1 }}>
            <ThemedText type="defaultSemiBold" style={{ color: Colors.dark.text }}>
              Soft Skills
            </ThemedText>
            <ThemedText style={{ color: Colors.dark.icon, fontSize: 13, marginTop: 4 }}>
              Trabalho em equipe, comunicação, aprendizado contínuo
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
  periodBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  section: {
    marginBottom: Spacing.lg,
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
    fontSize: 13,
    fontWeight: '500',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  competencyItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: Spacing.md,
    padding: Spacing.md,
    backgroundColor: Colors.dark.cardBackgroundSecondary,
    borderRadius: BorderRadius.md,
  },
  competencyIcon: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.sm,
    backgroundColor: Colors.dark.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
});