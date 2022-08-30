export interface ApiUsers {
  name?: string;
  email: string;
  password: string;
}

export interface ApiSignIn {
  email: string;
  password: string;
}

export interface WordContent {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
}

export interface OptionalUserWord {
  dateWhenItBecameLearned: string | false;
  dateWhenItBecameNew: string | false;
  gameInWhichItBecameNew: string | false;
  sprint: {
    totalCount: number;
    trueCount: number;
  };
  audioCall: {
    totalCount: number;
    trueCount: number;
  };
}

export interface UserWordContent {
  id: string;
  difficulty: string;
  wordId: string;
  optional: OptionalUserWord;
}
