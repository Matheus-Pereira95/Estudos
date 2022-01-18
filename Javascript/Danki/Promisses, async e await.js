// Promisse 

function teste(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const erro = false;
            if(erro){
                reject('Erro....')
            } else{
                resolve('A promise foi resolvida com sucesso!...')
            }

        }, 5000);
       
    })}

    async function testes02(){
        await teste();
        console.log('....Resolvido...')
    }

    testes02



