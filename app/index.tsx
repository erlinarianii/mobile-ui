import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { Image, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomNav from "../components/buttom-nav";
import { data } from "../data/voucherData";

export default function Home() {
const router = useRouter();

const events = [
{ id: "1", day: "12", month: "Jan", time: "8pm", title: "BTS Concert", venue: "National Stadium" },
{ id: "2", day: "13", month: "Jan", time: "9am", title: "BlackPink Show", venue: "National Stadium" },
{ id: "3", day: "16", month: "Jan", time: "7pm", title: "Comedy Central", venue: "National Stadium" },
];

return (
<SafeAreaView id="home" style={styles.screen}>
<Stack.Screen options={{ headerShown: false }} />
  <ScrollView
    style={styles.root}
    contentContainerStyle={{ paddingBottom: 140 }}
    contentInsetAdjustmentBehavior="automatic"
    decelerationRate="normal"
    scrollEventThrottle={16}
    showsVerticalScrollIndicator={false}
    overScrollMode="never"
    directionalLockEnabled
    removeClippedSubviews
  >
    {/* greeting */}
    <View style={styles.headerRow}>
      <Image source={require("../assets/images/user-pic.png")} style={styles.avatarImg} />
      <View style={styles.helloWrap}>
        <View style={styles.helloRow}>
          <Text style={styles.helloText}>
            Hello! <Text style={styles.nameBold}>John</Text>
          </Text>
          <Image source={require("../assets/images/star-sticker 1.png")} style={styles.badgeIcon} />
        </View>
      </View>
      <Pressable onPress={() => router.push("/")}>
        <View style={styles.notifyWrap}>
          <Ionicons name="notifications" size={22} color="navy" />
        </View>
      </Pressable>
    </View>

    {/* qr card */}
    <View style={styles.cardWrap}>
      <Image
        source={require("../assets/images/Group 1043.png")}
        style={styles.cardImage}
        resizeMode="cover"
      />
    </View>

    {/* Upcoming events */}
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Upcoming events</Text>
      <Text style={styles.linkText}>View all</Text>
    </View>

    <View style={styles.eventsWrap}>
      {events.map((ev) => (
        <View key={ev.id} style={styles.eventRow}>
          <View style={styles.eventPill}>
            <View style={styles.eventDate}>
              <Text style={styles.eventDateText}>
                {ev.day} {ev.month}
              </Text>
            </View>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.eventInfoText}>
              {ev.time} | {ev.title} | {ev.venue}
            </Text>
          </View>
        </View>
      ))}
    </View>

    {/* vouchers */}
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Your Vouchers</Text>
      <Pressable onPress={() => router.push("/voucher")}>
        <Text style={styles.linkText}>View All</Text>
      </Pressable>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator>
      {data.vouchers.active.map((voucher) => (
        <View key={voucher.id} style={styles.voucherCard}>
          <Image source={voucher.logo} style={[styles.voucherLogo, styles.voucherImageContainer]} resizeMode="contain" />
          <View>
            <Text style={styles.merchantText}>{voucher.merchant}</Text>
            <Text style={styles.voucherTitle}>{voucher.title}</Text>
            <View>
              <Text style={styles.metaSmall}>Valid Until</Text>
              <Text style={[styles.metaSmall, { color: "red", fontWeight: "bold", marginTop: 2 }]}>
                {voucher.expiry}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>

    {/* Benefits & Promotions */}
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Benefits & Promotions</Text>
      <Text style={styles.linkText}>View all</Text>
    </View>

    <View style={styles.promoGrid}>
      {/* Chevrolet */}
      <View style={styles.promoCard}>
        <Image source={require("../assets/images/chevrolet.jpg")} style={styles.promoImage} resizeMode="contain" />
        <Text style={styles.promoTitle}>Chevrolet Service</Text>
        <Text style={styles.promoSubtitle}>Free service check</Text>
        <Pressable
          style={styles.promoBtn}
          onPress={() =>
            router.push({ pathname: "/benefit/[id]", params: { id: "chevrolet" } })
          }
        >
          <Text style={styles.promoBtnText}>Get Coupon!</Text>
        </Pressable>
      </View>

      {/* Bosch */}
      <View style={styles.promoCard}>
        <Image source={require("../assets/images/Bosch-service.png")} style={styles.promoImage} resizeMode="contain" />
        <Text style={styles.promoTitle}>Bosch Service</Text>
        <Text style={styles.promoSubtitle}>Free service check</Text>
        <Pressable
          style={styles.promoBtn}
          onPress={() =>
            router.push({ pathname: "/benefit/[id]", params: { id: "bosch" } })
          }
        >
          <Text style={styles.promoBtnText}>Get Coupon!</Text>
        </Pressable>
      </View>

      {/* Chevrolet 2 */}
      <View style={styles.promoCard}>
        <Image source={require("../assets/images/chevrolet.jpg")} style={styles.promoImage} resizeMode="contain" />
        <Text style={styles.promoTitle}>Chevrolet Service</Text>
        <Text style={styles.promoSubtitle}>Free service check</Text>
        <Pressable
          style={styles.promoBtn}
          onPress={() =>
            router.push({ pathname: "/benefit/[id]", params: { id: "chevrolet" } })
          }
        >
          <Text style={styles.promoBtnText}>Get Coupon!</Text>
        </Pressable>
      </View>

      {/* Bosch 2 */}
      <View style={styles.promoCard}>
        <Image source={require("../assets/images/Bosch-service.png")} style={styles.promoImage} resizeMode="contain" />
        <Text style={styles.promoTitle}>Bosch Service</Text>
        <Text style={styles.promoSubtitle}>Free service check</Text>
        <Pressable
          style={styles.promoBtn}
          onPress={() =>
            router.push({ pathname: "/benefit/[id]", params: { id: "bosch" } })
          }
        >
          <Text style={styles.promoBtnText}>Get Coupon!</Text>
        </Pressable>
      </View>
    </View>

    {/* Recent Transactions */}
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Recent Transactions</Text>
      <Text style={styles.linkText}>View all</Text>
    </View>

    <View style={styles.txList}>
      {data.transactions.map((item) => (
        <View key={item.id} style={styles.txItem}>
          <Image source={item.logo} style={styles.txLogo} resizeMode="contain" />
          <View style={styles.txDetails}>
            <Text style={styles.txTitle}>{item.title}</Text>
            <Text style={styles.txDate}>{item.date}</Text>
          </View>
          <View style={styles.txRight}>
            <Text style={styles.txTime}>{item.time}</Text>
            <Text style={[styles.txAmount, item.type === "income" ? { color: "green" } : { color: "red" }]}>
              {item.amount}
            </Text>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>

  <BottomNav />
</SafeAreaView>
);
}

const styles = StyleSheet.create({
screen: { flex: 1, backgroundColor: "#EFEFEF" },
root: {
flex: 1,
backgroundColor: "#EFEFEF",
padding: 16,
paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
},
notifyWrap: { marginLeft: "auto", position: "relative" },
headerRow: { flexDirection: "row", alignItems: "center", gap: 8 },
avatarImg: { width: 32, height: 32, borderRadius: 16 },
helloWrap: { flex: 1 },
helloRow: { flexDirection: "row", alignItems: "center", gap: 6 },
helloText: { fontSize: 16, color: "black", fontWeight: "500" },
nameBold: { fontWeight: "bold" },
badgeIcon: { width: 16, height: 16 },
cardWrap: { marginTop: 12, marginBottom: 8 },
cardImage: { width: "100%", height: 160, borderRadius: 16, overflow: "hidden" },
eventsWrap: { gap: 10 },
eventRow: { paddingLeft: 0 },
eventPill: { flexDirection: "row", alignItems: "center", backgroundColor: "white", borderRadius: 16, overflow: "hidden" },
eventDate: { backgroundColor: "black", paddingHorizontal: 12, paddingVertical: 8, justifyContent: "center", alignItems: "center" },
eventDateText: { color: "white", fontSize: 13, fontWeight: "700" },
eventInfoText: { flex: 1, paddingVertical: 10, paddingHorizontal: 14, fontSize: 14, color: "black" },
sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
sectionTitle: { fontSize: 15, fontWeight: "600", color: "navy", marginVertical: 16 },
linkText: { color: "navy", fontWeight: "500" },
voucherCard: { flexDirection: "row", backgroundColor: "#fff", padding: 16, borderRadius: 16, marginRight: 16, alignItems: "center", width: 250, height: 120 },
voucherLogo: { width: 60, height: 60, marginRight: 12, borderRadius: 8 },
merchantText: { fontSize: 11, fontWeight: "bold", color: "navy" },
voucherTitle: { fontSize: 18, paddingBottom: 10, fontWeight: "bold", color: "#000" },
metaSmall: { fontSize: 11, color: "#555" },
voucherImageContainer: { backgroundColor: "#555961ff", padding: 10, borderRadius: 8 },
promoGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
promoCard: { backgroundColor: "#fff", borderRadius: 12, paddingBottom: 10, marginBottom: 12, width: "48%", alignItems: "center" },
promoImage: { width: "100%", height: 100, borderRadius: 8, marginBottom: 8, resizeMode: "cover" },
promoPlaceholder: { width: "100%", height: 100, borderRadius: 8, marginBottom: 8, backgroundColor: "#ddd" },
promoTitle: { fontSize: 13, fontWeight: "bold", textAlign: "center", color: "navy" },
promoSubtitle: { fontSize: 12, color: "grey", marginBottom: 8, textAlign: "center" },
promoBtn: { backgroundColor: "navy", borderRadius: 20, paddingVertical: 6, paddingHorizontal: 50, marginTop: 6 },
promoBtnText: { color: "#fff", fontSize: 12, fontWeight: "bold" },
txList: { backgroundColor: "#fff", borderRadius: 12, paddingVertical: 2 },
txItem: { flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "lightgrey", marginHorizontal: 12 },
txLogo: { width: 32, height: 32, borderRadius: 16, marginRight: 12 },
txDetails: { flex: 1 },
txTitle: { fontSize: 14, fontWeight: "bold", color: "black" },
txDate: { fontSize: 12, color: "grey" },
txRight: { alignItems: "flex-end" },
txAmount: { fontSize: 14, fontWeight: "bold" },
txTime: { fontSize: 12, color: "grey" },
});