import {Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function AddNoteButton() {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Note', {id: undefined})}>
      <Text>Add Note</Text>
    </Pressable>
  );
}
