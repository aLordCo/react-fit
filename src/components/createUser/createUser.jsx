import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, TextField, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Modal from '../modal';
import usePost from '../../hooks/usePost';
import { inputs } from './inputs';

const CreateUser = () => {
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { post, error, data } = usePost({ url: 'https://react-fit.free.beeceptor.com/create-user' })

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
    },
  });

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open]);

  useEffect(() => {
    if (data?.status === 'User added!') {
      setShowAlert(true);
    }
    handleClose();
  }, [data, error])

  const onSubmit = (data) => {
    post(data);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buildInputs = (inputs) => (
    inputs.map((input) => {
      const defaultInputProps = {
        variant: 'standard',
        color: 'primary',
        sx: { mt: 3 },
        fullWidth: true,
        ...input
      };

      return (
        <Box key={input.name}>
          <Controller
            {...input}
            control={control}
            render={({ field }) => (
              <TextField
                {...defaultInputProps}
                {...field}
              >
                {input.type === 'select' && input.options && (
                  input.options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))
                )}
              </TextField>
            )}
          />
          {errors[input.name]?.type === 'required' && (
            <small role='alert'>{input.label} is required.</small>
          )}
        </Box>
      );
    })
  );

  return (
    <>
      <Button variant='contained' style={{ margin: '50px 0' }} onClick={handleOpen}>
        <AddIcon fontSize='small' style={{ marginRight: '10px' }} />
        <Typography>Create item</Typography>
      </Button>

      {showAlert && <Alert severity='success' onClose={() => setShowAlert(false)} sx={{ alignItems: 'center' }}>
        User was added!
      </Alert>}

      <Modal open={open} handleClose={handleClose}>
        <Typography
          component='h2'
          sx={{
            borderBottom: '1px solid',
            paddingBottom: '10px',
            marginBottom: '30px'
          }}>
          Create User
        </Typography>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          {buildInputs(inputs)}
          <Box sx={{ display: 'flex', justifyContent: 'right', mt: '50px' }}>
            <Button sx={{ mr: '20px' }} onClick={handleClose}> Cancel </Button>
            <Button variant='contained' type='submit'> Create </Button>
          </Box>
        </form>
      </Modal>
    </>
  );
};

export default CreateUser;