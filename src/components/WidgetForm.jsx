import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const GradientDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.shape.borderRadius * 3,
    padding: theme.spacing(4),
    background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    boxShadow: theme.shadows[6],
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(1, 3),
  fontWeight: theme.typography.fontWeightBold,
  textTransform: 'none',
  boxShadow: theme.shadows[2],
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.shadows[4],
    transform: 'translateY(-2px)',
  },
}));

const GradientTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius * 1.5,
    background: '#fff',
    boxShadow: theme.shadows[1],
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#bdbdbd',
    },
  },
}));

const WidgetForm = ({ open, onClose, onAdd }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleAddClick = () => {
    if (widgetName && widgetText) {
      const newWidget = {
        id: Date.now().toString(),
        name: widgetName,
        text: widgetText,
        isDefault: false,
      };
      onAdd(newWidget);
      setWidgetName('');
      setWidgetText('');
      onClose();
    }
  };

  return (
    <GradientDialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#424242', textAlign: 'center' }}>
          Add New Widget
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <GradientTextField
            autoFocus
            margin="dense"
            label="Widget Name"
            type="text"
            fullWidth
            variant="outlined"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
        </Box>
        <GradientTextField
          margin="dense"
          label="Widget Text"
          type="text"
          fullWidth
          variant="outlined"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <StyledButton onClick={onClose} color="secondary">
          Cancel
        </StyledButton>
        <StyledButton onClick={handleAddClick} color="primary">
          Add
        </StyledButton>
      </DialogActions>
    </GradientDialog>
  );
};

export default WidgetForm;
