import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native';

// Make sure you've installed expo-av and imported it correctly
import * as VideoThumbnails from 'expo-video-thumbnails';
import { Audio, Video } from 'expo-av';
const file = require('../../assets/video-1.mp4')
const VideoPlayer = () => {
  const [videos, setVideos] = useState([
    { id: 1, fileUri: file, likes: 100, comments: 20, liked: false },
    { id: 2, fileUri: file, likes: 50, comments: 10, liked: false },
    { id: 3, fileUri: file, likes: 200, comments: 30, liked: false },
    // ...
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(true);

  const { width, height } = Dimensions.get('window');

  const handleTap = () => {
    setMuted(!muted);
  };

  const handleVideoEnd = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
  };

  const handleLike = (index) => {
    const newVideos = [...videos];
    if (newVideos[index].liked) {
      newVideos[index].likes -= 1;
      newVideos[index].liked = false;
    } else {
      newVideos[index].likes += 1;
      newVideos[index].liked = true;
    }
    setVideos(newVideos);
  };

  const handlePagination = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <FlatList
        data={videos}
        renderItem={({ item, index }) => (
          <View style={{ width, height: height - 37}}>
            {index === currentIndex && (
              <Video
                ref={(ref) => {
                  if (ref) {
                    ref.setOnPlaybackStatusUpdate((status) => {
                      if (status.didJustFinish) {
                        handleVideoEnd();
                      }
                    });
                  }
                }}
                source={item.fileUri}
                resizeMode="cover"
                isMuted={muted}
                shouldPlay={index === currentIndex}
                style={{
                  width,
                  height: height - 45,
                  backgroundColor: 'black',
                }}
              />
            )}
            <TouchableOpacity onPress={() => handleLike(index)} style={{ position: 'absolute', bottom: 10, left: 10 }}>
              <Text style={{ color: item.liked ? 'red' : 'white' }}>{item.likes} likes</Text>
            </TouchableOpacity>
            <Text style={{ position: 'absolute', bottom: 10, right: 10, color: 'white' }}>
              {item.comments} comments
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        vertical={true}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        contentInset={{ bottom: 50 }}
        onViewableItemsChanged={({ viewableItems }) => {
          const newIndex = viewableItems[0].index;
          handlePagination(newIndex);
        }}
        onScrollToIndexFailed={() => {
          const nextIndex = (currentIndex + 1) % videos.length;
          setCurrentIndex(nextIndex);
        }}
      />
      <TouchableOpacity onPress={handleTap} style={{ position: 'absolute', top: 10, right: 10 }}>
        <Text style={{ color: 'white' }}>{muted ? 'Unmute' : 'Mute'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoPlayer;