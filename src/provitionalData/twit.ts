import PostProps from "../interfeces/componets/postProps";
import { View, Text, Image, StyleSheet } from 'react-native';

const tweets: PostProps[] = [
    {
      id: 1,
      user: "MarcoElizondo",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      message: "",
      comments: " HOLA",
      likes: 150,
      shares: 20,
      destacados: true,
      bookmark: false,
      image: require("../../assets/minecraft.jpeg")
    },
    {
      id: 2,
      user: "JaneDoe",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      message: "Explorando nuevas tecnologías. ¿Alguna recomendación? 🤔",
      comments: ["HOLA", "HI", "test"],
      likes: 95,
      shares: 10,
      destacados: true,
      bookmark: false,
      image: require("../../assets/icon.png")
    },
    {
      id: 3,
      user: "TechGuy",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      message: "",
      comments: ["HOLA", "HI", "test"],
      likes: 250,
      shares: 50,
      destacados: true,
      bookmark: false,
      image: require("../../assets/icon.png")
    },
    {
      id: 4,
      user: "DevMaster",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      message: "El código limpio es la clave del éxito. 🧹💻",
      comments: ["HOLA", "HI", "test"],
      likes: 70,
      shares: 15,
      destacados: false,
      bookmark: false
    },
    {
      id: 5,
      user: "MarcoElizondo",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      message: "¡React Native es increíble! 🚀🔥",
      comments: ["HOLA", "HI", "test"],
      likes: 150,
      shares: 20,
      destacados: true,
      bookmark: false,
    },
    {
      id: 6,
      user: "JaneDoe",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      message: "lorem ipsum",
      comments: ["HOLA", "HI", "test"],
      likes: 95,
      shares: 10,
      destacados: false,
      bookmark: false,
    },
    {
      id: 7,
      user: "TechGuy",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
      message:  "https://randomuser.me/api/portraits/men/7.jpIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      comments: ["HOLA", "HI", "test"],
      likes: 250,
      shares: 50,
      destacados: true,
      bookmark: false,
    },
    {
      id: 8,
      user: "DevMaster",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
      message: "El código limpio es la clave del éxito. 🧹💻",
      comments: ["HOLA", "HI", "test"],
      likes: 70,
      shares: 15,
      destacados: false,
      bookmark: false,
    },
  ];

  export default tweets