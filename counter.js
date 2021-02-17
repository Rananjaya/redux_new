import React, {useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addition,subtrcation} from './src/store/action';

const Counter = (props) =>{

    // const [counter, setCounter] = useState(0); 

    // const addtion_hadelr = ()=>{

    //     setCounter(counter + 1);
    // }

    // const sub = ()=>{

    //     setCounter(counter - 1);
    // }

    const data = useSelector((state) =>state.counter);
    const dispatch = useDispatch();
 
    return(
        <View style={{flex :1,justifyContent : "center",alignItems:"center"}}>
        <Button title="Add" onPress={() =>dispatch(addition())} />
            <Text>{data}</Text>
        <Button title="subtract" onPress={() =>dispatch(subtrcation())}/>
    </View>
    );

}

export default Counter;