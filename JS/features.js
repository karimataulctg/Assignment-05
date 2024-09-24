
function getValueById(id) {

    const value =parseFloat (document.getElementById(id).value);
    return value;
}

function getTextValueById(id){
    const balanceValue = parseFloat(document.getElementById(id).innerText);
    
    return balanceValue;
}

// Function to toggle button styles
function toggleButtonStyles(activeButton, inactiveButton) {
    activeButton.classList.remove('bg-slate-50', 'border-2');
    activeButton.classList.add('bg-lime-400');

    inactiveButton.classList.remove('bg-lime-400');
    inactiveButton.classList.add('bg-slate-50', 'border-2');
}
