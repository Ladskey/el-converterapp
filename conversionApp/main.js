//Need to track actual dollar input tag
//Need to track dollar input value
//Need to output converted euro value into euro input tag

const dollarInput = document.getElementById("dollars");

console.log(dollarinput);

dollarInput.addEventListener('input', convertToEuros);

function convertToEuros(){

    //Take the actual dollar input value
    const dollarValue = document.getElementById("dollars");
    //Multiply by 0.85 for Euros
    let euroValue = dollarValue * 0.85;
    //Set values of the Euros input tag to this converted value
    document.getElementById("euros").value = euroValue;
    
}