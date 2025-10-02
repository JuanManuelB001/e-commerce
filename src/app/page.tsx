"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getProducts } from "./services/dummyJson";
import { Button, Grid, Typography, Card, CardContent, CardActions } from "@mui/material";
import { cartStore } from "@/store/cart";
import Link from "next/link";

export default function Home() {
  const [productList, setProductList] = useState<any>();

  const fetch = () => {
    getProducts()
      .then((data) => {
        console.log(data);
        setProductList(data?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const addToCart = cartStore((state: any) => state.updateCart);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {productList?.products?.map((product: any) => (
        <Grid item xs={12} sm={6} md={4} key={product?.id}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              boxShadow: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "0.3s",
              "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
            }}
          >
            <CardContent>
              <Link href={`/${product?.id}`} style={{ textDecoration: "none" }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  color="primary"
                >
                  {product.title}
                </Typography>
              </Link>

              <Image
                src={product?.images[0]}
                alt={product?.title}
                width={200}
                height={200}
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                  margin: "0 auto",
                }}
              />

              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{ mt: 2, textAlign: "center" }}
              >
                Precio: ${product.price}
              </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => addToCart(product)}
              >
                Añadir al carrito
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
