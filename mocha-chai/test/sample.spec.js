import assert from "assert";
import chai from 'chai'

const expect = chai.expect;

describe("Meu primeiro teste", () => {
  it("Verifica a variável aux", () => {
    let aux = 2;
    //assert.strictEqual(aux, 2);
    expect(aux).to.be.equals(2).and.to.be.a('number');
      });

  it.only("Verificar outra variável", () => {
    let aux = "carro";
    //assert.strictEqual(aux, "carro");
    expect(aux).to.be.equals('carro').and.not.equals('charrete');
  });
});

describe("Meu segundo teste", () => {
  it("Verificar uma desigualdade", () => {
    let aux = 2;
    //assert.notStrictEqual(aux, "2");
  });

  it("Verificar outra desigualdade", () => {
    let aux = "carro";
    //assert.notStrictEqual(aux, "charrete");
  });
});
