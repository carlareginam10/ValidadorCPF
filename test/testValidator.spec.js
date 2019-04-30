const chai = require('chai');
const expect = chai.expect;
const validator = require('../index');

describe('QUANDO O CPF É VÁLIDO', () => {
    describe('e quando o resto é 10 ou 11 o dígito verificador deve ser zero', () => {
        it('deve retornar true', ()=>{
            expect(validator.cpfValidator('36472172200')).to.equal(true);                
        });       
    });
   
    describe('e os números são diferentes', () => {
        it('deve retornar true', ()=>{
            expect(validator.cpfValidator('52998224725')).to.equal(true);
        });       
    });
});   

describe('QUANDO O CPF É INVÁLIDO', () => {
    describe('e os números são todos iguais a 0', () => {
        it('deve retornar false', ()=>{
            expect(validator.cpfValidator('00000000000')).to.equal(false);
        });
    });
    describe('e os números são diferentes', () => {
        it('deve retornar false', ()=>{
            expect(validator.cpfValidator('03090575662')).to.equal(false);
        });
    });
    describe('e tem menos que 11 números', () => {
        it('deve retornar false', ()=>{
            expect(validator.cpfValidator('1234')).to.equal(false);
        });                                      
    });
    describe('e o ultimo dígito verificador não confere', () => {
        it('deve retornar false', ()=>{
            expect(validator.cpfValidator('03090575662')).to.equal(false);
        });                           
    });
    describe('e todos os número são iguais a 7', () => {
        it('deve retornar false', ()=>{
            expect(validator.cpfValidator('77777777777')).to.equal(false);
        });               
    });
    describe('e quando é uma string', () => {
        it('deve retornar false', ()=>{
            expect(validator.cpfValidator('true')).to.equal(false);
        });                               
    });
    describe('e quando o primeiro dígito verificador não confere', () => {
        it('deve retornar false', ()=>{
            expect(validator.cpfValidator('03090575623')).to.equal(false);
        });                               
    });
    describe('e o número é maior que 11', () => {
        it('deve retornar false', ()=>{
            expect(validator.cpfValidator('03090575623222')).to.equal(false);
        });                               
    });
});


