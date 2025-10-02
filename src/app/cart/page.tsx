"use client";

import { cartStore } from "@/store/cart";
import {
  Button,
  Grid,
  Typography,
  Divider,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import Image from "next/image";

export default function Page() {
  const cart = cartStore((state: any) => state.cart);
  const handleDelete = cartStore((state: any) => state.removeItemCart);
  const handleClearCart = cartStore((state: any) => state.clearCart);

  // Calcular total
  const total = cart.reduce(
    (acc: number, item: any) =>
      acc + (item.price || 0) * (item.quantity ?? 1),
    0
  );

  return (
    <Grid container direction="column" spacing={3} sx={{ p: 3 }}>
      {cart.length > 0 ? (
        <Grid item>
          <Button
            variant="outlined"
            color="error"
            onClick={handleClearCart}
            sx={{ mb: 3 }}
          >
            Limpiar Carrito
          </Button>

          <Grid container spacing={2}>
            {cart.map((c, i) => {
              const quantity = c.quantity ?? 1;
              const subtotal = c.price * quantity;

              return (
                <Grid item xs={12} md={6} key={c.id ?? i}>
                  <Card
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": { boxShadow: 6, transform: "scale(1.02)" },
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {c.title}
                      </Typography>

                      <Image
                        src={c.images[0]}
                        alt={c.title}
                        width={200}
                        height={200}
                        style={{
                          objectFit: "cover",
                          borderRadius: "8px",
                          margin: "0 auto",
                        }}
                      />

                      <Typography variant="body2" color="text.secondary">
                        Cantidad: {quantity}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Precio: ${c.price}
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ mt: 1 }}
                      >
                        Subtotal: ${subtotal}
                      </Typography>
                    </CardContent>

                    <CardActions sx={{ justifyContent: "flex-end" }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => handleDelete(i)}
                      >
                        Eliminar
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h5" align="right" fontWeight="bold">
            Total: ${(Math.round(total)/ 100).toFixed(2)}
          </Typography>
        </Grid>
      ) : (
        <Typography variant="h6" align="center" sx={{ mt: 5 }}>
          🛒 El carrito está vacío
        </Typography>
      )}
    </Grid>
  );
}
