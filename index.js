function checkNumber(cpf) {
    if (cpf.split('').every((elem) => elem === cpf[0]) || cpf.length !== 11) {
        return false;
    } 
}

function checkFirtDig(cpf) {    
    let start = 10;
    const resultCPF = cpf.split('').slice(0, 9).reduce((result, num) => 
        result + (num * start--), 0);  
    let digit = 11 - (resultCPF % 11);         
    if (digit === 10 || digit === 11) digit = 0;
    return digit;   
}

function checkSecondDig(cpf) {
    let start = 11;   
    const resultCPF2 = cpf.split('').slice(0, 10).reduce((result, num) => 
        result + (num * start--), 0);     
    let digit = 11 - (resultCPF2 % 11);  
    if (digit === 10 || digit === 11) digit = 0; 
    return digit;
}

function cpfValidator(cpf) {
    if (checkNumber(cpf) !== false) {  
        if (checkFirtDig(cpf) === parseInt(cpf.charAt(9)) && 
            checkSecondDig(cpf) === parseInt(cpf.charAt(10))) {
            return true;
        } else {
            return false;
        }   
    } else {
        return false;
    }
}

    
module.exports.cpfValidator = cpfValidator;


