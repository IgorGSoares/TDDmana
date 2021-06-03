let limiteTotalMana = 30;
let valorMana = limiteTotalMana;
let valorMagiaFraca = 3;
let valorMagiaMedia = 6;
let valorMagiaForte = 12;

module.exports = {};

module.exports.getLimiteTotalMana = () => {
  return limiteTotalMana;
};

module.exports.setLimiteTotalMana = (novoLimiteTotalMana) => {
  limiteTotalMana = novoLimiteTotalMana;
};

module.exports.getValorMana = () => {
  return valorMana;
};

module.exports.setValorMana = (novoValorMana) => {
  if (novoValorMana > limiteTotalMana) {
    valorMana = limiteTotalMana;
  } else {
    valorMana = novoValorMana;
  }
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
  if (tipo === "fraca") {
    module.exports.setValorMana(valorMana - valorMagiaFraca);
    return valorMana;
  } else if (tipo === "media") {
    module.exports.setValorMana(valorMana - valorMagiaMedia);
    return valorMana;
  } else if (tipo === "forte") {
    module.exports.setValorMana(valorMana - valorMagiaForte);
    return valorMana;
  }
};

module.exports.recargaParcial = (valorRecarga) => {
  module.exports.setValorMana(module.exports.getValorMana() + valorRecarga);
};

module.exports.recargaTotal = () => {
  module.exports.setValorMana(limiteTotalMana);
};

module.exports.Upgrade = () => {
  module.exports.setLimiteTotalMana(module.exports.getLimiteTotalMana() + 5);
  module.exports.setValorMana(limiteTotalMana);
};
