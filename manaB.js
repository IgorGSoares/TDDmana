let ManaV = 30;
let potion = 10;
let max = 30;
let upgradeV = 10;

let valorMagiaFraca = 5;
let valorMagiaMedia = 10;
let valorMagiaForte = 15;

module.exports = {};

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
};


module.exports.getValorMagiaFraca = () => {
    return valorMagiaFraca;
};
  
module.exports.getValorMagiaMedia = () => {
    return valorMagiaMedia;
};
  
module.exports.getValorMagiaForte = () => {
    return valorMagiaForte;
};

module.exports.usarMagia = (tipo) => {
    if (ManaV <= 0) {
        ManaV = 0;
        return ManaV;
    }else if (tipo === "fraca") {
       if (ManaV < valorMagiaFraca) {
            return ManaV;
       }
       else{
            module.exports.setValue(ManaV - valorMagiaFraca);
            return ManaV;
       }
    } else if (tipo === "media") {
        if (ManaV < valorMagiaMedia) {
            return ManaV;
        }
        else{
            module.exports.setValue(ManaV - valorMagiaMedia);
            return ManaV;
        }
    } else if (tipo === "forte") {
        if (ManaV < valorMagiaForte) {
            return ManaV;
        }
        else{
            module.exports.setValue(ManaV - valorMagiaForte);
            return ManaV;
        }
    }
};