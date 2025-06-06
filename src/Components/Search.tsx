
import { styled } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,

 
  marginRight: theme.spacing(2),
  marginLeft: 0,
  backgroundColor: '#543639',

  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SearchBar() {
  return (
          <Search sx={{color:'white' ,marginTop:'10px', borderRadius:'50px'}} >
            <SearchIconWrapper >
              <SearchIcon sx={{color:'white'}}/>
            </SearchIconWrapper>
            <StyledInputBase
             sx={{color:'white'}}
              placeholder="Search….."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
  );
}
