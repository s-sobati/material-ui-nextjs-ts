import * as React from 'react';
import Box from '@mui/material/Box';
import PersistentDrawerRight from "@/components/PersistentDrawerRight";

export default function Home() {
  return (
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <PersistentDrawerRight />
      </Box>
  );
}
