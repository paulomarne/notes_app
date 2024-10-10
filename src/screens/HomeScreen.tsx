/* eslint-disable react/no-unstable-nested-components */
import {View, Text, FlatList, StyleSheet, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Note} from '../types';
import {getAllNotes} from '../../services/noteService';
import NoteItem from '../components/NoteItem';
import {useFocusEffect} from '@react-navigation/native';

export default function HomeScreen() {
  const [notes, setNotes] = useState<Note[]>([]);

  useFocusEffect(() => {
    getAllNotes().then(allNotes => setNotes(allNotes));
  });

  return (
    <FlatList
      style={styles.container}
      data={notes}
      renderItem={({item}) => <NoteItem id={item.id} text={item.text} />}
      keyExtractor={note => note.id}
      ListEmptyComponent={() => (
        <View style={styles.noNotes}>
          <Text>Add Notes</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: StatusBar.currentHeight,
  },
  noNotes: {
    alignItems: 'center',
  },
});
