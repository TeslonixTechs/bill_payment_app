import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native';

// Make sure you've installed expo-av and imported it correctly
import * as VideoThumbnails from 'expo-video-thumbnails';
import { Audio, Video } from 'expo-av';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const file = require('../../assets/video-1.mp4')
const VideoPlayer = () => {
  const [videos, setVideos] = useState([
    { id: 1, fileUri: file, likes: 100, comments: 20, liked: false },
    { id: 2, fileUri: file, likes: 50, comments: 10, liked: false },
    { id: 3, fileUri: file, likes: 200, comments: 30, liked: false },
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
    <View style={{ flex: 1, backgroundColor: 'black' }} className="relative">
      <FlatList
        data={videos}
        horizontal={true}
        renderItem={({ item, index }) => (
          <View style={{ width, height: height - 50}}>
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
                  height: height,
                  backgroundColor: 'black',
                }}
              />
            )}
            <View className="w-20 h-80 absolute bottom-0 right-0 flex items-center justify-evenly">
              <TouchableOpacity onPress={()=>{handleLike(index)}} className="flex items-center"><Icon name={`${item.liked ? 'heart' : 'heart-outline'}`} color={`${item.liked ? 'red' : 'gainsboro'}`} size={30} /><Text className="text-slate-200">{item.likes}</Text></TouchableOpacity>
              <TouchableOpacity className="flex items-center"><Icon name={`comment-outline`} color={`gainsboro`} size={30} /><Text className="text-slate-200">{item.comments}</Text></TouchableOpacity>
              <TouchableOpacity className="flex items-center"><Icon name={`send-outline`} color={`gainsboro`} size={30} /><Text className="text-slate-200">{item.likes}</Text></TouchableOpacity>
              <TouchableOpacity className="flex items-center"><Icon name={`bookmark-outline`} color={`gainsboro`} size={30} /><Text className="text-slate-200">{item.likes}</Text></TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        onViewableItemsChanged={({ viewableItems }) => {
          const newIndex = viewableItems[0].index;
          handlePagination(newIndex);
        }}
        onScrollToIndexFailed={() => {
          const nextIndex = (currentIndex + 1) % videos.length;
          setCurrentIndex(nextIndex);
        }}
      />
      <TouchableOpacity className="h-10 w-10 rounded-full bg-zinc-600 absolute top-[7%] flex justify-center items-center right-3" onPress={handleTap}><Icon name={`${muted ? 'volume-off' : 'volume-high'}`} size={17} color="ghostwhite" /></TouchableOpacity>
      <View className="w-full px-5 flex-row justify-evenly items-center absolute top-5"><View className="h-1 rounded-3xl w-24 bg-slate-300" /><View className="h-1 rounded-3xl w-24 bg-slate-300" /><View className="h-1 rounded-3xl w-24 bg-slate-300" /></View>
    </View>
  );
};

export default VideoPlayer;