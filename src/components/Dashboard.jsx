import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget, removeWidget, searchWidgets } from '../Redux/action';
import WidgetForm from './WidgetForm';
import WidgetCard from './WidgetCard';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Container, Box, Button, Slide, Grid } from '@mui/material';
import { Search as SearchIcon, Add as AddIcon, Person as PersonIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { filteredCategories, searchTerm } = useSelector(state => state.dashboard);
  const [openAddWidgetDialog, setOpenAddWidgetDialog] = useState(false);
  const [categoryToAdd, setCategoryToAdd] = useState(null);

  const handleAddWidgetClick = (categoryId) => {
    setCategoryToAdd(categoryId);
    setOpenAddWidgetDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenAddWidgetDialog(false);
    setCategoryToAdd(null);
  };

  const handleAddWidget = (widget) => {
    if (categoryToAdd) {
      dispatch(addWidget(categoryToAdd, widget));
      handleCloseDialog();
    }
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    dispatch(searchWidgets(term));
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget(categoryId, widgetId));
  };

  const noResultsFound = filteredCategories.every(category => category.widgets.length === 0);

  return (
    <Container maxWidth="lg">
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)',
          boxShadow: 'none',
          borderRadius: 2,
          my: 2
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Dashboard
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'background.paper', borderRadius: 1, px: 2 }}>
            <IconButton sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search widgets…"
              onChange={handleSearchChange}
              sx={{ ml: 1, flex: 1 }}
              value={searchTerm}
            />
          </Box>
          <IconButton sx={{ ml: 2, color: '#fff' }}>
            <PersonIcon />
          </IconButton>
          <IconButton sx={{ ml: 1, color: '#fff' }}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ mt: 2 }}>
        {filteredCategories.map((category) => {
          const hasVisibleWidgets = category.widgets.length > 0;

          return (
            <Slide key={category.id} direction="up" in={true} mountOnEnter unmountOnExit>
              <Box
                sx={{
                  mb: 4,
                  border: '1px solid #ddd',
                  borderRadius: 2,
                  p: 3,
                  backgroundColor: '#fafafa',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  textAlign="center"
                  sx={{ fontWeight: 600, color: '#424242' }}
                >
                  {category.name}
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  {hasVisibleWidgets ? (
                    category.widgets.map((widget) => (
                      <Grid item key={widget.id} xs={12} sm={6} md={4}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <WidgetCard
                            widget={widget}
                            categoryId={category.id}
                            onRemove={handleRemoveWidget}
                          />
                        </motion.div>
                      </Grid>
                    ))
                  ) : (
                    <Grid item xs={12}>
                      <Typography variant="h6" textAlign="center" sx={{ color: '#616161' }}>
                        No widgets found in this category
                      </Typography>
                    </Grid>
                  )}
                  {!searchTerm && (
                    <Grid item xs={12} sm={6} md={4}>
                      <Box
                        sx={{
                          height: 150,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '2px dashed #1976D2',
                          borderRadius: 2,
                          position: 'relative',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            backgroundColor: '#f0f0f0',
                            borderColor: '#1565C0',
                          },
                        }}
                      >
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={<AddIcon />}
                          onClick={() => handleAddWidgetClick(category.id)}
                          sx={{ color: '#1976D2', fontWeight: 600 }}
                        >
                          + Add Widget
                        </Button>
                      </Box>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </Slide>
          );
        })}
        {noResultsFound && searchTerm && (
          <Typography variant="h6" textAlign="center" sx={{ mt: 4, color: '#616161' }}>
            No results found
          </Typography>
        )}
      </Box>
      <WidgetForm
        open={openAddWidgetDialog}
        onClose={handleCloseDialog}
        onAdd={handleAddWidget}
        categoryId={categoryToAdd}
      />
    </Container>
  );
};

export default Dashboard;
