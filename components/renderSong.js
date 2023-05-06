// in general functions should be capitalized but this is ok bc it's being called within the function
import Song from '../components/Song';

const renderSong = ({ item, index }) => {
    console.log(item);
    console.log(item.imageUrl);
    return(
    <Song
    index={index}
    albumName={item.albumName}
    imageUrl={item.imageUrl}
    externalUrl={item.externalUrl}
    songTitle={item.songTitle}
    songArtists={item.songArtists}
    duration={item.duration}
    />)
  };

export default renderSong;