import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import millisToMinutesAndSeconds from '../utils/millisToMinutesAndSeconds';
  
  // {"albumName": "Milk Teeth", 
  // "duration": 193500, 
  // "externalUrl": "https://open.spotify.com/track/6JZj85Iz5sc4cGKvOefO7G", 
  // "imageUrl": "https://i.scdn.co/image/ab67616d0000b2733ec634678874418d43d1c3c6", 
  // "previewUrl": "https://p.scdn.co/mp3-preview/b921965d664dc5062f7cb8eb66ed3b63e8c6ba58?cid=4c8d6f55285043b0bf8b24da509b186e", 
  // "songArtists": [{"name": "Suki Waterhouse"}], 
  // "songTitle": "Neon Signs"}

  export default function Song({ albumName, imageUrl, externalUrl, songTitle, songArtists, duration, index }) {
    console.log(imageUrl);
    return (
        <View style={styles.listItem}>
          <View style={styles.songIndex}>
            <Text style={[styles.subtext]}>{index + 1}</Text>
          </View>
          <View style={styles.songImage}>
            <Image style={styles.image} 
              source={{
                uri: imageUrl,
              }}/>
          </View>
          <View style={styles.songText}>
            <Text style={[styles.text]}numberOfLines={1}>{songTitle}</Text>
            <Text style={[styles.subtext]}>{songArtists[0].name}</Text>
          </View>
          <View style={styles.songAlbum}>
            <Text style={[styles.text]} numberOfLines={1}>{albumName}</Text>
          </View>
          <View style={styles.songDuration}>
            <Text style={[styles.text]}>{millisToMinutesAndSeconds(duration)}</Text>
          </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    listItem: {
      backgroundColor: 'black',
      // marginVertical: 8,
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center', // vertical
    },
    songIndex: {
      width: '5%',
    },
    songImage: {
      width: '20%',
    },
    songText: {
      width: '35%',
      marginLeft: -20,
      paddingRight: 7,
    },
    songAlbum: {
      width: '30%',
      // backgroundColor: 'red'
      padding: 7,
    },
    songDuration: {
      width: '10%',
      // backgroundColor: 'red'
    },
    image: {
      width: 50,
      height: 50,
      borderWidth: 1,
      marginTop: 10,
      marginBottom: 10,
      resizeMode: 'contain',
    },
    text: {
      fontSize: 12,
      color: 'white',
      // fontWeight: 'bold',
      // marginBottom: 10,
    },
    subtext: {
      fontSize: 12,
      color: 'lightgrey',
      // fontWeight: 'bold',
      // marginBottom: 10,
    },
    itemName: {
      fontSize: 16,
      borderWidth: 1,
      width: 60,
      borderColor: 'blue',
      textAlign: 'center',
      // fontWeight: 'bold',
      // marginBottom: 10,
    }
  });