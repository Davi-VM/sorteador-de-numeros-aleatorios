//-- Função utilizada para o sorteiro de números
function sortear(){
    // Recuperação de valores do HTML
    // Variável da quantidade de números sorteados
    let quantidade = parseInt(document.getElementById('quantidade').value);
    // Variável que delimita o número máximo sorteado
    let de = parseInt(document.getElementById('de').value);
    // Variável que delimita o número mínimo sorteado
    let ate = parseInt(document.getElementById('ate').value);
    // Número sorteado
    let numero;
    // Vetor com os números sorteados
    let sorteados = [];

    // Condicional responsável por comparar se o de é maior que o ate
    if(de >= ate){
        // Alert que informa o desacerto a respeito do valor "de" em relação ao "ate"
        alert("Mude o valor do campo 'De' para que seja menor que o valor do campo 'ate'.");
        // Return responsável por parar o código 
        return;
    }

    // Condicional que verifica se a quantidade é maior que o intervalo de números sorteados
    if(quantidade > ((ate - de) + 1)){
        //Alert que informa o desacerto a respeito da quantidade de números sorteados escolhida em relação ao intervalo de números sorteados
        alert("A quantidade de números sorteados escolhida é maior que o intevalo de números sorteados. Mude o valor da quantidade para que seja menor ou igual a esse intervalo.")
         // Return responsável por parar o código
        return;
    }

    // Laço de repetição que chama e armazena os números sorteados ao vetor
    for(let i = 0; i < quantidade; i++){
        //Variável que recebe o return da função obterNumeroAleatorio, tendo como parâmetros as variáveis "de" e "ate"
        numero = obterNumeroAleatorio(de, ate);
        //Laço de repetição que executa a variável número, caso ela já tenha aparecido no array
        /*OBS: includes foi utilizado para ver se o número faz parte do vetor, retronando false caso não 
        esteja presente e true caso esteja presente no vetor*/
        while(sorteados.includes(numero)){
            //Variável que recebe o return da função obterNumeroAleatorio, tendo como parâmetros as variáveis "de" e "ate"
            numero = obterNumeroAleatorio(de, ate)
        }
        //Adiciona o número sorteado ao vetor
        sorteados.push(numero);
    }

    // Troca o status do botão, indo de desabilitado para habilitado
    alterarStatusDosBotoes()

    if(sorteados == 0){ //<-- Esse if foi adicionado ao projeto junto com a primeira saída de dados
        // Variável responsável por pegar o label presente dentro da div, com id "resultado"
        let resultado = document. getElementById('resultado');
        // Atribuição de uma mensagem 
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum número foi sorteado pois a quantidade escolhida foi zero.</label>`;
    }
    else{
        // Variável responsável por pegar o label presente dentro da div, com id "resultado"
        let resultado = document. getElementById('resultado');
        // Atribuição de uma mensagem 
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    }
}

//-- Função responsável por gerar o número sorteado
function obterNumeroAleatorio(min, max){
    // Expressão utilizada para gerar o número sorteado
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//-- Função responsável pela mudança de status
function alterarStatusDosBotoes(){
    // Recuperação de valores do HTML
    botaoSotear = document.getElementById('btn-sortear')
    botaoReiniciar = document.getElementById('btn-reiniciar');

    // Condicional que realiza a troca da classe do botão reiniciar
    // Se estiver desativado ele será ativado
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')){
        // Esse código retira a classe que muda o cursor para not-allowed no botão reiniciar
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        // Esse código adiciona a classe que muda o cursor para pointer no botão reiniciar
        botaoReiniciar.classList.add('container__botao');

        // Esse código retira a classe que muda o cursor para pointer no botão sortear
        botaoSotear.classList.remove('container__botao'); //<- Essa parte foi adicionada ao projeto
        // Esse código adiciona a classe que muda o cursor para not-allowed no botão sortear
        botaoSotear.classList.add('container__botao-desabilitado'); //<- Essa parte foi adicionada ao projeto

        // Esse código remove o disabled do botão reiniciar e o tornar funcional
        document.getElementById('btn-reiniciar').removeAttribute('disabled',); //<- Essa parte foi adicionada ao projeto
        // Esse código adiciona o disabled ao botão sortear e faz com que ele deixe de ser funcional
        document.getElementById('btn-sortear').setAttribute('disabled', true); //<- Essa parte foi adicionada ao projeto
    }
    // Senão estiver desativado ele será ativado
    else{
        // Esse código retira a classe que muda o cursor para pointer no botão reiniciar
        botaoReiniciar.classList.remove('container__botao');
        // Esse código adiciona a classe que muda o cursor para not-allowed no botão reiniciar
        botaoReiniciar.classList.add('container__botao-desabilitado');
        
        // Esse código retira a classe que muda o cursor para not-allowed no botão sortear
        botaoSotear.classList.remove('container__botao-desabilitado'); //<- Essa parte foi adicionada ao projeto
        // Esse código adiciona a classe que muda o cursor para pointer no botão sortear
        botaoSotear.classList.add('container__botao'); //<- Essa parte foi adicionada ao projeto

        // Esse código retira o disabled do botão sortear e torna ele válido
        document.getElementById('btn-sortear').removeAttribute('disabled',); //<- Essa parte foi adicionada ao projeto
        // Esse código adiciona o disabled ao botão reiniciar o tornando inválido
        document.getElementById('btn-reiniciar').setAttribute('disabled', true); //<- Essa parte foi adicionada ao projeto
    }
}

//-- Função responsável por reiniciar o sorteamento dos números
function reiniciar(){
    // Limpa o campo do valor quantidade
    document.getElementById('quantidade').value = '';
    // Limpa o campo do valor "de"
    document.getElementById('de').value = '';
    // Limpa o campo do valor "ate"
    document.getElementById('ate').value = '';
    // Readiciona o texto original do resultado
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    // Troca a classe do botão reiniciar
    alterarStatusDosBotoes();
}