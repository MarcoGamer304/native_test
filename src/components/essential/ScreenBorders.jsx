import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../Header";

export default function ScreenBorder({ children, header = true, scrollable = true, searchBar = false }) {
    return (
        <View style={styles.container}>
            <SafeAreaProvider >
                <SafeAreaView style={styles.container} edges={["bottom"]} >
                    {header ?
                        <Header avatar={"https://randomuser.me/api/portraits/women/2.jpg"} searchBar={searchBar}/>
                        : <></>}
                    <View style={styles.scrollContainer}>
                        {scrollable ?
                            <ScrollView
                                contentContainerStyle={{ flexGrow: 1 }}
                                showsVerticalScrollIndicator={false}>
                                {children}
                            </ScrollView>
                            : <>{children}</>}
                    </View>
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