import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const recommendedSongListItem = ({ item }) => (
<View style={styles.recommended_song_list_item}>
<Image
    style={styles.recommended_song_cover}
    source={{uri: item.recommended_song_cover}}
    />
<Text style={styles.recommended_song_name}>{item.recommended_song_name}</Text>
<Text style={styles.recommended_user}>{item.recommended_user}</Text>
<Text style={styles.song_views}>{item.song_views}</Text>
<Text style={styles.like_count}>{item.like_count}</Text>
</View>
  );

const RecommendedSongList = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.recommended_song_list}
    data={item}
    renderItem={recommendedSongListItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default RecommendedSongList;

const styles = StyleSheet.create({
    'recommended_song_cover': {
        'width': '32vw',
        'height': '32vw',
        'marginTop': 5,
        'marginHorizontal': 10,
        'borderRadius': 6
    },
    'recommended_song_name': {
        'color': '#0b0909',
        'fontSize': 18,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'recommended_user': {
        'color': '#767474',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'song_views': {
        'color': '#7f7a7a',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 23
    },
    'like_count': {
        'color': '#7c7979',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});