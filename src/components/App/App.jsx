import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Wrapper } from './App.styles'

import LineChart from '../../shared/LineChart'

import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import Gastos from '../Gastos'
import Calculator from '../Calculator'

import extractPercentage from '../../utils/extractPercentage'
import { selectAllProducts, selectSelectedProducts, selectSelectedProductTotalPrice } from '../../store/Products/Products.selectors'
import { toggleProduct } from '../../store/Products/Products.actions'


function App() {
  const dispatch = useDispatch();
  
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const products = useSelector(selectAllProducts)
  const selectedProducts = useSelector(selectSelectedProducts)
  const totalPrice = useSelector(selectSelectedProductTotalPrice)

  const handleToggle = (id) => dispatch(toggleProduct(id))



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