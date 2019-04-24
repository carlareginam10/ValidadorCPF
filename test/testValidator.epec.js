let chai = require('chai');
let expect = chai.expect;
let validator = require('../lib/validator')


describe('validator lib', () => {
    describe("validatorCPF",()=>{
        it('Validar CPF', ()=>{
            expect(validator.validatorCPF('03090575663')).to.equal('03090575663');
        });
        // it('test2',()=>{
        //     expect(1).to.equal(1);
        // })
        
    });


});