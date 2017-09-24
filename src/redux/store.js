import { createStore } from "redux"
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducer from "./reducer"

persistStore(store, {storage: AsyncStorage})

const store = createStore(reducer);

export default store
