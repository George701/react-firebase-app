import { createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';

// TODO: Reducers

const firebaseConfig = {
    apiKey: "AIzaSyB2AO45bIW01boUHXlh0N1-coAdAkRwOQs",
    authDomain: "react-firebase-app-1c0c0.firebaseapp.com",
    databaseURL: "https://react-firebase-app-1c0c0.firebaseio.com",
    projectId: "react-firebase-app-1c0c0",
    storageBucket: "react-firebase-app-1c0c0.appspot.com",
    messagingSenderId: "925416058341"
};

// react-redux-firebase config
const  rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
};

// Init firebase instance

firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

// Initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;

