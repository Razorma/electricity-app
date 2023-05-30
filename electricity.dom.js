// DOM element(s) references

const topupNow = document.querySelector(".topupNow")
const unitsAvailable = document.querySelector(".unitsAvailable")
const totalUnits = document.querySelector(".totalUnits")
const totalAmount = document.querySelector(".totalAmount")


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

// DOM events here 