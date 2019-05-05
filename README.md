# Validador de CPF v.1.0.2

**Esta biblioteca se destina à validação de CPF, para uso em aplicações web.**
Na versão atual é capaz de verificar se um cpf é valido ou inválido.

## Como instalar:

```shell

$  npm install validador-cpf-lib

```

## Como utilizar:

```node


const cpfValidator = require('validador-cpf-lib');
> console.log(cpfValidator('52998224725'))
> // returns "true"
> console.log(cpfValidator('03090575662'))
> // returns "false"
> console.log(cpfValidator('00000000000'))
> // returns "false"
> console.log(cpfValidator('string'))
> // returns "false"

```

## roadmap oficial do projeto

#### versão 1.0.3
- refatoração da função;
- funcionalidades: verifica se um cpf é valido ou inválido.

#### versão 1.0.0 
- funcionalidades: verifica se um cpf é valido ou inválido.
