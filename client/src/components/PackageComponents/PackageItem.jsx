import React from 'react'
import styled from 'styled-components'
const Container=styled.tr`
  width: 100%;
  height: 60px;
  display: flex;
`
const Element=styled.td`
    
`
function PackageItem({item}) {
  return (
    <Container>
      <Element>{item._id}</Element>
      <Element>{item.BuyerFirstName}</Element>
      <Element>{item.BuyerLastName}</Element>
      <Element>{item.BuyerPhone}</Element>
      <Element>{item.HomeDelivery}</Element>
      <Element>{item.AgenceDelivery}</Element>
      <Element>{item.PriceDelivery}</Element>
      {/* <Element>{item.Wilaya}</Element>
      <Element>{item.Commune}</Element>
      <Element>{item.Agence}</Element>
      <Element>{item.Adress}</Element>
      <Element>{item.Products}</Element>
      <Element>{item.NumCommunde}</Element>
      <Element>{item.PackagePrice}</Element>
      <Element>{item.changeProduct}</Element>
      <Element>{item.freeDelivery}</Element>
      <Element>{item.ProductsChanges}</Element> */}
    </Container>
  );
}

export default PackageItem