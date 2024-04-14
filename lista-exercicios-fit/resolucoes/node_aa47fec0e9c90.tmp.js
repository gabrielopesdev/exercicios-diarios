
const readline = require('readline');

// Cria uma interface para ler do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular o valor total em estoque e a média de valor das mercadorias
function calcularEstoque() {
    // Pergunta ao usuário o número total de mercadorias no estoque
    rl.question('Digite o número total de mercadorias no estoque: ', (N) => {
        // Converte a entrada para um número inteiro
        N = parseInt(N);

        // Inicializa o valor total em estoque como 0
        var total = 0;

        // Função auxiliar para solicitar o valor de cada mercadoria
        function solicitarValor(i) {
            // Se todas as mercadorias já foram processadas, calcula e imprime o resultado
            if (i >= N) {
                // Calcula a média de valor das mercadorias
                var media = total / N;
                
                // Imprime o valor total em estoque e a média de valor das mercadorias
                console.log("O valor total em estoque é:", total);
                console.log("A média de valor das mercadorias é:", media);

                // Fecha a interface de leitura do terminal
                rl.close();
                return;
            }

            // Pergunta ao usuário o valor da mercadoria atual
            rl.question(`Digite o valor da mercadoria ${i + 1}: `, (valor) => {
                // Converte a entrada para um número de ponto flutuante
                valor = parseFloat(valor);
                
                // Adiciona o valor da mercadoria ao total
                total += valor;
                
                // Chama a função novamente para a próxima mercadoria
                solicitarValor(i + 1);
            });
        }

        // Inicia o processo solicitando o valor da primeira mercadoria
        solicitarValor(0);
    });
}

// Chama a função para calcular o valor total em estoque e a média de valor das mercadorias
calcularEstoque();