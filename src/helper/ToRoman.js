import { convertToRoman } from '../constants/utils';

function ToRoman(){
    const handleClickRoman = () => {
        let n = document.getElementById('text-input-roman').value
                ? parseInt(document.getElementById('text-input-roman').value)
                : alert("Your enter an Integer to Convert!");
        if(n !== undefined)
        document.getElementById('text-output-roman').value = convertToRoman(n);
    }

return(
    <div className="To-Roman">
      <p>Please enter an Integer: </p>
      <input id="text-input-roman" type="text" />
      <button
        id="convert-button-roman"
        onClick={handleClickRoman}>
            Convert to Roman!
        </button>
      <p>Roman value is:</p>
      <input id="text-output-roman" type="text" />
    </div>
    )
}

export default ToRoman;