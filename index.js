
function checkNumber (cpf){
    if (cpf.split('').every((elem) => elem === cpf[0]) || cpf.length !== 11) {
        return false;
    } 
}

function cpfValidator(cpf) {
    if(checkNumber(cpf)!== false) {       
        let total = 10;
        const resultCPF = cpf.split('').slice(0, 9).reduce((result, num) => 
            result + (num * total--), 0);  
        let firstDigitChecker = 11 - (resultCPF % 11);         
        if (firstDigitChecker === 10 || firstDigitChecker === 11) firstDigitChecker = 0;                
        if (firstDigitChecker !== parseInt(cpf.charAt(9))) return false;   
        
        let total2 = 11;
        let start = 0;
        let end = 10;
        const resultCPF2 = cpf.split('').slice(start, end).reduce((result, num) => 
            result + (num * total2--), 0);     
        let secondtDigitChecker = 11 - (resultCPF2 % 11);  
        if (secondtDigitChecker === 10 || secondtDigitChecker === 11) secondtDigitChecker = 0;        
        if (secondtDigitChecker !== parseInt(cpf.charAt(10))) {
            return false;
        } else {
            return true;
        }
    }else{
        return false;
    }
}
    
module.exports.cpfValidator = cpfValidator;


