import { StyleSheet, SafeAreaView, Text, Pressable } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  // destructuring - take the token, tracks, getSpotifyAuth
  // getSpotifyAuth is a function we can call
  // tracks is an array of your songs
  // token is a variable that represents whether you're authenticated or not 

  let contentDisplayed = null;
  // let variable because it will be reassigned

  if (token) {
    contentDisplayed = <SongList tracks={tracks}/>
  } else {
    // pass as prop
    contentDisplayed = (
      <SpotifyAuthButton authenticationFunction={getSpotifyAuth} />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
      {/* <Text style={{ color: "white" }}>Welcome to Assignment 3 - Spotify</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  authButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 999999,
  },
  authText: {
    color: "white",
  },
});
