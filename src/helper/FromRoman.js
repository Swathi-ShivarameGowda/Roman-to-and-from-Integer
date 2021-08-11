import { convertToInteger } from '../constants/utils';

function FromRoman() {

   const handleClickInteger = () =>{
      let n = document.getElementById('text-input-integer').value
              ? document.getElementById('text-input-integer').value
              : alert("Your enter a Roman digit to Convert!");
      if(n !== undefined)
      document.getElementById('text-output-integer').value = convertToInteger(n);
   }

   return(
    <div className="To-Integer">
      <p>Please enter a Roman digit:</p>
      <input id="text-input-integer" type="text" />
      <button
        id="convert-button-integer"
        onClick={handleClickInteger}>
            Convert to Integer!
        </button>
      <p>Integer value is:</p>
      <input id="text-output-integer" type="text" />
    </div>
    )
   }

export default FromRoman;