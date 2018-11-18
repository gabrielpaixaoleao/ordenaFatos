
var facts = [
    ['gabriel', 'endereço', 'av rio branco, 109', true],
    ['joão', 'endereço', 'rua alice, 10', true],
    ['joão', 'endereço', 'rua bob, 88', true],
    ['joão', 'telefone', '234-5678', true],
    ['joão', 'telefone', '91234-5555', true],
    ['joão', 'telefone', '234-5678', false],
    ['gabriel', 'telefone', '98888-1111', true],
    ['gabriel', 'telefone', '56789-1010', true],
];
  
var schema = [
    ['endereço', 'cardinality', 'one'],
    ['telefone', 'cardinality', 'many']
];

var factsTrue = [];

//função construída para analisar alguns elementos da matriz facts
//inicialmente ela faz alguns filtros, comparando os booleanos da posição facts[n][3] 
function validaFacts(facts, schema){
    for(var i = 0; i < facts.length; i++){
        if(facts[i][3] == true){

            //na decisão abaixo, verificamos se o elemento analisado realmente guarda um endereço e não um telefone
            // caso as condições sejam respeitadas, os elementos serão guardados no array factsTrue[]
            if((facts[i][1] == schema[0][0]) && ((i + 1) < 4) && (facts[i + 1][1]) != 'telefone'){     
             
                if(facts[i][0] == facts[i + 1][0]){
                    factsTrue[i] = facts[i + 1];

                }
                else if(facts[i][0] == 'gabriel'){
                     factsTrue[i] = facts[i];

                }
            }
            //caso o elemento analisado não seja um endereço, ele será um telefone
            //na decisão abaixo, verificamos se o elemento é de fato um telefone
            //e eliminamos os telefones não validos
            //em seguida, mandamos os telefones validos para o array factsTrue
            else if((facts[i][2].length) == (10) && facts[i][1] == schema[1][0]){ 
                document.write(facts[i][2]);                                              
                factsTrue[i] = facts[i];

            }
        }
    }
    return factsTrue;
}

var aux = validaFacts(facts, schema);

//função criada para agrupar os elementos do array factsTrue que ficaram dispersos
function agrupaFacts(aux){
    var agrupa = [];
    var verifica = [];
    var cont = 0;
    for(var i = 0; i < aux.length; i++){

        if(!(aux[i] == verifica[i])){
            agrupa[cont] = aux[i];
            cont++;
        }
    }
    return agrupa;
} 

var exibe = agrupaFacts(aux);

function mostraFacts(exibe){
    for(var i = 0; i < exibe.length; i++){

    console.log(exibe[i]);
    }
}

mostraFacts(exibe);
