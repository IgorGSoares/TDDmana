const mana = require("./manaB");

test("inicializar mana", () =>{
    expect(mana.getValue()).toBe(30);
});

test("setar mana", () =>{
    mana.setValue(15);
    expect(mana.getValue()).toBe(15);
});

//========carga, descarga e recarga=======
test ("usar poção de mana", () =>{
    mana.setValue(15);
    mana.usePotion();
    expect(mana.getValue()).toBe(25);
});

// test ("usar poção de mana", () =>{
//     mana.setValue(25);
//     mana.usePotion();
//     expect(mana.getValue()).toBe(35);
// });

test ("usar poção de mana 2", () =>{
    mana.setValue(25);
    mana.usePotion();
    expect(mana.getValue()).toBe(30);
});

test ("subir de nível/respawn", () =>{
    mana.setValue(15);
    mana.reset();
    expect(mana.getValue()).toBe(30);
});

test ("upar mana", () =>{
    mana.setValue(15);
    mana.upgrade();
    //mana.reset();
    expect(mana.getValue()).toBe(40);
})

//=================================


//========magias===================

test("usar magia fraca", () => {
    let valorInicial = mana.getValue();
    expect(mana.usarMagia("fraca")).toBe(
      valorInicial - mana.getValorMagiaFraca()
    );
  });
  
  test("usar magia média", () => {
    let valorInicial = mana.getValue();
    expect(mana.usarMagia("media")).toBe(
      valorInicial - mana.getValorMagiaMedia()
    );
  });
  
  test("usar magia forte", () => {
    let valorInicial = mana.getValue();
    expect(mana.usarMagia("forte")).toBe(
      valorInicial - mana.getValorMagiaForte()
    );
  });

//   test("usar magia sem mana", () =>{
//     mana.setValue(0);
//     let valorInicial = mana.getValue();
//     expect(mana.usarMagia("forte")).toBe(
//       valorInicial - mana.getValorMagiaForte()
//     );
//   });

test("usar magia sem mana", () =>{
    mana.setValue(0);
    expect(mana.usarMagia("forte")).toBe(0);
  });

//   test("mana insuficiente para magia fraca", () =>{
//     mana.setValue(3);
//     let valorInicial = mana.getValue();
//     expect(mana.usarMagia("fraca")).toBe(valorInicial - mana.getValorMagiaFraca());
//   });

test("mana insuficiente para magia fraca", () =>{
    mana.setValue(3);
    expect(mana.usarMagia("fraca")).toBe(mana.getValue());
  });

  test("mana insuficiente para magia media", () =>{
    mana.setValue(9);
    expect(mana.usarMagia("media")).toBe(mana.getValue());
  });

  test("mana insuficiente para magia forte", () =>{
    mana.setValue(13);
    expect(mana.usarMagia("forte")).toBe(mana.getValue());
  });

  test("poção e magia", () =>{
    mana.setValue(5);
    mana.usePotion();
    let valorInicial = mana.getValue();
    expect(mana.usarMagia("forte")).toBe(valorInicial - mana.getValorMagiaForte());
  });

  //=======================================