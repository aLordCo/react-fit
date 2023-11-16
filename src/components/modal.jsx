import React from 'react';
import MuiModal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Modal = ({ open, customStyle, handleClose, children }) => {

  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    ...customStyle
  };

  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...styles }}>
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;