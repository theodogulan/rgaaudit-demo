import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from './theme';
import { StatusBadge } from './StatusBadge';

export function CheckoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {/* Helper text in light gray */}
      <Text style={styles.helper}>Free delivery on orders over 50 €</Text>

      <StatusBadge status="success" />

      {/* Promotional banner */}
      <View style={styles.promo}>
        <Text style={styles.promoText}>FLASH SALE -40% TODAY ONLY</Text>
      </View>

      {/* Primary CTA */}
      <Pressable style={styles.cta}>
        <Text style={styles.ctaLabel}>Pay 42,00 €</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.light.background, padding: 24 },
  title: { fontSize: 22, fontWeight: '700', color: colors.light.textPrimary },
  helper: { fontSize: 14, color: colors.light.textSecondary, marginVertical: 8 },
  promo: {
    backgroundColor: colors.light.promoBg,
    padding: 12,
    borderRadius: 8,
    marginVertical: 16,
  },
  promoText: { color: colors.light.promoText, fontSize: 16, fontWeight: '700' },
  cta: {
    backgroundColor: colors.light.brand,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaLabel: { color: colors.light.onBrand, fontSize: 18, fontWeight: '600' },
});
