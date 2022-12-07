import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import CurrentlyLiveUser from './CurrentlyLiveUser'
import RecommendedSongList from './RecommendedSongList'

const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<CurrentlyLiveUser item={item.currently_live_user}/>
<RecommendedSongList item={item.recommended_song_list}/>
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({
    
});