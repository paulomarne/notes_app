import {RouteProp} from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type Note = {
  id: string;
  text: string;
};

export type RootStackParamList = {
  Home: undefined;
  Note: {id?: string};
};

export type NoteScreenRouteProps = RouteProp<RootStackParamList, 'Note'>;
