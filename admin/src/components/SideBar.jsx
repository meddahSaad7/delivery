import React from 'react'
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router';
import {
  DashboardOutlined,
  SearchOutlined,
  TeamOutlined,
  UserOutlined,
  StockOutlined,
  BankOutlined,
  UserSwitchOutlined,
  SortDescendingOutlined,
  MacCommandOutlined,
  ApartmentOutlined
} from '@ant-design/icons';
function SideBar() {
  const navigate=useNavigate()
  return (
    <div className=' w-[15vw] h-[100%] flex justify-center items-center'>
      <Space direction="vertical" style={{ width: '90%',height:'90%',display:'flex',justifyContent:'space-around' }}>
        <Button className='flex justify-start items-center' type="dashed" block onClick={()=>navigate('/home/Dashboard')}>
          <DashboardOutlined />
          Dashboard
        </Button>
        <Button className='flex justify-start items-center' type="dashed" block onClick={()=>navigate('/home/Search')}>
          <SearchOutlined />
          Recherche
        </Button>
        <Button className='flex justify-start items-center' type="dashed" block onClick={()=>navigate('/home/Team')}>
          <TeamOutlined />
          Team
        </Button>
        <Button className='flex justify-start items-center' type="dashed" block onClick={()=>navigate('/home/Vendeur')}>
          <UserOutlined />
          Vendeur
        </Button>
        <Button className='flex justify-start items-center' type="dashed" block onClick={()=>navigate('/home/Stock')}>
          <StockOutlined />
          Stock
        </Button>
        <Button className='flex justify-start items-center' type="dashed" block onClick={()=>navigate('/home/Agence')}>
          <BankOutlined />
          Agence
        </Button>
        <Button className='flex justify-start items-center' type="dashed" block onClick={()=>navigate('/home/Hub')}>
          <UserSwitchOutlined />
          Hub
        </Button>
        <Button className='flex justify-start items-center' type="dashed" block onClick={()=>navigate('/home/Recouvrement')}>
          <SortDescendingOutlined />
          Recouvrement
        </Button>
        <Button className='flex justify-start items-center' type="dashed" block onClick={()=>navigate('/home/Commande')}>
          <MacCommandOutlined />
          Commande
        </Button>
        <Button className='flex justify-start items-center' type="dashed" block onClick={()=>navigate('/home/Livreurs')}>
          <ApartmentOutlined />
          Livreurs
        </Button>
      </Space>
    </div>
  )
}

export default SideBar