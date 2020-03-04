import type from '../type';

const addJobReducer = (state={},action) =>{
    switch(action){
        case type.ADD: return [...state]
        default: return state;
    }
}

export default addJobReducer;