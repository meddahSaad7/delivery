import React from 'react'

function Dashboard() {
  const data=[
    {
      title:'Total Livraison',
      price:18000,
      persentage:8
    },
    {
      title:'Livres',
      price:1000,
      persentage:-4
    },
    {
      title:'Annulees',
      price:12,
      persentage:8
    },
    {
      title:'Recouvrement Journalier',
      price:800000,
      persentage:8
    },
    {
      title:'Recouvrement monsuel',
      price:180000,
      persentage:8
    }
  ]
  return (
    <div className='w-[100%] h-[90%] flex flex-wrap'>
      {
        data.map((item,idx)=>{
          return <div key={idx} className='w-[300px] h-[150px] flex flex-col justify-around items-center ml-10 rounded-lg bg-slate-100'>
            <h3 className=' text-[20px]'>{item.title}</h3>
            <div style={{color:'red'}}>{item.price} DA</div>
            <span style={{color:'blue'}}>{item.persentage} %</span>
          </div>
        })
      }
    </div>
  )
}

export default Dashboard