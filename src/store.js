import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
import notifyReducer from './reducers/notifyReducer';
import settignsReducer from './reducers/settignsReducer';

const firebaseConfig = {
    apiKey: "AIzaSyBMcDiBPInpVVutWHesXRnajs3UR4eDqfI",
    authDomain: "reactclientpanel-27144.firebaseapp.com",
    databaseURL: "https://reactclientpanel-27144.firebaseio.com",
    projectId: "reactclientpanel-27144",
    storageBucket: "reactclientpanel-27144.appspot.com",
    messagingSenderId: "270903831845",
    appId: "1:270903831845:web:f471ffe1b0f71aec"
  };

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settignsReducer
});

// Check for settings in localStorage
if(localStorage.getItem('settings') === null){
  // Default
  const defaultSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  }

  // Set to localStorage
  localStorage.setItem('settings', JSON.stringify(defaultSettings))
}

// Create initial state
const initialState = { 
  settings: JSON.parse(localStorage.getItem('settings')) 
};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;