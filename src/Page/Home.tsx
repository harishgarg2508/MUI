import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconBar from '../Components/IconBar';
import MainPage from '../Components/MainPage';

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

export default function HomePage() {
  return (
    <Stack sx={{ width: '100%',backgroundColor:'black' }} direction={'row'}>
    <IconBar />
    <MainPage/>
    </Stack>
  );
}
