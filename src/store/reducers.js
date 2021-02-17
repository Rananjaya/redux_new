import  {ADDITION,SUBTRACTION} from './actionTypes';
const inialState = {
    counter : 0,
};

export const mainReducer =(state = inialState, action)=>{
    switch (action.type){
           case ADDITION :
               return {...state, counter : state.counter + 1};

               case SUBTRACTION :
               return {...state, counter : state.counter - 1};
               
           default:
               return state;
    }
}