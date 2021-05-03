import {createStore, combineReducers} from 'redux'

import numerosReducer from './reducers/numerosReducer' 


const reducers = combineReducers({
   numeros: numerosReducer,
   nomes: function(state, action){
        return ['Ana', 'Bia', 'Luiz']
   }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig