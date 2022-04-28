import { useState } from "react"

const initialState:any[] = []

export const useCalculator = () => {
    const [state, setState] = useState(initialState)

    const putANumber = (numero: number|string ):void =>{
        // let temporalTuple:any[] = state.slice()
        // temporalTuple.push(numero)
        setState([...state, numero])
    }

    const reset = ():void =>{
        setState(initialState)
    }

    const positiveToNegative = ():void =>{
        if(state.includes('+') === false){
            let result = parseInt(state.toString().replace(/,/g,''))
            if(Math.sign(result) === 1){
                result *= -1;
                setState([result])
            } else {
                result = Math.abs(result);
                setState([result])
            }
        }
    }

    const del = ():void =>{
        let temporalState = [...state]
        temporalState.pop()
        setState([...temporalState])
    }

    const logicAplication = ():void =>{
        let resultado:number;
        const stringState:string = state.toString().replace(/,/g,'')
        // console.log(stringState)
        const arrayNumber = stringState.split(/[\+,\-,\*,/]/g)
        const arraySimbol = stringState.match(/[\+,\-,\*,/]/g);
        arrayNumber.map(value=>parseInt(value))
        // console.log(stringState)
        // console.log(arrayNumber)
        // console.log(arraySimbol)
        arraySimbol?.forEach((value, index)=>{
            if(index>0){
                console.log("entro al second, logic")
                resultado = internalForEachSecondLogic(value, resultado, index, arrayNumber)
                setState([resultado])
            } else {
                console.log("entro al first, logic")
                resultado = internalForEachLogic(value, resultado, index, arrayNumber)
                setState([resultado])
            }
        })
    }

    const internalForEachLogic = (value:string, resultado:number, index:number, arrayNumber:string[]):number =>{
        switch(value){
            case '+':
               return resultado = parseInt(arrayNumber[index]) + parseInt(arrayNumber[index+1])
                break;
            case '-':
                return resultado = parseInt(arrayNumber[index]) - parseInt(arrayNumber[index+1])
                break;
            case '*':
                return resultado = parseInt(arrayNumber[index]) * parseInt(arrayNumber[index+1])
                break;
            case '/':
                return resultado = parseInt(arrayNumber[index]) / parseInt(arrayNumber[index+1])
                break;
            default:
                console.log("error en el switch")
                return 0
        }
    }

    const internalForEachSecondLogic = (value:string, resultado:number, index:number, arrayNumber:string[]):number =>{
        switch(value){
            case '+':
               return resultado += parseInt(arrayNumber[index+1])
                break;
            case '-':
                return resultado -= parseInt(arrayNumber[index+1])
                break;
            case '*':
                return resultado *= parseInt(arrayNumber[index+1])
                break;
            case '/':
                return resultado /= parseInt(arrayNumber[index+1])
                break;
            default:
                console.log("error en el switch")
                return 0
        }
    }

    return {
        state, 
        reset, 
        putANumber,
        positiveToNegative,
        del,
        logicAplication,
    }
}
