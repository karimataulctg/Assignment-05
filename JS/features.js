
function getValueById(id) {

    const value =parseFloat (document.getElementById(id).value);
    return value;
}

function getTextValueById(id){
    const balanceValue = parseFloat(document.getElementById(id).innerText);
    
    return balanceValue;
}