'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'var(--font-roboto)',
    },
    palette: {
        mode: 'light', // puedes cambiar esto dinámicamente si quieres
        primary: {
            main: '#4e73df', // igual a --primary
        },
        secondary: {
            main: '#6f42c1', // igual a --secondary
        },
        background: {
            default: '#f8f9fa', // igual a --background
            paper: '#ffffff',   // igual a --card-background
        },
        text: {
            primary: '#212529', // igual a --foreground
        },
        success: {
            main: '#1cc88a', // igual a --success
        },
        warning: {
            main: '#f6c23e', // igual a --warning
        },
        error: {
            main: '#e74a3b', // igual a --danger
        },
        info: {
            main: '#36b9cc', // igual a --accent
        },
        divider: '#dee2e6', // igual a --border
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // ejemplo de override general
                },
            },
        },
    },
});

export default theme;
