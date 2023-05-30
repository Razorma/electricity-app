// DOM element(s) references

const topupNow = document.querySelector(".topupNow")
const unitsAvailable = document.querySelector(".unitsAvailable")
const totalUnits = document.querySelector(".totalUnits")
const totalAmount = document.querySelector(".totalAmount")
const useNow = document.querySelector(".useNow")


// Factory Function instance 
const electricity =  Electricity();
topupNow.addEventListener("click",function(){
    const checkedBtn = document.querySelector('input[name="buyElectricity"]:checked');
    if (checkedBtn) {
        const selectedValue = checkedBtn.value;
        // console.log(selectedValue);
        electricity.topUpElectricity(selectedValue)
        unitsAvailable.innerHTML=electricity.getUnitsAvailable()
        totalUnits.innerHTML=electricity.totalUnitsBought()
        totalAmount.innerHTML=electricity.totalAmountSpent()
      }
});
useNow.addEventListener("click",function(){
    const checkedButton = document.querySelector('input[name="useElectricity"]:checked');
    if (checkedButton) {
        const selectedValues = checkedButton.value;
        console.log(selectedValues);
      
        electricity.useAppliance(selectedValues)  
        unitsAvailable.innerHTML=electricity.getUnitsAvailable()
        totalUnits.innerHTML=electricity.totalUnitsBought()
        totalAmount.innerHTML=electricity.totalAmountSpent()
      }
});

// DOM events here 