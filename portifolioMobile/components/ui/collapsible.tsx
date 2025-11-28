import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useThemeColor } from '@/hooks/use-theme-color'; 

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const tintColor = useThemeColor({}, 'tint'); 

  return (
    <ThemedView>
      <TouchableOpacity
        style={[
          styles.heading, 
          { borderLeftWidth: 2, borderColor: tintColor, paddingLeft: 10 } 
        ]}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.7}>
        
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={tintColor} 
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />

        <ThemedText 
            type="defaultSemiBold" 
            style={{ color: tintColor }} 
        >
            {title}
        </ThemedText>
      </TouchableOpacity>
      
      {/* Linha de separação sutil com a cor do tint */}
      <ThemedView style={[styles.separator, { backgroundColor: tintColor }]} />

      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
  },
  separator: {
    height: 1, 
    width: '100%',
    opacity: 0.15, 
  },
  content: {
    marginTop: 10,
    marginLeft: 24, 
    paddingBottom: 10,
    gap: 8,
  },
});