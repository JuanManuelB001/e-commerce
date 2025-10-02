import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini E-commerce",
  description: "E-commerce demo con Next.js y MUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {/* Header */}
            <AppBar position="static" sx={{ bgcolor: "black" }}>
              <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  🛒 Mi Tienda
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    color="inherit"
                    component={Link}
                    href="/"
                    startIcon={<HomeIcon />}
                  >
                    Productos
                  </Button>

                  <Button
                    color="inherit"
                    component={Link}
                    href="/cart"
                    startIcon={<ShoppingCartIcon />}
                  >
                    Carrito
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>

            {/* Contenido dinámico */}
            <Box sx={{ p: 4 }}>{children}</Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
