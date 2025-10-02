'use client'
import { Button, Grid, Typography, Card, CardContent, CardActions, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getProduct } from "../services/dummyJson";
import { cartStore } from "@/store/cart";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [product, setProduct] = useState<any>();

  const fetch = () => {
    getProduct(slug)
      .then((data) => {
        console.log(data);
        setProduct(data?.data);
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
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
      <Grid item xs={12} md={8} lg={6}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 4,
            p: 2,
            transition: "0.3s",
            "&:hover": { boxShadow: 8 },
          }}
        >
          <Grid container spacing={3}>
            {/* Imagen del producto */}
            <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Image
                src={product?.images?.[0] ?? "/placeholder.png"}
                alt={product?.title ?? "Producto"}
                width={250}
                height={250}
                style={{ borderRadius: "12px", objectFit: "cover" }}
              />
            </Grid>

            {/* Información del producto */}
            <Grid item xs={12} md={7}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {product?.title}
                </Typography>

                <Typography variant="body1" color="text.secondary" gutterBottom>
                  {product?.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" color="primary" fontWeight="bold">
                  💲 {product?.price}
                </Typography>
              </CardContent>

              <CardActions sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ borderRadius: 3, textTransform: "none", py: 1.5 }}
                  onClick={() => addToCart(product)}
                >
                  🛒 Añadir al Carrito
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
