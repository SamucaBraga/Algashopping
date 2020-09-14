import React from 'react'

import { Wrapper, Title, Price } from './Gastos.styles'

function Gastos({ title, price }) {
    return <Wrapper>
        <Title>
            { title }:
        </Title>
        <Price>
            { price }
        </Price>
    </Wrapper>
}

export default Gastos
