import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { NavForum } from '../components';
interface IBaseLayoutPageProps {
  children: React.ReactNode;
  toolbar?: React.ReactNode;
}

export const BaseLayoutPage: React.FC<IBaseLayoutPageProps> = ({
  children,
  toolbar,
}) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavForum />
      <Container maxWidth="sm">
        {toolbar && <Box>{toolbar}</Box>}

        <Box sx={{ borderRadius: '10px', bgcolor: '#cfe8fc', height: '100%' }}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
};

//  <Box display="flex">
//       {toolbar && <Box>{toolbar}</Box>}

//       <Box
//         marginLeft={smDown ? 2 : 0}
//         sx={{ width: '100%', height: '100%', background: '#BDCFF2' }}
//       >
//         {children}
//       </Box>
//     </Box>
