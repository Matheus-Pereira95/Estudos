import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Inicial...")
    const [soma, setSoma] = useState(1)

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className='text'> {count} </span>
                <div>
                    <button className="btn" onClick={() => setCount(count - 1)}> -1 </button>
                    <button className="btn" onClick={() => setCount(count + 1)}> +1 </button>
                </div>
            </div>

            <SectionTitle title="Exercicio #02" />
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)} />

            <SectionTitle title="Exercicio #03" />
            <div className="center">
                <span className='text'> {soma} </span>
                <div>
                    <button className="btn" onClick={() => setSoma(soma * 2)}> x2 </button>
                    <button className="btn" onClick={() => setSoma(soma / 2)}> /2 </button>
                    <button className="btn" onClick={() => setSoma(soma / soma)}> Clear </button>
                    <button className="btn" onClick={() => setSoma(soma * 5)}> x5 </button>
                    <button className="btn" onClick={() => setSoma(soma / 5)}> /5 </button>



                </div>
            </div>


        </div>
    )
}

export default UseState
