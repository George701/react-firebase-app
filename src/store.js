import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
// @todo

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
//  const firestore = firebase.firestore();

 // Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
  )(createStore);

  // Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
  });


  // Create initial state
  const initialState = {};

  // Create store
  const store = createStoreWithFirebase(
      rootReducer,
       initialState,
       compose(
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
);

  export default store;