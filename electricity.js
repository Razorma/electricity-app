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
    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    function topUpElectricity(amount) {
        //get all the money that was spent
        if(amount!='advance'){
            totalAmount+=parseFloat(amount)
        }
        
        if((amount-theAdvancedue)>=0){
            amountTracker = (amount-theAdvancedue)
            theAdvancedue=0;
        }else if((amount-theAdvancedue)<0){
            theAdvancedue = (amount-theAdvancedue)*-1
            amountTracker=0;
        }
      
        if(amountTracker >= 50){
            unitsAvailable += 35;
            totalUnits+=35;
            theAdvance=0;
        }else if(amountTracker >= 20){
          if(theAdvancedue===0){
            unitsAvailable += 14;
            totalUnits+=14;
            theAdvance=0;
          }
            
        }else if(amountTracker >= 10){
            unitsAvailable += 7;
            totalUnits+=7;
            theAdvance=0;
        }else if(amount === 'advance'&&theAdvance===0){
            theAdvancedue +=30
            theAdvance = 21; 
            unitsAvailable += 21 
            
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
        if(appliance==="TV" && unitsAvailable>=3){
            unitsAvailable-=3
           return true
        }else if(appliance==="stove" && unitsAvailable>=10){
            unitsAvailable-=10
            return true
        }
        else if(appliance==="Kettle" && unitsAvailable>=5){
            unitsAvailable-=5
            return true
        }
        else if(appliance==="Fridge" && unitsAvailable>=15){
            unitsAvailable-=15
            return true
        }else{
            return false
        }
        
    }

    function advanceTaken() {
        console.log(theAdvance)
        if(theAdvance>0){
            return true
        }
    }

    function totalAmountSpent() {
        return totalAmount
    }

    function totalUnitsBought(){
        return totalUnits
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}