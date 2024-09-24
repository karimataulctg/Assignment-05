// document.getElementById('btn-blog').addEventListener('click', function(){
//     document.getElementById('section-donation').classList.add('hidden');
//     document.getElementById('history').classList.add('hidden');
//     // document.getElementById('section-blog').classList.remove('hidden');
// })


// button Donate for noakhali
document.getElementById('btn-donate-now').addEventListener('click', function(){
   const inputValue = getValueById('input-donation');
   const valueTotal = getTextValueById('balance');
   
   if(valueTotal < inputValue){
       alert('Insufficient balance');
       return;
   }
  else if(isNaN(inputValue) || inputValue <= 0){
       alert('Please enter a valid amount');
       return;
   }
  else {
    
   const newBalance = valueTotal - inputValue;
   document.getElementById('balance').innerText = newBalance;

   const noakhaliBalance = getTextValueById('noakhali-donation-balance');
   const noakhaliNewBalance = noakhaliBalance + inputValue;
   document.getElementById('noakhali-donation-balance').innerText = noakhaliNewBalance;

    // document.getElementById('my_modal_1').classList.remove('hidden');
    document.getElementById('my_modal_1').showModal();

    const p = document.createElement('p');
            p.innerText = `
             ${inputValue} Taka is donated for flood at Noalkhali, Bangladesh.
            `;
            document.getElementById('history').appendChild(p);
            
            const fullDateTime = new Date().toLocaleString();

        // Create a new <p> tag for the date and time
        const dateTimeParagraph = document.createElement('p');
        dateTimeParagraph.innerText = `${fullDateTime}`;
        document.getElementById('history').appendChild(dateTimeParagraph);

  }
})



// Function to toggle button styles
function toggleButtonStyles(activeButton, inactiveButton) {
    // Active button gets the "active" styles (lime green background)
    activeButton.classList.remove('bg-slate-50', 'border-2');
    activeButton.classList.add('bg-lime-400');

    // Inactive button gets the "inactive" styles (gray background with border)
    inactiveButton.classList.remove('bg-lime-400');
    inactiveButton.classList.add('bg-slate-50', 'border-2');
}

// Add event listeners for both buttons

document.getElementById('btn-view-donation').addEventListener('click', function(){
    // document.getElementById('section-blog').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById('section-donation').classList.remove('hidden');
    toggleButtonStyles(document.getElementById('btn-view-donation'), document.getElementById('btn-history'));
})

document.getElementById('btn-history').addEventListener('click', function(){
    document.getElementById('section-donation').classList.add('hidden');
    // document.getElementById('section-blog').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
    toggleButtonStyles(document.getElementById('btn-history'), document.getElementById('btn-view-donation'));
})
