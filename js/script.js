let valueObject = {};

function calculateTotal(managerBudget,coachBudget){
    let budgetOfManagerAndCouch = managerBudget + coachBudget;
    let totalBudget = budgetOfManagerAndCouch + valueObject.playersTotalExpenses;

    let targetTotalField = document.querySelector('#total-budget');
        targetTotalField.innerText = totalBudget;
    
}

function handlerOnSelectPlayer(element) {
    
    let playerName = element.parentElement.parentElement.children[0].innerText;
    // console.log(playerName);

     let targetPlayersList =document.querySelector('#selected-players');
     let listItem = document.createElement('li');
         listItem.innerHTML = `<span class="text-white my-4">${playerName}</span>`;

     let lengthOfList = targetPlayersList.querySelectorAll('li').length;
        
    if (lengthOfList >= 0 && lengthOfList < 5) {
        targetPlayersList.appendChild(listItem);
        element.classList.replace('bg-sky-800','bg-gray-400');
        // element.style.backgroundColor = '#A2A9AF';
        element.disabled = true;
        // console.log(lengthOfList+1); 
        valueObject.length = lengthOfList+1;
        // console.log(valueObject);
        
    }else{
        alert('You can select only 5 players');
        element.disabled = false;

    }
     
}

function handlerOnCalculatePlayerExpenses(){
    let targetPlayerBudgetInput = document.querySelector('#input-player-budget');
    let playerBudgetValue = parseInt(targetPlayerBudgetInput.value);
        if(playerBudgetValue <= 0 || isNaN(playerBudgetValue) == true){
            alert('Please enter a valid number');
            return;
        }else{
            valueObject.perPlayerBudget = playerBudgetValue;
        }
        
    let playersTotalExpenses = (valueObject.perPlayerBudget * valueObject.length);
    valueObject.playersTotalExpenses = playersTotalExpenses;
    console.log(valueObject);

    let targetPlayersTotalExpenses = document.querySelector('#players-total-expenses');
       targetPlayersTotalExpenses.innerText = playersTotalExpenses;
       targetPlayerBudgetInput.value = '';
    
}

function handlerOnCalculateTotalBudget(){
    let targetManagerInput = document.querySelector('#input-manager-budget');
    let managerBudgetValue = parseInt(targetManagerInput.value);
        targetManagerInput.value = '';

    let targetCoachInput = document.querySelector('#input-coach-budget');
    let coachBudgetValue = parseInt(targetCoachInput.value);
        targetCoachInput.value = '';

    calculateTotal(managerBudgetValue,coachBudgetValue);

}
