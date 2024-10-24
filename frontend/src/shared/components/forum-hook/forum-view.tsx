import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

import { useAuth } from '../../hooks/auth';

export const NavForum: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Forum
        </Typography>
        <Button
          type="button"
          onClick={signOut}
          variant="contained"
          color="primary"
          sx={{
            marginBottom: '5px',
          }}
        >
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
};
