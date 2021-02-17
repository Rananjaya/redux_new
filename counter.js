import React, {useState} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const Counter = (props) =>{

    const [counter, setCounter] = useState(0); 

    const addtion_hadelr = ()=>{

        setCounter(counter + 1);
    }

    const sub = ()=>{

        setCounter(counter - 1);
    }
 
    return(
        <View style={{flex :1,justifyContent : "center",alignItems:"center"}}>
        <Button title="Add" onPress={()=> addtion_hadelr()}/>
            <Text>{counter}</Text>
        <Button title="subtract" onPress={() => sub()}/>
    </View>
    );

}

export default Counter;