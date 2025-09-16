import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from '../components/buttom-nav';

export default function MyPage() {
return (
<SafeAreaView style={styles.container}>
<Text style={styles.text}>this is the profile page</Text>
<BottomNav />
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
text: { fontSize: 18, color: '#000' },
});