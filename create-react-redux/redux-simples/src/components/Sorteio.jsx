import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'


function Sorteio(props) {
    const { min, max} = props
    const numero = parseInt(Math.random() * (max - min + 1) + min)
    return (
        <Card title="Sorteio de um Número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{numero}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio)