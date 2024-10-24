import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

export const NavForum: React.FC = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Forum
        </Typography>
        <Button
          type="button"
          onClick={() => {
            navigate('/create-topic');
          }}
          variant="contained"
          color="primary"
        >
          Novo Topic
        </Button>
      </Toolbar>
    </AppBar>
  );
};
