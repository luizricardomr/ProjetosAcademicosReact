import React from 'react'

export default (props) => {

    const { min, max } = props

    const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
    return (
        <div>
            <h1>Valor Aleatorio</h1>
            <p><strong>Valor Mínimo:</strong> {min}</p>
            <p><strong>Valor Máximo:</strong> {max}</p>
            <p><strong>Valor Escolhido:</strong> {aleatorio}</p>
        </div>)
}

