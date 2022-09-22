import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { Test } from './Test'

const ListProducts = () => {
    const [prodts, setprodts] = useState([])
    const [loding, setloding] = useState(true)
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        // .then(res=>res.json())
        // .then(json=>setprodts(json))
    // axios.get('https://fakestoreapi.com/products').then(
    //     (res)=>setprodts((res.data))
    // )
    const getProds = async() => { 
        try {
          const res=  await axios.get('https://fakestoreapi.com/products')
          setprodts(res.data)
          console.log(res.data)
          setloding(false)
        } catch (error) {
            console.log(error)
        }
    }
    getProds ()
    }, [])
    if (loding) {
       return 'loading.........'
    }
  return (
    <div style={{display:"flex", justifyContent:"space-around" ,flexWrap:"wrap"}}
    > 
    
        {/* {prodts.map(
            el=><div key={el.id}>
                <h2>{el.title}</h2>
                <p>{el.price} </p>
                <p>
                   {el.description} 
                </p>
                <img src={el.image} alt="" />
            </div>
        )} */}

        {
            prodts.map(
             el=>   <Test key={el.id} el={el}/>
            )
        }


    </div>
  )
}

export default ListProducts