import React from 'react';
import { IconButton, Card, CardContent, Typography, Box } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const WidgetCard = ({ widget, categoryId, onRemove }) => {
  return (
    <Card 
      sx={{ 
        width: 320, 
        height: 180, 
        position: 'relative', 
        mb: 3, 
        mx: 'auto',
        borderRadius: '12px',
        boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.12)',
        background: 'linear-gradient(135deg, #ece9e6 30%, #ffffff 100%)',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.18)',
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '6px',
          background: 'linear-gradient(90deg, #007991, #78ffd6)',
        }}
      />
      <CardContent sx={{ padding: '24px' }}>
        <Typography 
          variant="h6" 
          sx={{ fontWeight: 700, color: '#333' }}
        >
          {widget.name}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ color: '#666', mt: 2 }}
        >
          {widget.text}
        </Typography>
      </CardContent>
      <IconButton
        onClick={() => onRemove(categoryId, widget.id)}
        sx={{ 
          position: 'absolute', 
          top: 10, 
          right: 10, 
          color: 'white',
          background: 'rgba(255, 0, 0, 0.8)',
          '&:hover': {
            background: 'rgba(255, 0, 0, 1)',
          },
        }}
      >
        <CloseIcon />
      </IconButton>
    </Card>
  );
};

export default WidgetCard;
