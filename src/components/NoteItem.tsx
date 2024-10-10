import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Note} from '../types';
import {useNavigation} from '@react-navigation/native';
import {deleteNote} from '../../services/noteService';

export default function NoteItem({id, text}: Note) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Note', {id})}
      style={styles.note}>
      <View>
        <Text>{text}</Text>
        <Pressable onPress={() => deleteNote(id)} style={styles.deleteButton}>
          <Text style={styles.deleteText}>✖️</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  note: {
    padding: 10,
    fontSize: 16,
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 10,
    height: 100,
  },
  deleteButton: {
    position: 'absolute',
    right: -5,
    top: -5,
    padding: 2,
  },
  deleteText: {
    fontWeight: 'bold',
  },
});
