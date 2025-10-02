"use client";

import { cartStore } from "@/store/cart";
import { Button, Grid, Typography } from "@mui/material";

export default function Page() {
  const cart = cartStore((state:any) => state.cart);
  const handleDelete = cartStore((state:any) => state.removeItemCart);
  const handleClearCart = cartStore((state:any) => state.clearCart);

  return (
    <Grid container direction="column" spacing={2}>
      {cart.length > 0 ? (
        <Grid>
          <Button variant="outlined" color="error" onClick={handleClearCart}>
            Limpiar Carrito
          </Button>

          {cart.map((c, i) => (
            <Grid container key={c.id ?? i} spacing={1} sx={{ my: 1 }}>
              <Grid size={6}>
                <Typography>{c.title}</Typography>
              </Grid>
              <Grid size={3}>
                <Typography>${c.price}</Typography>
              </Grid>
              <Grid size={3}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(i)}
                >
                  Eliminar
                </Button>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>El carrito está vacío</Typography>
      )}
    </Grid>
  );
}
