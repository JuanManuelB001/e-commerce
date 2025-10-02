'use client'
import { Button, Grid, Typography } from "@mui/material";
import { error } from "console";
import { getProduct } from "../services/dummyJson";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cartStore } from "@/store/cart";
export default function Page(
  { params }: { params: { slug: string } }) {
const { slug } = params;
    
  const [product , setProduct] = useState()

  const fetch = ()=>{

    getProduct(slug).then((data)=>{
      console.log(data)
      setProduct(data?.data)
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
    <Grid container size={10} mx="auto"> 
      <Grid size={5} container>
        <Image src={product?.images[0]} alt="" width={100} height={100}></Image>
      </Grid>
      <Grid size={5} container>
<Typography>{product?.title}</Typography>
<Typography>{product?.description}</Typography>
<Typography>{product?.price}</Typography>
 <Grid>
          <Button fullWidth onClick={() =>{
            addToCart(product)
          }}>
            Añadir
          </Button>
        </Grid>
      </Grid>
    </Grid>
)
}