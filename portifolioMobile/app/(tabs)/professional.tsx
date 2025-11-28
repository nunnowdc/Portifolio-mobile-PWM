// File: portifolioMobile/app/(tabs)/professional.tsx
import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function ProfessionalScreen() {
  const experience = [
    {
      title: 'Voluntariado - Programa Institucional de Bolsas de Iniciação Científica (PIBIC)',
      period: '08/2024 - 08/2025',
      projectTitle: 'Implementação de um dispositivo móvel para detecção de manifestações patológicas em edificações através da inteligência artificial para fins de reparo.',
    },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#DCDCDC', dark: '#151718' }}
      headerImage={
        <IconSymbol
          size={250}
          color="#808080"
          name="person.3.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Experiência Profissional
        </ThemedText>
      </ThemedView>
      
      {experience.map((item, index) => (
        <Collapsible key={index} title={item.title}>
          <ThemedText type="defaultSemiBold">Período:</ThemedText>
          <ThemedText>{item.period}</ThemedText>
          <ThemedText type="defaultSemiBold" style={{ marginTop: 8 }}>Projeto:</ThemedText>
          <ThemedText>{item.projectTitle}</ThemedText>
        </Collapsible>
      ))}

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: 0,
    left: 0,
    position: 'absolute',
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});