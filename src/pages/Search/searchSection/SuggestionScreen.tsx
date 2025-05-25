import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from "react-native";
import recordsData from "../../../provitionalData/records";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function SuggestionScreen() {
  // Simulación: algunos items serán "videos" para mostrar el icono de play
  const data = recordsData.map((item, idx) => ({ ...item, isVideo: idx % 3 === 1 }));

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.avatar }} style={styles.cardImage} />
            {item.isVideo && (
              <View style={styles.playOverlay}>
                <Icon name="play-circle" size={46} color="#fff" style={{ opacity: 0.85 }} />
              </View>
            )}
            <View style={styles.cardFooter}>
              <View style={styles.footerLeft}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <Text style={styles.username}>{item.user}</Text>
              </View>
              <View style={styles.footerRight}>
                <TouchableOpacity>
                  <Icon name="heart-o" size={18} color="#222" />
                </TouchableOpacity>
                <Text style={styles.likes}>13k</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingTop: 6,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginHorizontal: 4,
    marginBottom: 4,
    overflow: 'hidden',
    width: '48%',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.30)',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginRight: 6,
  },
  username: {
    fontSize: 13,
    color: '#222',
    fontWeight: '600',
  },
  footerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  likes: {
    fontSize: 12,
    color: '#222',
    marginLeft: 3,
    fontWeight: '500',
  },
});
