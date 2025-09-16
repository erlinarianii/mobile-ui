import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";

export default function BottomNav() {
const router = useRouter();
const pathname = usePathname();

const items = [
{ key: "home", label: "Home", icon: "home-outline", route: "/" },
{ key: "driver", label: "Relief Driver", icon: "car-outline", route: "/driver" },
{ key: "jobs", label: "Jobs / Trips", icon: "briefcase-outline", route: "/jobs" },
{ key: "profile", label: "Profile", icon: "person-outline", route: "/profile" },
];

const isActive = (route: string) => {
if (route === "/") return pathname === "/" || pathname === "/index";
return pathname?.startsWith(route);
};

return (
<View style={styles.tabBar}>
{items.map(it => {
const active = isActive(it.route);
return (
<Pressable
key={it.key}
style={[styles.tabItem, active && styles.tabItemActive]}
onPress={() => router.push(it.route as any)}
android_ripple={{ color: "#E5E7EB" }}
>
<Ionicons name={it.icon as any} size={22} color={active ? "#1e3a8a" : "#0F172A"} />
<Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{it.label}</Text>
{active ? <View style={styles.activeDot} /> : null}
</Pressable>
);
})}
</View>
);
}

const styles = StyleSheet.create({
tabBar: {
position: "absolute",
left: 12,
right: 12,
bottom: 12,
backgroundColor: "#FFFFFF",
borderRadius: 20,
paddingHorizontal: 12,
paddingVertical: 10,
flexDirection: "row",
alignItems: "center",
justifyContent: "space-between",
shadowColor: "#000",
shadowOpacity: 0.15,
shadowRadius: 8,
shadowOffset: { width: 0, height: 4 },
elevation: 12,
},
tabItem: { alignItems: "center", justifyContent: "center", gap: 4, flex: 1 },
tabItemActive: {},
tabLabel: { fontSize: 10, color: "#0F172A" },
tabLabelActive: { color: "#1e3a8a", fontWeight: "600" },
activeDot: { position: "absolute", top: -6, width: 6, height: 6, borderRadius: 3, backgroundColor: "#1e3a8a" },
});