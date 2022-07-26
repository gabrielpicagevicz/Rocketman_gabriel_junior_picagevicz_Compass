import assert from "assert";
import chai from "chai";
import Calculadora from "../src/Calculadora.js";
import FizzBuzz from "../src/FizzBuzz.js";

const expect = chai.expect;

//Smoke Test (testar metodos);
 describe("Smoke Tests - (metodos)", () => {
  describe("Smoke Tests - Soma", () => {
    it("Espero que a `soma` seja uma função", () => {
      expect(Calculadora.calcularSoma).to.be.a("function");
    });
  });

  describe("\nSmoke Tests - Subtração", () => {
    it("Espero que a `sub` seja uma função", () => {
      expect(Calculadora.calcularSubtracao).to.be.a("function");
    });
  });
  
  describe("\nSmoke Tests - Multiplicação", () => {
    it("Espero que a `mult` seja uma função", () => {
      expect(Calculadora.calcularMultiplicacao).to.be.a("function");
    });
  });

  describe("\nSmoke Tests - Divisão", () => {
    it("Espero que a `div` seja uma função", () => {
      expect(Calculadora.calcularDivisao).to.be.a("function");
    });
  });

  describe("\nSmoke Tests - Raiz Quadrada", () => {
    it("Espero que a funcao `raiz` seja uma funcao", () =>{
      expect(Calculadora.raiz).to.be.a("function");
    })
  })

  describe("\nSmoke Tests - Numero ao quadrado", () => {
    it("Espero que a funcao `numeroQuadrado` seja uma funcao", () =>{
      expect(Calculadora.numeroQuadrado).to.be.a("function");
    })
  })

  describe("\nSmoke Tests - Calcular Circurferencia", () => {
    it("Espero que a funcao `calculateCircumference` seja uma funcao", () =>{
      expect(Calculadora.calculateCircumference).to.be.a("function");
    })
  })

  describe("\nSmoke Tests - PI", () => {
    it("Espero que a funcao `mathPi` seja uma funcao", () =>{
      expect(Calculadora.mathPi).to.be.a("function");
    })
  })

  describe("\nSmoke Tests - Porcentagem", () => {
    it("Espero que a funcao `Porcentagem` seja uma funcao", () =>{
      expect(Calculadora.porcentagem).to.be.a("function");
    })
  })

  describe("\nSmoke Tests - Tangente", () => {
    it("Espero que a funcao `getTan` seja uma funcao", () =>{
      expect(Calculadora.getTan).to.be.a("function");
    })
  })

  describe("\nSmoke Tests - Cosseno", () => {
    it("Espero que a funcao `Cosseno` seja uma funcao", () =>{
      expect(Calculadora.getCosseno).to.be.a("function");
    })
  })

  describe("\nSmoke Tests - Hypot", () => {
    it("Espero que a funcao `hypot` seja uma funcao", () =>{
      expect(Calculadora.hypot).to.be.a("function");
    })
  })

  describe("\nSmoke Tests - FizzBuzz", () => {
    it("Espero que a funcao `FizzBuzz` seja uma funcao", () =>{
      expect(FizzBuzz.fizzBuzz).to.be.a("function");
    })
  })

  describe("\nSmoke Tests - Exponenciacao", () => {
    it("Espero que a funcao `exponenciacao` seja uma funcao", () =>{
      expect(Calculadora.exponenciacao).to.be.a("function");
    })
  })

  describe("\nSmoke Tests - Bhaskara", () => {
    it("Espero que a funcao `bhaskara` seja uma funcao", () =>{
      expect(Calculadora.bhaskara).to.be.a("function");
    })
  })

}); 
