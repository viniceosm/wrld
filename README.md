# wrld

## wrldTime

Object para emit e escutar eventos

### emit

```javascript
wrldTime.emit(new Event('trocar-dia'));
```

### on

```javascript
wrldTime.on('trocar-dia', function (e) {
  self.pagarFuncionarios();
}, false);
```

## Pessoa

### `criarEmpresa(nome: String)`

```javascript
let pessoas = [];
let luiz = criaObjetoPushArray(new Pessoa('Luiz'), pessoas);

let padariaDoLuiz = luiz.criarEmpresa('Padaria do luiz');
```

### `comprarDeEmpresa(empresa: Empresa, nomeMercadoria: String)`

```javascript
let vini = criaObjetoPushArray(new Pessoa('Vini', 10), pessoas); // Cria pessoa com 10 moedas
let empresa = procuraEmpresaPorNome('Padaria do luiz');
let mercadoria = 'Pao';

vini.comprarDeEmpresa(empresa, mercadoria);
vini.comprarDeEmpresa(empresa, mercadoria);
```

### `candidatarAVaga(empresa: Empresa, descricao: String)`

```javascript
let nuBank = procuraEmpresaPorNome('Nubank');
vini.candidatarAVaga(nuBank, 'Programador');
```

## Empresa

### `addMercadorias(mercadorias: Object)`

```javascript
padariaDoLuiz.addMercadorias([
  { produto: pao, quantidade: 2, preco: 1 }
]);
```

### `venderMercadoria(pessoa: Pessoa, nomeMercadoria: String, fnCallback: function)`

Esta função é usada na função Pessoa.comprarDeEmpresa

### `criarVaga(descricao: String, salario: Number, quantidade: Number)`

```javascript
let david = criaObjetoPushArray(new Pessoa('David'), pessoas);
let nuBank = david.criarEmpresa('Nubank');
nuBank.criarVaga('Programador', 20000, 1);
```

### `contratar(pessoa: Pessoa, descricao: String, fnCallback: function)`

Esta função é usada na função Pessoa.candidatarAVaga
