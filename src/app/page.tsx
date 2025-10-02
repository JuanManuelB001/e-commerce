'use client'
import Image from "next/image";

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getProducts } from "./services/dummyJson";
import { error } from "console";
import { Button, Grid, Typography } from "@mui/material";
import { cartStore } from "@/store/cart";
import Link from "next/link";



export default function Home() {

  const [productList, setProductList ] = useState()

  const fetch = ()=>{


    getProducts().then((data)=>{
      console.log(data)
      setProductList(data?.data)
    })
    .catch((error)=>{
      console.log("Error", error)
    })
  }

  const addToCart = cartStore((state:any) => state.updateCart)
  
  useEffect(() => {
      fetch()
  },[])
  return (
    <Grid container >

      {productList?.products?.map((product)=>(
        <Grid size={4} key={product?.id} my={2} border={1} spacing={1}>
        <Link href={`${product?.id}`}>
        <Typography>
          {product.title}
        </Typography>
        </Link>
        <Image src={product?.images[0]} alt="" width={100} height={100}></Image>
         <Typography>
          Precio: ${product.price}
        </Typography>
        <Grid>
          <Button onClick={() =>{
            console.log(product) 
            addToCart(product)
          }}>
            Añadir
          </Button>
        </Grid>
        </Grid>
      
      ))}

    </Grid>
  );
}
