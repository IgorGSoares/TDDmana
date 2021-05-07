const mana = require("./manaB");

test("inicializar mana", () =>{
    expect(mana.getValue()).toBe(30);
});

test("setar mana", () =>{
    mana.setValue(15);
    expect(mana.getValue()).toBe(15);
});

test ("usar poção de mana", () =>{
    mana.usePotion();
    expect(mana.getValue()).toBe(25);
});

// test ("usar poção de mana", () =>{
//     mana.usePotion();
//     expect(mana.getValue()).toBe(35);
// });

test ("usar poção de mana 2", () =>{
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
    mana.reset();
    expect(mana.getValue()).toBe(40);
})