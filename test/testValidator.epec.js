let chai = require('chai');
let expect = chai.expect;
let validator = require('../lib/validator')


describe('validator lib', () => {
    describe("validatorCPF",()=>{
        it('Validar CPF', ()=>{
            expect(validator.validatorCPF('03090575663')).to.equal(true);
        });
        it('Validar CPF 1', ()=>{
            expect(validator.validatorCPF('03090575662')).to.equal(false);
        });
        it('Validar CPF 2',()=>{
            expect(validator.validatorCPF('00000000000')).to.equal(false);
            
        })
        it('Validar CPF 2',()=>{
            expect(validator.validatorCPF('00000000000')).to.equal(false);
            
        })
        // it('Validar CPF 3',()=>{
        //     expect(validator.validatorCPF('04864713901')).to.equal(true);
            
        // })
        // it('Validar CPF 4',()=>{
        //     expect(validator.validatorCPF('77777777777')).to.equal(false);
            
        // })
        // it('Validar CPF 5',()=>{
        //     expect(validator.validatorCPF('12345678910')).to.equal(false);
            
        // })
        it('Validar CPF 6',()=>{
            expect(validator.validatorCPF('1234')).to.equal(false);
            
        })
        // it('Validar CPF 7', ()=>{
        //     expect(validator.validatorCPF('03090575622')).to.equal(false);
        //  });
        it('Validar CPF 7', ()=>{
            expect(validator.validatorCPF('03090575623')).to.equal(false);
        });
        // it('Validar CPF 8', ()=>{
        //     expect(validator.validatorCPF('04998264931')).to.equal(false);
        // });
        it('Validar CPF 9', ()=>{
            expect(validator.validatorCPF('36472172200')).to.equal(true);
        });
        it('Validar CPF 9', ()=>{
            expect(validator.validatorCPF('true')).to.equal(false);
        });
        it('Validar CPF 9', ()=>{
            expect(validator.validatorCPF(true)).to.equal(false);
        });
        it('Validar CPF 9', ()=>{
            expect(validator.validatorCPF(false)).to.equal(false);
        });
        
        
    });



});

// let chai = require('chai');
// let expect = chai.expect;
// let validator = require('../lib/validator2')


// describe('validator lib', () => {
//     describe("validate",()=>{
//         it('Validar CPF', ()=>{
//             expect(validator.validate('03090575663')).to.equal(true);
//         });
//         // it('test2',()=>{
//         //     expect(1).to.equal(1);
//         // })
        
//     });


// });


// https://github.com/guilhermehn/validar-cpf

// https://github.com/MariaSilvania/validador-cartao-credito/blob/master/index.js CARTÃO DE CREDITO