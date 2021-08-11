import { RomanCodes } from './RomanCodes';
import { IntegerCodes } from './IntegerCodes';

export const convertToRoman=(num)=> {
           let numeral = "";
           let digits = num.toString().split('').reverse();
           for (let i=0; i < digits.length; i++){
               numeral = RomanCodes[i][parseInt(digits[i])] + numeral;
           }
           return numeral;
       }


export const convertToInteger=(num)=> {
           const array = num.split('');
           let total = 0;
           let current,currentValue,next,nextValue;
           for(let i=0; i< array.length; i++){
               current = array[i];
               currentValue=IntegerCodes[current];
               next=array[i+1];
               nextValue=IntegerCodes[next];
               if(currentValue<nextValue){
                   total -= currentValue;
               }else{
                   total += currentValue;
               }
           }
           return total;
       }