const btnEl = document.getElementById("calculate");
const billinput = document.getElementById("bill");
const tipinput = document.getElementById("tip");
const totalspan = document.getElementById("total");  

function calTotal() {
    
    const billValue = parseFloat(billinput.value);
    const tipValue = parseFloat(tipinput.value);

   
    if (isNaN(billValue) || isNaN(tipValue)) {
        alert("Please enter valid numbers!");
        return;
    }

    
    const totalValue = billValue * (1 + tipValue / 100);

    
    totalspan.innerText = totalValue.toFixed(2);
}


btnEl.addEventListener("click", calTotal);
