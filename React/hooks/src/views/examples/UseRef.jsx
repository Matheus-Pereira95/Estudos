import React, { useRef } from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [Value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function(){
        count.current++
    }, [Value1, value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!" />
            <SectionTitle title="Exercicio #1" />
            <div className="center">
                <div>
                    <span className="text"> Valor: </span>
                    <span className="text">{Value1} [</span> 
                    <span className="text red"> {count.current} </span>
                    <span className="text">]</span>
                </div>
                <input
                    type="text"
                    className="input"
                    ref={myInput1}
                    value={Value1}
                    onChange={e => setValue1(e.target.value)} />
            </div>
            <SectionTitle title="Exercicio #2"/>
            <div className="center">
                <input 
                    type="text" 
                    className="input"
                    value={value2}
                    onChange={e => setValue2(e.target.value)} />
            </div>





        </div>
    )
}

export default UseRef
