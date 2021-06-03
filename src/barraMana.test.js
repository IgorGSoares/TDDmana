const barraMana = require("./barraMana");

/*Bem, teriamos que definir uma variável para usarmos como sendo a barra de mana 
(acho q 30 seria legal) e teríamos como funcionalidades as 3 magias (fraca, média e forte)
 que quando usadas usam uma certa quantidade de mana, um método de recarga parcial que aumenta o valor 
 sem passar do valor max (que seria usado caso o personagem usasse itens de regeneração de mana),
  um de recarga total sem passar do max (para caso de subida de nível e respawn) e um método de
  upgrade que aumenta o max da barra e a recarrega (caso subir de nivel e dê um upgrade em magia) */

test("barra de mana inicializada com  valor 30", () => {
  expect(barraMana.getValorMana()).toBe(30);
});

test("setar novo valor de mana", () => {
  barraMana.setValorMana(24);
  expect(barraMana.getValorMana()).toBe(24);
});

test("limite de valor da barra de mana inicializado com  valor 30", () => {
  expect(barraMana.getLimiteTotalMana()).toBe(30);
});

test("setar novo limite total de mana", () => {
  barraMana.setLimiteTotalMana(35);
  expect(barraMana.getLimiteTotalMana()).toBe(35);
});

test("usar magia fraca", () => {
  let valorInicial = barraMana.getValorMana();
  expect(barraMana.usarMagia("fraca")).toBe(
    valorInicial - barraMana.getValorMagiaFraca()
  );
});

test("usar magia média", () => {
  let valorInicial = barraMana.getValorMana();
  expect(barraMana.usarMagia("media")).toBe(
    valorInicial - barraMana.getValorMagiaMedia()
  );
});

test("usar magia forte", () => {
  let valorInicial = barraMana.getValorMana();
  expect(barraMana.usarMagia("forte")).toBe(
    valorInicial - barraMana.getValorMagiaForte()
  );
});

test("recarga parcial de mana sem passar do valor máximo - valor abaixo", () => {
  barraMana.setLimiteTotalMana(30);
  barraMana.setValorMana(20);
  barraMana.recargaParcial(6);
  expect(barraMana.getValorMana()).toBe(26);
});

test("recarga parcial de mana sem passar do valor máximo - valor acima", () => {
  barraMana.setLimiteTotalMana(30);
  barraMana.setValorMana(20);
  barraMana.recargaParcial(12);
  expect(barraMana.getValorMana()).toBe(30);
});

test("recarga total de mana sem passar do valor máximo", () => {
  barraMana.setLimiteTotalMana(37);
  barraMana.setValorMana(20);
  barraMana.recargaTotal();
  expect(barraMana.getValorMana()).toBe(37);
});

test("upgrade - usar item para aumentar limite máximo de mana", () => {
  barraMana.setLimiteTotalMana(30);
  barraMana.Upgrade();
  expect(barraMana.getValorMana()).toBe(35);
});
