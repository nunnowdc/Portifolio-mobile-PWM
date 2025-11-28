import { StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ModernCard } from '@/components/modern-card';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Spacing, BorderRadius } from '@/constants/theme'; 
import { useColorScheme } from '@/hooks/use-color-scheme'; 

export default function AboutScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const neonCyan = Colors.dark.tint;
  const accent = Colors.dark.accent;
  
  const skills = {
    languages: ['Python', 'C', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    competencies: ['POO', 'Git', 'Github', 'Excell', 'SQL Server', 'Metodologias Ágeis', 'Lógica de programação', 'Keras', 'TensorFlow', 'Trabalho em Equipe', 'Comunicação', 'Aprendizado contínuo', 'Uso eficiente de chatBots', 'Arduino', 'Raspberry Pi', 'Design UX/UI'],
  };

  const technologies = [
    { name: 'React Native', version: '0.81.5', icon: 'paperplane.fill' },
    { name: 'Expo', version: '~54.0.25', icon: 'house.fill' },
    { name: 'Expo Router', version: '~6.0.15', icon: 'chevron.right' },
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
              name="info.circle.fill"
            />
          </View>
        </LinearGradient>
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ color: neonCyan }}>
          Sobre o Candidato
        </ThemedText>
      </ThemedView>

      <ModernCard variant="highlight">
        <ThemedText type="subtitle" style={{ color: accent, marginBottom: Spacing.md }}>
          Resumo
        </ThemedText>
        <ThemedText style={{ color: Colors.dark.text, lineHeight: 22, marginBottom: Spacing.sm }}>
          Cursando superior para Ciência da Computação (5º Período) com conhecimento em Python, C/C++, Java, HTML, CSS, JavaScript.
        </ThemedText>
        <ThemedText style={{ color: Colors.dark.text, lineHeight: 22, marginBottom: Spacing.sm }}>
          Comunicativo, autodidata, disciplinado e com muito interesse em aprender.
        </ThemedText>
        <ThemedText style={{ color: Colors.dark.text, lineHeight: 22 }}>
          Busca a primeira oportunidade de estágio em Inteligência Artificial para aplicar e expandir seus conhecimentos.
        </ThemedText>
        
        <View style={styles.linksContainer}>
          <TouchableOpacity 
            style={[styles.linkButton, { borderColor: neonCyan }]}
            onPress={() => Linking.openURL('https://github.com/nunnowdc')}
          >
            <ThemedText style={[styles.linkText, { color: neonCyan }]}>
              Github
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.linkButton, { borderColor: accent }]}
            onPress={() => Linking.openURL('https://linkedin.com/in/nunnowakiyama/')}
          >
            <ThemedText style={[styles.linkText, { color: accent }]}>
              LinkedIn
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ModernCard>

      <ModernCard>
        <View style={styles.cardHeader}>
          <IconSymbol name="chevron.left.forwardslash.chevron.right" size={28} color={neonCyan} />
          <ThemedText type="subtitle" style={{ color: neonCyan, marginLeft: Spacing.sm }}>
            Linguagens
          </ThemedText>
        </View>
        <View style={styles.skillsGrid}>
          {skills.languages.map((lang, index) => (
            <View key={index} style={[styles.skillChip, { borderColor: neonCyan }]}>
              <ThemedText style={[styles.skillText, { color: neonCyan }]}>
                {lang}
              </ThemedText>
            </View>
          ))}
        </View>
      </ModernCard>

      <ModernCard>
        <View style={styles.cardHeader}>
          <IconSymbol name="book.fill" size={28} color={accent} />
          <ThemedText type="subtitle" style={{ color: accent, marginLeft: Spacing.sm }}>
            Competências
          </ThemedText>
        </View>
        <View style={styles.skillsGrid}>
          {skills.competencies.map((comp, index) => (
            <View key={index} style={[styles.skillChip, { borderColor: accent }]}>
              <ThemedText style={[styles.skillText, { color: accent }]}>
                {comp}
              </ThemedText>
            </View>
          ))}
        </View>
      </ModernCard>

      <ModernCard variant="gradient">
        <ThemedText type="subtitle" style={{ color: '#fff', marginBottom: Spacing.md }}>
          Tecnologias do App
        </ThemedText>
        <ThemedText style={{ color: '#fff', marginBottom: Spacing.lg, lineHeight: 22 }}>
          Este portfólio foi construído usando React Native e Expo, com o seguinte stack principal:
        </ThemedText>
        {technologies.map((tech, index) => (
          <View key={index} style={styles.techItem}>
            <View style={styles.techIcon}>
              <IconSymbol name={tech.icon as any} size={20} color="#fff" />
            </View>
            <View style={{ flex: 1 }}>
              <ThemedText type="defaultSemiBold" style={{ color: '#fff' }}>
                {tech.name}
              </ThemedText>
              <ThemedText style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                {tech.version}
              </ThemedText>
            </View>
          </View>
        ))}
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
    marginBottom: Spacing.lg,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  linksContainer: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.lg,
  },
  linkButton: {
    flex: 1,
    paddingVertical: Spacing.md,
    borderRadius: BorderRadius.md,
    borderWidth: 2,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    fontWeight: '600',
  },
  skillsGrid: {
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
  techItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: Spacing.md,
    borderRadius: BorderRadius.md,
  },
  techIcon: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
});