function appendToResult(value) {
    document.getElementById('result').value+=value;
}
function clearresult() {
    document.getElementById('result').value="";
    
}
function calculateResult() {
    try {
    // document.getElementById('result').value="";
    
    let result=eval(document.getElementById('result').value);
    document.getElementById('result').value=result;

    } catch (error) {
    document.getElementById('result').value='Error';
        
    }
}