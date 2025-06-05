
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import SearchBar from './Search';
import { Avatar, Box, Button, Icon, Typography } from '@mui/material';
import Nav from './Navbar';

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

export default function MainPage() {
  return (

    <Stack sx={{ width: '20%' }} >
      {/* //left chaat bar amd message box wil be here */}


      <Stack sx={{
        backgroundColor: '#1F1D1D',
        height: '100vh',
        marginLeft: '3px',

      }}>
        <SearchBar />


        {/* //typographtext */}
        <Typography variant='h5' sx={{
          color: 'white',
          fontFamily: 'Inter',
          fontWeight: '',
          mt: '5px',
          ml: '5px'
        }}>
          Message
        </Typography>

        {/* //threeoptions */}
        <Stack sx={{ padding: '5px', justifyContent: 'space-around', backgroundColor: 'black', borderRadius: '50px', mt: '5px' }} direction={'row'}>

          <Button sx={{ color: 'white', backgroundColor: '#322F2F', borderRadius: '50px' }}>All Chats</Button>
          <Button sx={{ color: 'white' }}>Groups</Button>
          <Button sx={{ color: 'white' }}>Contacts</Button>

        </Stack>


        {/* //chats */}
        <Box sx={{ padding: '5px', mt: '5px' }}>

          <Item sx={{
            backgroundColor: '#312F2F',
            height: '70px',
            mb: '5px',
            padding: '5px',
            borderRadius: '10px',
            justifyContent: 'center',
            alignContent: 'center'

          }}>
            <Stack direction={'row'} sx={{ padding: '5px' }}>


              <Avatar sx={{
                width: '60px',
                height: '60px',
                borderRadius: '50px'
              }} alt="Figma" src="https://shorturl.at/VG9tQ" />

              <Stack direction={'column'} sx={{ marginLeft: '10px', mt: '5px' }}>

                <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'white' }}>
                  Figma teams

                </Typography>
                <Typography variant='subtitle1' sx={{ color: 'green' }}>
                  Typing...

                </Typography>
              </Stack>
            </Stack>


          </Item>


          <Item sx={{
            backgroundColor: '#312F2F',
            height: '70px',
            mb: '5px',

            padding: '5px',
            borderRadius: '10px',
            justifyContent: 'center',
            alignContent: 'center'

          }}>
            <Stack direction={'row'} sx={{ padding: '5px' }}>


              <Avatar sx={{
                width: '60px',
                height: '60px',
                borderRadius: '50px'
              }} alt="User1" src="https://shorturl.at/SdJhQ" />

              <Stack direction={'column'} sx={{ marginLeft: '10px', mt: '5px' }}>

                <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'white' }}>
                  Darshan Zalavadiya

                </Typography>
                <Typography variant='caption' sx={{ color: 'white' }}>
                  Going in right Direction

                </Typography>
              </Stack>
            </Stack>


          </Item>


          <Item sx={{
            backgroundColor: '#312F2F',
            height: '70px',
            padding: '5px',
            mb: '5px',

            borderRadius: '10px',
            justifyContent: 'center',
            alignContent: 'center'

          }}>
            <Stack direction={'row'} sx={{ padding: '5px' }}>


              <Avatar sx={{
                width: '60px',
                height: '60px',
                borderRadius: '50px'
              }} alt="User3" src="https://shorturl.at/byxOV" />

              <Stack direction={'column'} sx={{ marginLeft: '10px', mt: '5px' }}>

                <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'white' }}>
                 School App Client

                </Typography>
                <Typography variant='caption' sx={{ color: 'white' }}>
                 You have done Good Work

                </Typography>
              </Stack>
            </Stack>


          </Item>


          <Item sx={{
            backgroundColor: '#312F2F',
            height: '70px',
            mb: '5px',

            padding: '5px',
            borderRadius: '10px',
            justifyContent: 'center',
            alignContent: 'center'

          }}>
            <Stack direction={'row'} sx={{ padding: '5px' }}>


              <Avatar sx={{
                width: '60px',
                height: '60px',
                borderRadius: '50px'
              }} alt="teams" src="https://shorturl.at/wS3Ml" />

              <Stack direction={'column'} sx={{ marginLeft: '10px', mt: '5px' }}>

                <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'white' }}>
                Ui/UX Teams

                </Typography>
                <Typography variant='caption' sx={{ color: 'white' }}>
                I have done my work👍

                </Typography>
              </Stack>
            </Stack>


          </Item>


          


        </Box>

        
      </Stack>
      <Nav/>
    </Stack>
  );
}
