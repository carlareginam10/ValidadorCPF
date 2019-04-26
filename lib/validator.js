// function validatorCPF() {
//     return "03090575663"        
// }

function validatorCPF (cpf) {
    
      
    if (cpf.length != 11 || cpf === "00000000000" || cpf === "11111111111" 
        || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" 
        || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999"){
        return false;
    }        

    let cpfNumber = 0;
    for (i=0; i < 9; i ++)
        cpfNumber += parseInt(cpf.charAt(i)) * (10 - i);
        console.log( "dentro de cpf Number: ", cpfNumber)
        let firstDigitChecker = 11 - (cpfNumber % 11);
        
    if (firstDigitChecker === 10 || firstDigitChecker === 11) firstDigitChecker = 0;                
    if (firstDigitChecker !== parseInt(cpf.charAt(9))) return false;
    console.log( "dentro de firtDigitChecker: ", firstDigitChecker);
    
    cpfNumber = 0;
    for (i = 0; i < 10; i ++)
        cpfNumber += parseInt(cpf.charAt(i)) * (11 - i);
        let secondtDigitChecker = 11 - (cpfNumber % 11);

    if (secondtDigitChecker === 10 || secondtDigitChecker === 11) secondtDigitChecker = 0;        
    if (secondtDigitChecker !== parseInt(cpf.charAt(10))) {
        return false;
    } else {
       console.log('O CPF INFORMADO É VÁLIDO')
        return true;
    }                  
    
           
}
    
module.exports.validatorCPF = validatorCPF;
    









