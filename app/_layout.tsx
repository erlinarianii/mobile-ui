import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#EFEFEF" },
        headerTitleAlign: "center",
        headerTintColor: "navy",
        headerTitleStyle: { fontWeight: "bold" },
        headerShadowVisible: false
      }}
    >
      <Stack.Screen name="index" options={{ title: "Beranda" }} />
      <Stack.Screen name="voucher" options={{ title: "Voucher" }} />
    </Stack>
  )
}