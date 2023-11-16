import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
    <Box display='flex' height='100vh' justifyContent='center' alignItems='center' flexDirection='column'>
      <CircularProgress />
      <h2>FETCHING DATA</h2>
    </Box>
  );
};

export default Loading;
