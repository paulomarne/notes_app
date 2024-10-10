import {Text, Pressable, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Note} from '../types';
import {editNote, saveNote} from '../../services/noteService';

export default function SaveNoteButton({id, text}: Note) {
  const navigation = useNavigation();

  async function handleSave() {
    if (!text) {
      Alert.alert('Warning', 'Enter Note');
      return;
    }

    if (id) {
      await editNote(id, text);
    } else {
      await saveNote(text);
    }

    navigation.navigate('Home');
  }
  return (
    <Pressable onPress={handleSave}>
      <Text>Save</Text>
    </Pressable>
  );
}
