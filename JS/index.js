
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

    document.getElementById('my_modal_1').showModal();
            
            const fullDateTime = new Date().toLocaleString();

        const resultDiv = document.getElementById('history');
        resultDiv.innerHTML += `
            <div class=" w-4/5 rounded-md p-4 m-4 border-2"> 
            ${inputValue} Taka is donated for Aid for Injured in the Quota Movement.
            <p>${fullDateTime}</p>
            </div>
        `;
  }
})
// button Donate for feni
document.getElementById('btn-donate-feni').addEventListener('click', function(){
   const inputValue = getValueById('feni-input-donation');
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

   const noakhaliBalance = getTextValueById('feni-donation-balance');
   const noakhaliNewBalance = noakhaliBalance + inputValue;
   document.getElementById('feni-donation-balance').innerText = noakhaliNewBalance;

    document.getElementById('my_modal_1').showModal();
            
            const fullDateTime = new Date().toLocaleString();

        const resultDiv = document.getElementById('history');
        resultDiv.innerHTML += `
            <div class=" w-4/5 rounded-md p-4 m-4 border-2"> 
            ${inputValue} Taka is donated for Aid for Injured in the Quota Movement.
            <p>${fullDateTime}</p>
            </div>
        `;
  }
})
// button Donate for Quota
document.getElementById('btn-donate-quota').addEventListener('click', function(){
   const inputValue = getValueById('input-donation-quota');
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

   const noakhaliBalance = getTextValueById('quota-donation-balance');
   const noakhaliNewBalance = noakhaliBalance + inputValue;
   document.getElementById('quota-donation-balance').innerText = noakhaliNewBalance;

    document.getElementById('my_modal_1').showModal();
            
            const fullDateTime = new Date().toLocaleString();

        const resultDiv = document.getElementById('history');
        resultDiv.innerHTML += `
            <div class=" w-4/5 rounded-md p-4 m-4 border-2"> 
            ${inputValue} Taka is donated for Aid for Injured in the Quota Movement.
            <p>${fullDateTime}</p>
            </div>
        `;

  }
})

// Add event listeners for both buttons

document.getElementById('btn-view-donation').addEventListener('click', function(){

    document.getElementById('history').classList.add('hidden');
    document.getElementById('section-donation').classList.remove('hidden');
    toggleButtonStyles(document.getElementById('btn-view-donation'), document.getElementById('btn-history'));
})

document.getElementById('btn-history').addEventListener('click', function(){
    
    document.getElementById('section-donation').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
    toggleButtonStyles(document.getElementById('btn-history'), document.getElementById('btn-view-donation'));
})
