/* eslint-disable react/no-unstable-nested-components */
import {View, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NoteScreenRouteProps} from '../types';
import {getNoteById} from '../../services/noteService';
import SaveNoteButton from '../components/SaveNoteButton';

export default function NoteScreen() {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const route = useRoute<NoteScreenRouteProps>();
  const id = route.params.id;

  // Adicionar botões para chamada de API interna URI (Email / Whatsapp)

  useEffect(() => {
    if (id) {
      getNoteById(id).then(note => setText(note?.text!));
    }
  }, [id]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveNoteButton id={id ?? ''} text={text} />,
    });
  }, [id, navigation, text]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        autoFocus
        multiline
        textAlignVertical="top"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 16,
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ffb70342',
  },
});
