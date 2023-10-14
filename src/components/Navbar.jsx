import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import Logo from '../../public/image/pokemon-logo.png'
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  background: "rgba(30, 30, 30, 0.5)",
  borderRadius:"35px",
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '75ch',
      '&:focus': {
        width: '105ch',
      },
    },
  },
}));

export default function NavBar({ Filter, hideSearch }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          <Box component="img" src={Logo} style={{ width: "150px" }} sx={{cursor:"pointer", marginLeft:"20px"}} onClick={() => navigate("/")} />
          </Typography>
          {!hideSearch && (
            <Search onChange={(e) => Filter(e.target.value)} sx={{marginRight:"27px"}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Pesquisar..." inputProps={{ "aria-label": "search" }} color='white' />
            </Search>
          )}
        </Toolbar>
    </Box>
  );
}


