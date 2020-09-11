import React from 'react'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

function App() {
    return <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
         left={<div style={{ backgroundColor: 'red'}}>
           produtos disponoveis
         </div>}
         middle={<div style={{ backgroundColor: 'green'}}>
           sua lista de compras
         </div>}
         right={<div style={{ backgroundColor: 'blue'}}>
           estatisticas
         </div>}
        />
      </Container>
    </Wrapper>
}

export default App