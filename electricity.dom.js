// DOM element(s) references

const topupNow = document.querySelector(".topupNow")
const unitsAvailable = document.querySelector(".unitsAvailable")
const totalUnits = document.querySelector(".totalUnits")
const totalAmount = document.querySelector(".totalAmount")
const useNow = document.querySelector(".useNow")
const ClearNow = document.querySelector(".ClearNow")


let initial = 0;
// Factory Function instance 
const electricity =  Electricity();
totalUnits.innerHTML=localStorage.getItem("totalunits")||initial.toFixed(2)
totalAmount.innerHTML=localStorage.getItem("totalamount")||initial.toFixed(2)
electricity.updateTotals(parseFloat(totalAmount.innerHTML),parseFloat(totalUnits.innerHTML))



topupNow.addEventListener("click",function(){
    const checkedBtn = document.querySelector('input[name="buyElectricity"]:checked');
    if (checkedBtn) {
        const selectedValue = checkedBtn.value;
        // console.log(selectedValue);
        electricity.topUpElectricity(selectedValue)
        unitsAvailable.innerHTML=electricity.getUnitsAvailable()
        totalUnits.innerHTML=electricity.totalUnitsBought()
        totalAmount.innerHTML=electricity.totalAmountSpent()
        localStorage.setItem(
            "totalunits",
            parseFloat(totalUnits.innerHTML)
          );
          localStorage.setItem(
            "totalamount",
            parseFloat(totalAmount.innerHTML)
          );
      }
});
useNow.addEventListener("click",function(){
    const checkedButton = document.querySelector('input[name="useElectricity"]:checked');
    if (checkedButton) {
        const selectedValues = checkedButton.value;
        electricity.useAppliance(selectedValues)  
        unitsAvailable.innerHTML=electricity.getUnitsAvailable()
        totalUnits.innerHTML=electricity.totalUnitsBought()
        totalAmount.innerHTML=electricity.totalAmountSpent()
        localStorage.setItem(
            "totalunits",
            parseFloat(totalUnits.innerHTML)
          );
          localStorage.setItem(
            "totalamount",
            parseFloat(totalAmount.innerHTML)
          );
      }
});

// DOM events here
ClearNow.addEventListener("click",function(){
     localStorage.clear()
     unitsAvailable.innerHTML=0
        totalUnits.innerHTML=initial.toFixed(2)
        totalAmount.innerHTML=initial.toFixed(2)
}); 