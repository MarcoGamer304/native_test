import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../Header";

export default function ScreenBorder({ children }) {
    return (
        <View style={styles.container}>
            <SafeAreaProvider >
                <SafeAreaView style={styles.container} edges={["bottom"]} >
                    <Header avatar={"https://randomuser.me/api/portraits/women/2.jpg"} logo={"https://img.freepik.com/vector-premium/diseno-vectorial-todo-mundo-estilo-icono_822882-12052.jpg?semt=ais_hybrid"} />
                    <ScrollView style={styles.scrollContainer}
                        contentContainerStyle={{ flexGrow: 1 }}
                        showsVerticalScrollIndicator={false}>
                        {children}
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: "#ddr1e6",
        padding: 10,
    },
});