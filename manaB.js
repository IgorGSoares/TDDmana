let ManaV = 30;
let potion = 10;
let max = 30;
let upgradeV = 10;

module.exports.getValue = () =>{
    return ManaV;
};

module.exports.setValue = (n) =>{
    ManaV = n;
};

// module.exports.usePotion = () =>{
//     if (ManaV < max) {
//         //ManaV = (max-ManaV)+ManaV;
//         ManaV +=potion;
//     }
// }

module.exports.usePotion = () =>{
    if ((ManaV + potion) < max) {
        //ManaV = (max-ManaV)+ManaV;
        ManaV +=potion;
    }
    else{
        ManaV = (max-ManaV)+ManaV;
    }
}

module.exports.reset = () =>{
    ManaV = (max-ManaV)+ManaV;
}

module.exports.upgrade = () =>{
    max += upgradeV;
    ManaV = (max-ManaV)+ManaV;
}