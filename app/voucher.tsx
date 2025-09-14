// app/voucher/index.tsx
import { useState, useMemo } from "react";
import { Link } from "expo-router";
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from "react-native";
import { data } from "../data/voucherData";

type ActiveVoucher = { id: number; logo: any; merchant: string; title: string; expiry: string };
type PastVoucher = { id: number; logo: any; merchant: string; title: string; redeemedAt: string };
type Voucher = ActiveVoucher | PastVoucher;
const isActive = (v: Voucher): v is ActiveVoucher => "expiry" in v;

export default function MyVouchers() {
  const [tab, setTab] = useState<"aktif" | "riwayat">("aktif");

  const daftar: Voucher[] = useMemo(
    () => (tab === "aktif" ? (data.vouchers.active as ActiveVoucher[]) : (data.vouchers.past as PastVoucher[])),
    [tab]
  );

  return (
    <View style={ux.screen}>
      {/* Header */}
      <View style={ux.header}>
        <View style={ux.circleBtn}><Text style={ux.circleChevron}>‹</Text></View>
        <Text style={ux.headerTitle}>My Vouchers</Text>
        <View style={[ux.circleBtn, { opacity: 0 }]} />
      </View>

      {/* Segmented */}
      <View style={ux.segment}>
        <Pressable onPress={() => setTab("aktif")} style={[ux.segmentItem, tab === "aktif" && ux.segmentItemActive]}>
          <Text style={[ux.segmentText, tab === "aktif" && ux.segmentTextActive]}>Active</Text>
        </Pressable>
        <Pressable onPress={() => setTab("riwayat")} style={[ux.segmentItem, tab === "riwayat" && ux.segmentItemActive]}>
          <Text style={[ux.segmentText, tab === "riwayat" && ux.segmentTextActive]}>Past</Text>
        </Pressable>
      </View>

      {/* List */}
      <ScrollView contentContainerStyle={ux.listWrap}>
        {daftar.map((v) => (
          <Link key={v.id} href={`/voucher/${v.id}`} asChild>
            <Pressable style={ux.itemCard}>
              <View style={ux.itemLogoWrap}>
                <Image source={v.logo} style={ux.itemLogo} resizeMode="contain" />
              </View>

              <View style={ux.itemTextCol}>
                <Text style={ux.itemMerchant}>{v.merchant}</Text>
                <Text style={ux.itemTitle}>{v.title}</Text>
              </View>

              <View style={ux.itemRightCol}>
                <Text style={ux.validLabel}>{isActive(v) ? "Valid until" : "Redeemed"}</Text>
                <Text style={ux.validDate}>{isActive(v) ? v.expiry : v.redeemedAt}</Text>
              </View>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}

const ux = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F2F2F5", paddingHorizontal: 16, paddingTop: 16 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 12 },
  circleBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#E5E7EB" },
  circleChevron: { fontSize: 22, color: "#1F2937", lineHeight: 22 },
  headerTitle: { fontSize: 16, fontWeight: "700", color: "#0F172A" },

  segment: { flexDirection: "row", backgroundColor: "#FFFFFF", borderRadius: 12, padding: 4, borderWidth: 1, borderColor: "#E5E7EB", marginBottom: 12 },
  segmentItem: { flex: 1, paddingVertical: 10, borderRadius: 8, alignItems: "center" },
  segmentItemActive: { backgroundColor: "#173CFF" },
  segmentText: { fontWeight: "700", color: "#64748B" },
  segmentTextActive: { color: "#FFFFFF" },

  listWrap: { paddingBottom: 24, gap: 12 },
  itemCard: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF", borderRadius: 12, padding: 12, borderWidth: 1, borderColor: "#E5E7EB" },
  itemLogoWrap: { width: 48, height: 48, borderRadius: 24, backgroundColor: "#F3F4F6", alignItems: "center", justifyContent: "center", marginRight: 12 },
  itemLogo: { width: 40, height: 40 },
  itemTextCol: { flex: 1 },
  itemMerchant: { fontSize: 12, color: "#1F2937", fontWeight: "600", marginBottom: 2 },
  itemTitle: { fontSize: 14, color: "#0F172A", fontWeight: "700" },
  itemRightCol: { alignItems: "flex-end" },
  validLabel: { fontSize: 11, color: "#64748B" },
  validDate: { fontSize: 12, color: "#EF4444", fontWeight: "700" },
});
