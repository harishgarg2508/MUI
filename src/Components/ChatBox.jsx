import { Box, Stack } from "@mui/material"
import { styled } from '@mui/material/styles';


const ChatBox = ()=>{

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
  
    return(
        <>
        <Stack>
            <Box sx={{ padding: '5px' }}>
          <Item sx={{
            backgroundColor: '#312F2F',
            height: '60px',
            mt: '5px',
            mb: '5px',
            borderRadius: '10px',
            justifyContent: 'center',
            alignContent: 'center'

          }}>Item 1</Item>
          <Item sx={{
            backgroundColor: '#312F2F',
            height: '60px',
            mt: '5px',
            mb: '5px',
            borderRadius: '10px',
            justifyContent: 'center',
            alignContent: 'center'

          }}>Item 1</Item><Item sx={{
            backgroundColor: '#312F2F',
            height: '60px',
            mt: '5px',
            mb: '5px',
            borderRadius: '10px',
            justifyContent: 'center',
            alignContent: 'center'

          }}>Item 1</Item><Item sx={{
            backgroundColor: '#312F2F',
            height: '60px',
            mt: '5px',
            mb: '5px',
            borderRadius: '10px',
            justifyContent: 'center',
            alignContent: 'center'

          }}>Item 1</Item><Item sx={{
            backgroundColor: '#312F2F',
            height: '60px',
            mt: '5px',
            mb: '5px',
            borderRadius: '10px',
            justifyContent: 'center',
            alignContent: 'center'

          }}>Item 1</Item>
        </Box>
        </Stack>
        </>
    )
}

export default ChatBox;