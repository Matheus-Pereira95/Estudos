import React, { useCallback } from 'react'
import { useState } from 'react/cjs/react.development'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './useCallbackButtons'

const UseCallback = (props) => {
    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) {
        setCount(curr => curr + delta)
    }, [setCount])

    function zerar() {
        setCount(count - count)
    }

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons inc={inc} />

                <button className="center" onClick={() => zerar()}> Zerar </button>
            </div>



        </div>
    )
}

export default UseCallback
