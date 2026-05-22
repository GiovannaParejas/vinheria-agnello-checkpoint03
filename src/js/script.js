// Array de objetos representando os vinhos da vinícola com: nome, tipo, safra e estoque

const vinhos = [
    {
        nome: 'Carmem',
        tipo: 'tinto',
        safra: 2026,
        estoque: 10,
    },
    {
        nome: 'Pergola',
        tipo: 'seco',
        safra: 2018,
        estoque: 4,
    },
    {
        nome: 'Rosés Wine',
        tipo: 'rosé',
        safra: 2020,
        estoque: 12,
    },
];

// Início: Funções

// Função de adicionar novos vinhos ao array

function adicionarVinho(nome, tipo, safra, estoque) {
    const novoVinho = { nome, tipo, safra, estoque };
    vinhos.push(novoVinho);
    console.log(`Vinho Adicionado: \n
- Nome: ${nome}
- Tipo: ${tipo}
- Safra: ${safra}
- Estoque: ${estoque} `)
}

// Função de listar todos os vinhos com forEach

function listarVinhos() {
    console.log(`Vinhos disponíveis na Vinharia Agnello`)
    vinhos.forEach((vinho, index) => {
        console.log(`${index + 1}. ${vinho.nome}\n
- Tipo: ${vinho.tipo}
- Safra: ${vinho.safra}
- Estoque: ${vinho.estoque} unidade(s)`)
    });
};

// Função para mostrar vinhos com estoque baixo usando filter

function vinhosEstoqueBaixo(limite = 5) {
    const estoqueBaixo = vinhos.filter((vinho) => vinho.estoque < limite);
    console.log(`Vinhos com estoque baixo`)
    if (estoqueBaixo.length === 0) {
        console.log(`Nenhum vinho com estoqur baixo`);
    } else {
        estoqueBaixo.forEach((vinho) => {
            console.log(`${vinho.nome}\n
— Estoque: ${vinho.estoque} unidade(s) (Reposição necessária)`)
        });
    };
    return estoqueBaixo;
}

// Função de calcular o estoque total com reduce

function calcularEstoqueTotal() {
    const total = vinhos.reduce((acumulador, vinho) => acumulador + vinho.estoque, 0);
    console.log(`Estoque total da Vinharia Agnello`);
    console.log(`Total de garrafas em estoque: ${total} unidades`);
    return total;
}

// Função para exebir nomes dos vinhos em caixa alta com map

function nomesEmMaiusculo() {
    const nomesMaiusculos = vinhos.map((vinho) => vinho.nome.toUpperCase());
    console.log("Nome dos vinhos em caixa alta");
    nomesMaiusculos.forEach((nome) => console.log(`- ${nome}`));
    return nomesMaiusculos;
}

// Fim: Funções

adicionarVinho("Melot", "tinto", 2020, 1);

// Exibindo no console/alert:
console.log(``);
console.log(`Exibindo dados no console`);
console.log(``);

// - Lista completa de vinhos
listarVinhos();
console.log(``);

// - Vinhos com estoque abaixo de 5
vinhosEstoqueBaixo();
console.log(``);

// - Estoque total da vinícola
calcularEstoqueTotal();
console.log(``);

// - Nomes dos vinhos em caixa alta
nomesEmMaiusculo();
console.log(``);
