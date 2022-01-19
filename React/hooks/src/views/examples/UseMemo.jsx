import React, { useMemo } from 'react'
import { useState } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function sum (a,b) {
    const future = Date.now() + 2000
    while(Date.now() < future) {} // espera... 2s
    return a+b
}

const UseMemo = (props) => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    const res = useMemo(() => sum(n1,n2),[n1,n2])
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memorizado!" />

            <SectionTitle title='Exercicio #1' />
            <div className="center">
                <input
                    type="number"
                    className="input"
                    value={n1}
                    onChange={e => setN1(parseInt(e.target.value))} />
            </div>
            <div className="center">
                <input
                    type="number"
                    className="input"
                    value={n2}
                    onChange={e => setN2(parseInt(e.target.value))} />
            </div>
            <div className="center">
                <input
                    type="number"
                    className="input"
                    value={n3}
                    onChange={e => setN3(parseInt(e.target.value))} />
            </div>
            <span className="text"> {res} </span>
        </div>
    )
}

export default UseMemo
