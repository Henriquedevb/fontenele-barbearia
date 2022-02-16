import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { INavBarProps } from '../../uteis/interfaces';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from 'next/link';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#000000f6',
        }
    },
});


export default function NavBar({ title, button }: INavBarProps) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" color='primary' enableColorOnDark>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <Link href="/home">
                            <Button color="inherit">{button}</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box >
    );
}