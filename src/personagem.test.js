const personagem = require("./personagem");
const barraMana = require("./barraMana");

jest.mock("./barraMana");

test("barra de mana inicializada com  valor 30", () => {
  expect(personagem.getQuantidadeMana()).toBe(30);
  expect(barraMana.getValorMana()).toBe(30);
});

test("usar magia fraca", () => {
  expect(personagem.usarMagiaFraca()).toBe(27);
  expect(barraMana.usarMagia("fraca")).toBe(27);
});

test("usar magia média", () => {
  expect(personagem.usarMagiaMedia()).toBe(24);
  expect(barraMana.usarMagia("media")).toBe(24);
});

test("usar magia forte", () => {
  expect(personagem.usarMagiaForte()).toBe(18);
  expect(barraMana.usarMagia("forte")).toBe(18);
});



test("subir de nivel", () => {
  expect(personagem.UpgradeLv()).toBe(35);//???????
  expect(barraMana.Upgrade()).toBe(35);
});

test("setar mana", () =>{
  personagem.setQuantidadeMana(20);
  expect(personagem.getQuantidadeMana()).toBe(20);//???????
  expect(barraMana.setValorMana(20)).toBe(20);
});

test("recarga parcial", () =>{
  personagem.setQuantidadeMana(20);
  expect(personagem.recargaP(5)).toBe(25);//???????
  expect(barraMana.recargaParcial(5)).toBe(barraMana.getValorMana()+5);
});

test("recarga total", () =>{
  personagem.setQuantidadeMana(20);
  expect(personagem.recarga()).toBe(30);
  expect(barraMana.recargaTotal()).toBe(30);
});

