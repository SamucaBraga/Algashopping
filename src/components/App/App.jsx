import React, { useState } from 'react'
import Checkbox from '../../shared/Checkbox'
import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import { Container, Wrapper } from './App.styles'

function App() {
  const [lettuce, setLetucce] = useState(false)
  const [rice, setRice] = useState(false)

    return <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
         left={<div>
           produtos disponoveis:

           <Checkbox
             value={lettuce}
             title="Alface"
             onClick={() => setLetucce(!lettuce)}
           />
           <Checkbox
             value={rice}
             title="Arroz"
             onClick={() => setRice(!rice)}
           />
         </div>}
         middle={<div>
           sua lista de compras
         </div>}
         right={<div>
           estatisticas
         </div>}
        />
      </Container>
    </Wrapper>
}

export default App