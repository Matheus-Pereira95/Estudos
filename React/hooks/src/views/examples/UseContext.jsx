import React, { useContext } from 'react'
import { useEffect } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store'

const UseContext = (props) => {
    const context = useContext(DataContext)

    function addNumber(delta) {
        context.setState({
            ...context.state,
            number: context.state.number + delta
        })
    }

    const { number, text, setNumber, setText } = useContext(AppContext)

    useEffect(function(){
        if(number>12345) {
            setText('Eiita')
        } else if(number<12345){
            setText('Context API + Hooks')
        }
    },[number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Aula #1" />
            <div className="center">
                <span className="text"> {context.state.text} </span>
                <span className="text"> {context.state.number} </span>

                <div>
                    <button className="btn" onClick={() => addNumber(-1)}> -1 </button>
                    <button className="btn" onClick={() => addNumber(+1)}> +1 </button>
                </div>
            </div>

            <SectionTitle title="Aula #2" />
            <div className="center">
                <span className="text"> {text} </span>
                <br/>
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number - 1)}> - 1 </button>
                    <button className="btn" onClick={() => setNumber(number + 1)}> + 1 </button>
                    <button className="btn" onClick={() => setNumber(number - number)}> Clear </button>
                </div>

            </div>

        </div>
    )
}

export default UseContext
