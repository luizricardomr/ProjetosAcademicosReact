import React from 'react'
import DiretaFilho from './DiretaFilho'
export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={36} nerd={false}></DiretaFilho>
            <DiretaFilho nome="Ricardo" idade={29} nerd={true}></DiretaFilho>
        </div>
    )
}