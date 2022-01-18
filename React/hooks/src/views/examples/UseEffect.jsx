import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n-1) * n
}

function ParOuImpar(numb){
    if(numb%2===0) return 'Par'
    if(numb%2!=0) return 'Impar' 
}

const UseEffect = (props) => {
    const [count, setCount] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [numero,setNumero] = useState(0)
    const [PoI,setPoI] = useState(0)

    useEffect(()=>{
        setFatorial(calcFatorial(count))
    })

    useEffect(()=>{
        if(fatorial>100000){
            document.title = 'Caraai!!'
        }
    },[fatorial])

    useEffect((n)=>{
        setPoI(ParOuImpar(numero))
    })

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #1" />
            <div>
                <span className="text"> Fatorial: </span>
                <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
            </div>
            <div className="center">
                <input type="number" className="input" value={count} onChange={e => setCount(e.target.value)} />
            </div>
            <SectionTitle title='Desafio #1'/> 
            <div>
                <span className="text"> Este numero é: </span>
                <span className="text red">{PoI}</span>
            </div>
            <div className='center'>
                <input type="number" className="input" value={numero} onChange={e=>{setNumero(e.target.value)}}/>
            </div>

        </div>
    )
}

export default UseEffect
