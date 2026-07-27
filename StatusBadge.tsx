import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from './theme';

type Status = 'success' | 'error';

// Order status is communicated with a colored dot ONLY.
export function StatusBadge({ status }: { status: Status }) {
  const dotColor =
    status === 'success' ? colors.light.success : colors.light.error;

  return (
    <View style={styles.row}>
      <View style={[styles.dot, { backgroundColor: dotColor }]} />
      <Text style={styles.label}>Order status</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 12, height: 12, borderRadius: 6, marginRight: 8 },
  label: { color: colors.light.textPrimary, fontSize: 14 },
});
