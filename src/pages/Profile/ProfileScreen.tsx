import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import { FlatList } from 'react-native';
import Post from '../../components/Post';
import tweets from '../../provitionalData/twit';

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Games');
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={28}/>
      </TouchableOpacity>
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: 'https://wallpapers.com/images/high/kanao-tsuyuri-monochrome-9wn1qa2zu5ufkvfa.webp' }}
          style={styles.banner}
        />
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'https://i.pinimg.com/736x/40/47/af/4047af856340397b1e80849815f528a4.jpg' }}
            style={styles.avatar}
          />
        </View>
        {}
        <TouchableOpacity style={styles.editProfileBtn}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.name}>Marco Elizondo</Text>
        <Text style={styles.username}>@marcoelizondo</Text>
        <Text style={styles.bio}>
          Lorem ipsum dolor sit amet consectetur. Mattis dapibus velit cras elementum dictum cursus diam hac id. Diam vulputate a interdum sed. Urna consequat mi nisi elementum sed lacinia varius non mus.
        </Text>
        <View style={styles.rowInfo}>
          <Text style={styles.location}><Icon name="location-sharp" size={14}/> Madrid</Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.date}>Member since 2022</Text>
        </View>
        <View style={styles.rowInfo}>
          <Text style={styles.stats}><Text style={styles.bold}>3K</Text> Followers</Text>
          <Text style={styles.dot}>·</Text>
          <Text style={styles.stats}><Text style={styles.bold}>68</Text> Following</Text>
        </View>
      </View>
      <View style={styles.tabsRow}>
        {['Games', 'Posts', 'Replies', 'Liked'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={activeTab === tab ? styles.tabActive : styles.tab}
            onPress={() => setActiveTab(tab)}
            activeOpacity={0.7}
          >
            <Text style={activeTab === tab ? styles.tabTextActive : styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ flex: 1 }}>
        {activeTab === 'Games' && (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* Aquí puedes agregar contenido de juegos en el futuro */}
          </View>
        )}
        {(activeTab === 'Posts' || activeTab === 'Replies' || activeTab === 'Liked') && (
          <FlatList
            data={tweets}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Post {...item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center', paddingBottom: 32 }}
            style={{ flex: 1 }}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 15,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainer: {
    position: 'relative',
    height: 180,
    backgroundColor: '#ddeafd',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    marginTop: 30,
  },
  banner: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    resizeMode: 'cover',
  },
  avatarWrapper: {
    position: 'absolute',
    left: 20,
    bottom: -40,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#f4f4f4',
    zIndex: 2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editProfileBtn: {
    position: 'absolute',
    right: 20,
    bottom: -48,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#aaa',
    zIndex: 2,
  },
  editProfileText: {
    color: '#14171A',
    fontWeight: 'bold',
  },
  infoSection: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#14171A',
  },
  username: {
    color: '#657786',
    fontSize: 16,
    marginBottom: 4,
  },
  bio: {
    color: '#14171A',
    marginBottom: 10,
  },
  rowInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  location: {
    color: '#657786',
    fontSize: 14,
  },
  date: {
    color: '#657786',
    fontSize: 14,
  },
  dot: {
    marginHorizontal: 5,
    color: '#657786',
    fontSize: 14,
  },
  stats: {
    color: '#14171A',
    fontSize: 15,
    marginTop: 7,
  },
  bold: {
    fontWeight: 'bold',
    color: '#14171A',
  },
  //modales para cambiar de seccion, solo es el diseño de momento
  tabsRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e1e8ed',
    marginTop: 10,
    marginBottom: 6,
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  tabActive: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 3,
    borderColor: '#e0245e',
  },
  tabText: {
    color: '#657786',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tabTextActive: {
    color: '#e0245e',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
