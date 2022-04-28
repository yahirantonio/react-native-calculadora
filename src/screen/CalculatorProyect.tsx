import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '../components/Button'
import { useCalculator } from '../hooks/useCalculator'

const CalculatorProyect = () => {
    const {state, 
        reset, 
        putANumber, 
        positiveToNegative,
        del,
        logicAplication,
    } = useCalculator()
  return (
    <View style={style.home}>
        <Text style={style.screen}>
            {state.toString().replace(/,/g,'')}
        </Text>
        <View style={style.principalContainer}>
            <View style={style.secondaryContainer}>
                <Button 
                    simbolo='C'
                    typeButton={1}
                    onPress={reset}
                />
                <Button 
                    simbolo='+/-'
                    typeButton={1}
                    onPress={positiveToNegative}
                /> 
                <Button 
                    simbolo='DEL'
                    typeButton={1}
                    onPress={del}
                />
                <Button 
                    simbolo={'/'}
                    typeButton={2}
                    onPress={putANumber}
                    value="/"
                />
            </View>
            <View style={style.secondaryContainer}>
                {[7,8,9,'*'].map((data:number|string, index:number)=>{
                    return (typeof data=== 'number')?<Button 
                    key={index}
                    simbolo={data}
                    typeButton={3}
                    onPress={putANumber}
                    value={data}
                    />:<Button 
                    key={index}
                    simbolo={data}
                    typeButton={2}
                    onPress={putANumber}
                    value={data}
                    />
                })} 
            </View>
            <View style={style.secondaryContainer}>
                {[4,5,6,'-'].map((data:number|string, index:number)=>{
                    return (typeof data=== 'number')?<Button 
                    key={index}
                    simbolo={data}
                    typeButton={3}
                    onPress={putANumber}
                    value={data}
                    />:<Button 
                    key={index}
                    simbolo={data}
                    typeButton={2}
                    onPress={putANumber}
                    value={data}
                    />
                })} 
            </View>
            <View style={style.secondaryContainer}>
                {[1,2,3,'+'].map((data:number|string, index:number)=>{
                    return (typeof data=== 'number')?<Button 
                    key={index}
                    simbolo={data}
                    typeButton={3}
                    onPress={putANumber}
                    value={data}
                    />:<Button 
                    key={index}
                    simbolo={data}
                    typeButton={2}
                    onPress={putANumber}
                    value={data}
                    />
                })} 
            </View>
            <View style={style.secondaryContainer}>
                <Button 
                    simbolo={'0'}
                    typeButton={4}
                    onPress={putANumber}
                    value={0}
                />
                {/* <Button 
                    simbolo='.'
                    typeButton={3}
                /> */}
                <Button 
                    simbolo='='
                    typeButton={2}
                    onPress={logicAplication}
                />
            </View>
        </View>
        
    </View>
  )
}

export default CalculatorProyect;

const style = StyleSheet.create({
    home:{
        backgroundColor:'black',
        flex: 1,
    },
    screen:{
        marginTop:190,
        textAlign: 'right',
        fontSize:40,
        color:'white',
        padding: 10,
        paddingRight: 40
    },
    // screenText:{
    //     fontSize:40,
    //     color:'white',
    // },
    principalContainer:{
        flexDirection:'column',
        flex: 1,
    },
    secondaryContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        flex: 1,
    }
})

{/* <View style={style.screen}>
            {state.map((value: string | number, index: number) =>{
                return <Text style={style.screenText} key={index}>{value}</Text>
            })}
        </View> */}