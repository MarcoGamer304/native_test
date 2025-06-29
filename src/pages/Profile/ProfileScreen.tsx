import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native";
import Post from "../Home/components/Post";
import tweets from "../../provitionalData/twit";
import { TPost } from "../Home/models/types/TPost";

import ScreenBorder from "../../components/ScreenBorders";
export default function ProfileScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Games");

  return (
    <ScreenBorder header={false} searchBar={false}>
      <View style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
        {}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back-outline" size={28} />
        </TouchableOpacity>
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: "https://wallpapers.com/images/high/kanao-tsuyuri-monochrome-9wn1qa2zu5ufkvfa.webp",
            }}
            style={styles.banner}
          />
          <View style={styles.avatarWrapper}>
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/40/47/af/4047af856340397b1e80849815f528a4.jpg",
              }}
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
            Lorem ipsum dolor sit amet consectetur. Mattis dapibus velit cras
            elementum dictum cursus diam hac id. Diam vulputate a interdum sed.
            Urna consequat mi nisi elementum sed lacinia varius non mus.
          </Text>
          <View style={styles.rowInfo}>
            <Text style={styles.location}>
              <Icon name="location-sharp" size={14} /> Madrid
            </Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.date}>Member since 2022</Text>
          </View>
          <View style={styles.rowInfo}>
            <Text style={styles.stats}>
              <Text style={styles.bold}>3K</Text> Followers
            </Text>
            <Text style={styles.dot}>·</Text>
            <Text style={styles.stats}>
              <Text style={styles.bold}>68</Text> Following
            </Text>
          </View>
        </View>
        <View style={styles.tabsRow}>
          {["Games", "Posts", "Replies", "Liked"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={activeTab === tab ? styles.tabActive : styles.tab}
              onPress={() => setActiveTab(tab)}
              activeOpacity={0.7}
            >
              <Text
                style={
                  activeTab === tab ? styles.tabTextActive : styles.tabText
                }
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ flex: 1 }}>
          {activeTab === "Games" && (
  <View style={{ flex: 1, width: '100%', padding: 8 }}>
    {[
      {
        id: 1,
        title: 'Fortnite',
        hours: '12h registradas',
        trophies: '5/20',
        percent: 95,
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg',
        icons: [
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
        ],
        platform: 'logo-playstation',
        platformAlt: 'logo-game-controller',
        platformLabel: 'PlayStation',
        publisher: require('../../../assets/epicgames.png'),
      },
      {
        id: 2,
        title: 'Genshin Impact',
        hours: '12h registradas',
        trophies: '5/20',
        percent: 80,
        image: 'https://alfabetajuega.com/hero/2020/09/genshin-impact.jpg?width=1200&aspect_ratio=16:9',
        icons: [
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
        ],
        platform: 'logo-playstation',
        platformAlt: 'logo-game-controller',
        platformLabel: 'PlayStation',
        publisher: null,
      },
      {
        id: 3,
        title: 'It Takes Two',
        hours: '12h registradas',
        trophies: '5/20',
        percent: 95,
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202011/1304/1W0n0K0v1bU4pKJ5J2s7E7rJ.png',
        icons: [
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
          require('../../../assets/trophy.png'),
        ],
        platform: 'logo-xbox',
        platformAlt: 'logo-game-controller',
        platformLabel: 'Xbox',
        publisher: null,
      },
    ].map((game) => (
      <View
        key={game.id}
        style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderRadius: 10,
          marginBottom: 16,
          shadowColor: '#000',
          shadowOpacity: 0.07,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 2,
          alignItems: 'center',
          padding: 8,
        }}
      >
        <Image
          source={{ uri: game.image }}
          style={{ width: 110, height: 110, borderRadius: 8, marginRight: 10 }}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#232323' }}>{game.title}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
              {game.publisher && (
                <Image source={game.publisher} style={{ width: 22, height: 22, marginRight: 2 }} />
              )}
              <Icon name={game.platform} size={22} color="#232323" />
            </View>
          </View>
          <Text style={{ color: '#555', fontSize: 13, marginBottom: 2 }}>{game.hours}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
            <Icon name="trophy-outline" size={16} color="#232323" style={{ marginRight: 3 }} />
            <Text style={{ fontWeight: 'bold', marginRight: 8 }}>{game.trophies}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {game.icons.map((icon, idx) => (
                <Image key={idx} source={icon} style={{ width: 20, height: 20, marginRight: 2 }} />
              ))}
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <View
              style={{
                flex: 1,
                height: 13,
                backgroundColor: '#eee',
                borderRadius: 8,
                overflow: 'hidden',
                marginRight: 7,
              }}
            >
              <View
                style={{
                  width: `${game.percent}%`,
                  height: '100%',
                  backgroundColor: '#e53935',
                  borderRadius: 8,
                }}
              />
            </View>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#232323' }}>{game.percent}%</Text>
          </View>
        </View>
      </View>
    ))}
  </View>
)}
          {(activeTab === "Posts" ||
            activeTab === "Replies" ||
            activeTab === "Liked") && (
            <FlatList
              data={tweets}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }: { item: TPost }) => (
                <Post
                  id={item.id}
                  user={item.user}
                  message={item.message}
                  avatar={item.avatar}
                  comments={item.comments}
                  likes={item.likes}
                  shares={item.shares}
                  bookmark={item.bookmark}
                  image={"item.image"}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingBottom: 32,
              }}
              style={{ flex: 1 }}
            />
          )}
        </View>
      </View>
    </ScreenBorder>
  );
}

import { styles } from './components/ProfileComponents';
