import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const currentlyLiveUserItem = ({ item }) => (
<View style={styles.currently_live_user_item}>
<Image
    style={styles.song_cover}
    source={{uri: item.song_cover}}
    />
<Text style={styles.song_name}>{item.song_name}</Text>
<Text style={styles.user_name}>{item.user_name}</Text>
<Text style={styles.user_name}>{item.user_name}</Text>
<Text style={styles.views_count}>{item.views_count}</Text>
</View>
  );

const CurrentlyLiveUser = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.currently_live_user}
    data={item}
    renderItem={currentlyLiveUserItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default CurrentlyLiveUser;

const styles = StyleSheet.create({
    'song_cover': {
        'width': '32vw',
        'height': '32vw',
        'marginTop': 5,
        'marginHorizontal': 10,
        'borderRadius': 6
    },
    'song_name': {
        'color': '#080707',
        'fontSize': 18,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'user_name': {
        'color': '#7c7979',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'views_count': {
        'color': '#797777',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});