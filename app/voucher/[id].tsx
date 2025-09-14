// app/voucher/[id].tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { data } from "../../data/voucherData";

type ActiveVoucher = { id: number; logo: any; merchant: string; title: string; expiry: string };
type PastVoucher = { id: number; logo: any; merchant: string; title: string; redeemedAt: string };
type Voucher = ActiveVoucher | PastVoucher;
const isActive = (v: Voucher): v is ActiveVoucher => "expiry" in v;

export default function VoucherDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const all: Voucher[] = [
    ...(data.vouchers.active as ActiveVoucher[]),
    ...(data.vouchers.past as PastVoucher[]),
  ];
  const v = all.find((x) => String(x.id) === String(id));

  if (!v) {
    return (
      <View style={uxDetail.fallback}>
        <Text style={uxDetail.notFound}>Voucher tidak ditemukan</Text>
        <Pressable onPress={() => router.back()} style={uxDetail.backBtn}>
          <Text style={uxDetail.backBtnText}>Kembali</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={uxDetail.page} contentContainerStyle={{ paddingBottom: 24 }}>
      {/* Header */}
      <View style={uxDetail.header}>
        <Pressable onPress={() => router.back()} style={uxDetail.circleBtn}>
          <Text style={uxDetail.circleChevron}>‹</Text>
        </Pressable>
        <Text style={uxDetail.headerTitle}>My Vouchers</Text>
        <View style={[uxDetail.circleBtn, { opacity: 0 }]} />
      </View>

      {/* Poster */}
      <View style={uxDetail.posterCard}>
        <Image source={v.logo} style={uxDetail.posterImage} resizeMode="contain" />
      </View>

      {/* Blue pill */}
      <View style={uxDetail.bluePill}>
        <Text style={uxDetail.blueLeft} numberOfLines={1}>{v.title}</Text>
        <Text style={uxDetail.blueRight} numberOfLines={1}>
          {isActive(v) ? `Valid Until - ${v.expiry}` : `Redeemed - ${v.redeemedAt}`}
        </Text>
      </View>

      {/* Chip */}
      <View style={uxDetail.smallChip}>
        <Text style={uxDetail.smallChipText}>
          drivers.sg Exclusive!  Get a complimentary $10 NTUC Voucher
        </Text>
      </View>

      {/* Info list */}
      <View style={uxDetail.whiteCard}>
        <Text style={uxDetail.cardTitle}>24/7 Professional Towing & Roadside Solutions</Text>
        <View style={uxDetail.bullets}>
          {[
            "Vehicle Recovery / Towing",
            "Battery Jumpstart",
            "Vehicle Locksmith",
            "Breakdown Assistance",
            "Tyre Repair/Replacement",
          ].map((b) => (
            <Text key={b} style={uxDetail.bulletItem}>• {b}</Text>
          ))}
        </View>
      </View>

      {/* CTA */}
      <View style={uxDetail.ctaCard}>
        <Text style={uxDetail.ctaTop}>Tap to call {v.merchant}</Text>
        <Text style={uxDetail.ctaPhone}>+65 8588 8877</Text>
      </View>
    </ScrollView>
  );
}

const uxDetail = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#F2F2F5", paddingHorizontal: 16, paddingTop: 16 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  circleBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#E5E7EB" },
  circleChevron: { fontSize: 22, color: "#1F2937", lineHeight: 22 },
  headerTitle: { fontSize: 16, fontWeight: "700", color: "#0F172A" },

  posterCard: { backgroundColor: "#FFFFFF", borderRadius: 16, padding: 16, borderWidth: 1, borderColor: "#E5E7EB", marginBottom: 12 },
  posterImage: { width: "100%", height: 140 },

  bluePill: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#173CFF", borderRadius: 12, paddingVertical: 10, paddingHorizontal: 12, marginBottom: 12 },
  blueLeft: { color: "#FFFFFF", fontWeight: "700" },
  blueRight: { color: "#FFFFFF" },

  smallChip: { backgroundColor: "#FFFFFF", borderRadius: 12, paddingVertical: 12, paddingHorizontal: 12, borderWidth: 1, borderColor: "#E5E7EB", marginBottom: 12 },
  smallChipText: { color: "#0F172A" },

  whiteCard: { backgroundColor: "#FFFFFF", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: "#E5E7EB", marginBottom: 12 },
  cardTitle: { fontWeight: "700", color: "#0F172A", marginBottom: 8 },
  bullets: { gap: 6 },
  bulletItem: { color: "#0F172A" },

  ctaCard: { backgroundColor: "#FFFFFF", borderRadius: 12, paddingVertical: 14, alignItems: "center", borderWidth: 1, borderColor: "#E5E7EB" },
  ctaTop: { color: "#0F172A", marginBottom: 6 },
  ctaPhone: { color: "#EF4444", fontWeight: "800", fontSize: 16 },

  fallback: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F2F2F5", padding: 16 },
  notFound: { fontSize: 18, fontWeight: "700", color: "#0F172A", marginBottom: 12 },
  backBtn: { backgroundColor: "#173CFF", paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10 },
  backBtnText: { color: "#FFFFFF", fontWeight: "700" },
});
