import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import HNNavigator from './navigation/HNNavigator';
import userReducer from './store/reducers/user';
import teacherReducer from './store/reducers/teachers';
import courses from './store/reducers/courses';
import categories from './store/reducers/categories';

const fetchFonts = async () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
    'open-sans-light-italic': require('./assets/fonts/OpenSans-LightItalic.ttf'),
    'open-sans-italic': require('./assets/fonts/OpenSans-Italic.ttf'),
  });
}

const rootReducer = combineReducers({
  user: userReducer,
  teachers: teacherReducer,
  courses: courses,
  categories: categories
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)) );

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => { setFontLoaded(true) }}
      />
    )
  }

  return (
    <Provider store={store} >
      <HNNavigator />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
