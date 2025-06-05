import { Avatar, Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function IconBar() {
  return (
    <Stack sx={{ width: '60px' ,
     bgcolor:'#1F1D1D',
      height:'100vh',
      padding:'10px'
      }} direction={'column'}>
      <Stack sx={{borderRadius:'50%', margin: '1px', overflow: 'hidden'}}>
       <Avatar sx={{
                width: '60px',
                height: '60px',
                borderRadius: '50px'
              }} alt="teams" src="https://shorturl.at/GbPCZ" />

        
      </Stack>
      <Stack sx={{
        mt:'100px'
      }}>
        <Stack direction={'column'} sx={{marginBottom:'10px'}}>

        <AddHomeOutlinedIcon fontSize='large' sx={{color:'white', height:'60px', width:'60px'}}/>
        
        <Typography variant='caption' color='white' sx={{
            alignContent:'center',
            justifyContent:'center',
            marginBottom:'15px'
          }}>
          Home
        </Typography>
        </Stack>
        <Stack direction={'column'} sx={{}}>
          <SearchIcon fontSize='large' sx={{color:'white', height:'60px', width:'60px'}}/>
          <Typography variant='caption' color='white' sx={{
            alignContent:'center',
            justifyContent:'center',
            marginBottom:'15px'
          }}>
            Search
          </Typography>
        </Stack>

         <Stack direction={'column'} sx={{}}>
          <TurnedInNotIcon fontSize='large' sx={{color:'white', height:'60px', width:'60px'}}/>
          <Typography variant='caption' color='white' sx={{
            alignContent:'center',
            justifyContent:'center',
            marginBottom:'15px'
          }}>
            Save
          </Typography>
        </Stack>



        <Stack direction={'column'} sx={{}}>
          <ShareIcon fontSize='large' sx={{color:'white', height:'60px', width:'60px'}}/>
          <Typography variant='caption' color='white' sx={{
            alignContent:'center',
            justifyContent:'center',
            marginBottom:'15px'
          }}>
            Share
          </Typography>
        </Stack>

        <Stack direction={'column'} sx={{}}>
          <SettingsIcon fontSize='large' sx={{color:'white', height:'60px', width:'60px'}}/>
          <Typography variant='caption' color='white' sx={{
            alignContent:'center',
            justifyContent:'center',
            marginBottom:'15px'
          }}> 
            Settings
          </Typography>
        </Stack>

      
        
      </Stack>
      <Stack spacing={2}>
        
      </Stack>
    </Stack>
  );
}
