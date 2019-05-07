# Validador de CPF v.1.0.3

**Esta biblioteca se destina à validação de CPF, para uso em aplicações web.**
Na versão atual é capaz de verificar se um cpf é válido ou inválido.

## Como instalar:

```shell

$  npm install validador-cpf-lib-crm

```

## Como utilizar:

```node

node

const validator = require('validador-cpf-lib-crm');
> validator.cpfValidator('52998224725')
> // returns "true"
> validator.cpfValidator('03090575662')
> // returns "false"
> validator.cpfValidator('00000000000')
> // returns "false"
> validator.cpfValidator('string')
> // returns "false"

```

## roadmap oficial do projeto


#### versão 1.0.0 
- funcionalidades: verifica se um cpf é válido ou inválido.
