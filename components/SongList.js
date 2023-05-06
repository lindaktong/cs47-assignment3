import { FlatList, Text, StyleSheet, View, Image} from "react-native";
import Constants from 'expo-constants';
import renderSong from '../components/renderSong';

const SongList = ({tracks}) => {
    return (
    <View>
        <View style={styles.titleRow}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/spotify-logo.png')}
            />
            <Text style={styles.titleText}>My Top Tracks</Text>
        </View>
        <FlatList style={{width:"100%"}}
            data={tracks.slice(0,10)}
            // renderItem takes in an object - objects has keys of item, index, and separators
            // we can destructure certain parameters from an object
            // we can destructure out item value by just adding curly braces
            renderItem ={(item, index) => renderSong(item, index)}
            keyExtractor={(item, index) => index}
        />
    </View>
    );
};

export default SongList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 10,
    },
    titleRow: {
      flexDirection: 'row',
      padding: 20,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
    },
    tinyLogo: {
      width: 20,
      height: 20,
      marginRight: 5,
    },
  });