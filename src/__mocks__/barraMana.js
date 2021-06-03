module.exports = {
  getValorMana: () => {
    return 30;
  },
  usarMagia: (param) => {
    if (param === "fraca") {
      return 27;
    } else if (param === "media") {
      return 24;
    } else if (param === "forte") {
      return 18;
    }
  },
  
  Upgrade: () => {
    return 35;
  },
  recargaTotal: () =>{
    return 30;
  },
  recargaParcial: (param) =>{
    return (param + 30);
  },
  setValorMana: (param) =>{
    return param;
  }
};
