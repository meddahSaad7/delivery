import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Alert1 from '../../retulisable/Alert'
const Container=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Wrapper=styled.div`
  width: 90%;
`
const Title=styled.h2`
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid #c8c8c8;
`
const Text=styled.p`
  
`
const TableWrapper = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 50px;
`;

const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;

const TableBody = styled.tbody``;

const TableFooter = styled.tfoot`
  background-color: #f2f2f2;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;


function MyAlerts() {
  const data=["Il n'y a aucune alerte à afficher"]
  return (
    <Container>
      <Alert1 Title={'Important'} value={" Yalidine vous informe qu'il sera possible de récupérer votre paiement à la nouvelle agence d'Hussein Dey, et ce, à partir de dimanche"}/>
      <Wrapper>
        <Title>Gérer les alertes</Title>
        <Text>
          Cette interface vous permet de gérer les alertes de vos colis. Quand vous prenez une action via cette interface (problème réglé, non réglé, annulation de livraison) nos agents sont automatiquement informés sans les appeler.
        </Text>
        <TableWrapper>
          <TableHeader>
            <tr>
              <TableHeaderCell>Les alertes</TableHeaderCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <tr key={index}>
                <TableCell>{item}</TableCell>
              </tr>
            ))}
          </TableBody>
          <TableFooter>
            <tr>
              <TableCell>Veuillez <Button>actualiser la page</Button> pour vérifier s'il y à de nouvelles alertes à gérer.</TableCell>
            </tr>
          </TableFooter>
        </TableWrapper>
      </Wrapper>
    </Container>
  )
}

export default MyAlerts