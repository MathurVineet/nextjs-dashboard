'use client'
import { useState, useEffect } from 'react'

import {Card} from '@/app/ui/dashboard/cards';

type TItem = {
    name: string,
    email: string,
    id: number,
}
export default function Page() {
  const [data, setData] = useState<TItem[]>()
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch("https://66598ca2de346625136ce419.mockapi.io/api/invoiceDataV1/customers")
      .then((res) => res.json())
      .then((data) => {
          console.log('data',data)
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  // const renderItemData = () =>{
  //     return (
  //       data.map((item:TItem)=>(
  //           <>
  //           <h1>{item.name}</h1>
  //           <p>{item.email}</p>
  //           <p>{item.id}</p>
  //           </>
  //       ))
  //     )
  // }
//   const renderItemData = () =>{
//     return (
//       data.map((item:TItem)=>(
//           <Card title={item.name} value={item.email} type='customers' />
//       ))
//     )
// }
const renderItemData = () => {
  return data.map((item: TItem) => (
    <Card key={item.id} title={item.name} value={item.email} type="customers" />
  ));
}

 
  return (
    <div>
      <h1>Fetching data form API </h1>
      {renderItemData()}
    </div>
  )
}