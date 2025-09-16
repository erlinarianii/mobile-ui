import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Params = { id?: string };

const DATA = {
chevrolet: {
title: 'Super Chevrolet Service',
image: require('../../assets/images/image1.png'),
logo: require('../../assets/images/chevrolet.jpg'),
deals: ['50% dine in discount', '40% dine in discount'],
info:
'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
howTo: [
'Amet minim mollit non deserunt ullamco.',
'Velit officia do amet sint. Velit officia.',
'Exercitation veniam consequat sunt nostrud.',
],
terms:
'Amet minim mollit non deserunt ullamco, velit officia consequat duis enim velit mollit. Exercitation veniam.',
},
bosch: {
title: 'Bosch Service',
image: require('../../assets/images/image1.png'),
logo: require('../../assets/images/Bosch-service.png'),
deals: ['30% dine in discount', '20% dine in discount'],
info:
'Deskripsi promo Bosch. Velit officia consequat duis enim velit mollit.',
howTo: ['Datang ke outlet', 'Tunjukkan kupon', 'Selesaikan pembayaran'],
terms: 'Syarat dan ketentuan berlaku.',
},
} as const;

export default function BenefitDetail() {
const router = useRouter();
const { id } = useLocalSearchParams<Params>();
const key = typeof id === 'string' && id in DATA ? (id as 'chevrolet' | 'bosch') : 'chevrolet';
const item = DATA[key];

return (
<SafeAreaView style={{ flex: 1, backgroundColor: '#EFEFEF' }}>
<Stack.Screen options={{ title: item.title }} />
  <ScrollView
    style={{ flex: 1 }}
    contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
    contentInsetAdjustmentBehavior="automatic"
    scrollEventThrottle={16}
    decelerationRate="normal"
    showsVerticalScrollIndicator={false}
    overScrollMode="never"
    directionalLockEnabled
  >
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="pricetag" size={16} color="#1e3a8a" />
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>

      <Image source={item.image} style={styles.hero} />

      {item.deals.map((label, i) => (
        <Pressable key={i} style={[styles.dealBtn, i === 0 ? styles.dealPrimary : styles.dealSecondary]}>
          <Text style={styles.dealTxt}>{label}</Text>
        </Pressable>
      ))}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Info</Text>
        <Text style={styles.sectionText}>{item.info}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How to use</Text>
        {item.howTo.map((t, i) => (
          <Text key={i} style={styles.sectionText}>{`${i + 1}. ${t}`}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Terms & Conditions</Text>
        <Text style={styles.sectionText}>{item.terms}</Text>
        <Pressable onPress={() => {}}>
          <Text style={styles.link}>Learn more</Text>
        </Pressable>
      </View>

      <View style={styles.brandCard}>
        <Image source={item.logo} style={styles.brandLogo} />
        <Text style={styles.brandName}>{item.title}</Text>
      </View>
    </View>
  </ScrollView>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
card: { backgroundColor: '#fff', borderRadius: 16, padding: 12, gap: 12 },
cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 6 },
cardTitle: { fontSize: 14, fontWeight: '600', color: '#0f172a' },
hero: { width: '100%', height: 170, borderRadius: 12 },
dealBtn: { borderRadius: 12, paddingVertical: 10, paddingHorizontal: 14 },
dealPrimary: { backgroundColor: '#0b1f69' },
dealSecondary: { backgroundColor: '#6C2BD9' },
dealTxt: { color: '#fff', fontWeight: '600', textAlign: 'left' },
section: { backgroundColor: '#F7F7F8', borderRadius: 12, padding: 12, gap: 8 },
sectionTitle: { fontSize: 13, fontWeight: '700', color: '#0f172a' },
sectionText: { fontSize: 12, color: '#111827' },
link: { fontSize: 12, color: '#1e3a8a', fontWeight: '600', marginTop: 4 },
brandCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 12, padding: 10, marginTop: 8, gap: 10, borderWidth: 1, borderColor: '#E5E7EB' },
brandLogo: { width: 32, height: 32, borderRadius: 16 },
brandName: { fontSize: 12, fontWeight: '600', color: '#0f172a' },
});
