function Electricity() {
    //initialize a variable to zero to store the units
    let unitsAvailable = 0;
    //initialize a variable to zero to keep track of the advance
    let theAdvance = 0;
    //initialize a variable to zero to keep track of the amount you owe
    let theAdvancedue = 0;
    //initialize a variable to zero to keep help keep track of the amount that is left after advance deductions
    let amountTracker = 0;
    //initialize a variable to zero to keep track of ALL the money used
    let totalAmount = 0;
    //initialize a variable to zero to keep track of ALL the units used
    let totalUnits = 0;
    let advancePaid = false;
    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

 
    function topUpElectricity(amount) {
        if(amount!='advance'){
             totalAmount+=parseFloat(amount)
            }
        if (amount === 'advance') {
          if (theAdvance === 0) {
            theAdvancedue += 30;
            theAdvance = 21;
            unitsAvailable += 21;
            totalUnits += 21;
           
            advancePaid=true;
          }
        } else {
            theAdvance=0;
          if ((amount - theAdvancedue) >= 0) {
            amountTracker = (amount - theAdvancedue);
            theAdvancedue = 0;
           
          } else if ((amount - theAdvancedue) < 0) {
            theAdvancedue = (theAdvancedue - amount);
            amountTracker = 0;
            
          }
      
          if (amountTracker >= 50) {
            unitsAvailable += 35;
            totalUnits += 35;
            
          } else if (amountTracker >= 20) {
            unitsAvailable += 14;
            totalUnits += 14;
           
          } else if (amountTracker >= 10) {
            unitsAvailable += 7;
            totalUnits += 7;
            
          }
        }
      }
      

    function getUnitsAvailable() {
         return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */

    function useAppliance(appliance) {
        let requiredUnits = appliances[appliance];
        if (unitsAvailable >= requiredUnits) {
          unitsAvailable -= requiredUnits;
          return true;
        }
        return false;
      }

    function advanceTaken() {
        return advancePaid
    }

    function totalAmountSpent() {
        return totalAmount
    }

    function totalUnitsBought(){
        return totalUnits
    }
    function updateTotals(totalA,totalU, unitsA){
        totalAmount=totalA;
        totalUnits=totalU;
        unitsAvailable= unitsA;
    }


    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought,
        updateTotals

    }
}