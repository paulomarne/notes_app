import AsyncStorage from '@react-native-async-storage/async-storage';
import {Note} from '../src/types';

let KEY = 'NOTES_APP';

export async function getAllNotes() {
  const notes = (await AsyncStorage.getItem(KEY)) ?? '[]';
  return JSON.parse(notes) as Note[];
}

export async function saveNotesToStore(notes: Note[]) {
  AsyncStorage.setItem(KEY, JSON.stringify(notes));
}

export async function getNoteById(id: string) {
  const notes = await getAllNotes();
  return notes.find(note => note.id === id);
}

export async function saveNote(text: string) {
  const notes = await getAllNotes();
  notes.push({id: Date.now().toString(), text});
  saveNotesToStore(notes);
}

export async function editNote(id: string, text: string) {
  const notes = await getAllNotes();
  const noteIndex = notes.findIndex(note => note.id === id);

  notes.splice(noteIndex, 1, {
    id,
    text,
  });

  saveNotesToStore(notes);
}

export async function deleteNote(id: string) {
  const notes = await getAllNotes();
  const noteIndex = notes.findIndex(note => note.id === id);

  notes.splice(noteIndex, 1);

  saveNotesToStore(notes);
}
