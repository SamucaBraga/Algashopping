import React, { useEffect, useState } from 'react'
import { Container, Wrapper } from './App.styles'
import AppContainer from '../AppContainer'
import LineChart from '../../shared/LineChart/LineChart'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import productsMock from '../../mocks/productsList.json'
import extractPercentage from '../../utils/extractPercentage'
import Gastos from '../Gastos'
import Calculator from '../Calculator'

function App() {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const [ products, setProducts ] = useState(productsMock.products)
  const [ selectedProducts, setSelectedProducts ] = useState([])
  const [ totalPrice, setTotalPrice ] = useState(0)

  const handleToggle = (id) => {
    const newProducts = products.map(product =>
      product.id === id ? { ...product, checked: !product.checked } : product
      )
    setProducts(newProducts)
  }

  useEffect(() => {
    const newSelectedProducts = products
      .filter(product => product.checked === true)

      setSelectedProducts(newSelectedProducts)
  }, [products])

  useEffect(() => {
    const total = selectedProducts
      .map(product => product.price)
      .reduce((a, b) => a + b, 0)

    setTotalPrice(total)

  }, [selectedProducts])

  return <Wrapper>
    <Container>
      <AppHeader />
      <AppContainer
        left={
          <ShoppingList
            title="Produtos disponíveis"
            products={products}
            onToggle={handleToggle}
          />}
        middle={
          <ShoppingList
            title="Sua lista de compras"
            products={selectedProducts}
            onToggle={handleToggle}
          />}
        right={
        <div>
          estatisticas

          <LineChart 
            color={colors[0]} 
            title="saudavel" 
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('healthy'))
                .length
            )} 
          />
          
          <LineChart 
            color={colors[1]} 
            title="não tão saudavel" 
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('junk'))
                .length
            )}  
          />

          <LineChart 
            color={colors[2]} 
            title="limpeza" 
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('cleaning'))
                .length
            )}  
          />

          <LineChart 
            color={colors[3]} 
            title="outros" 
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('others'))
                .length
            )}  
          />

          <Gastos
            title="previsão de gastos"
            price= { totalPrice.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
          }) }
          />

          <Calculator />

        </div>}
      />
    </Container>
  </Wrapper>
}

export default App