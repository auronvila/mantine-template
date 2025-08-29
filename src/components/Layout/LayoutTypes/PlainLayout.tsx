import Views from '@/components/Layout/Views';
import { Box, Container } from '@mantine/core';

export default function PlainLayout() {
  return (
    <Box
      bg="#ececec"
      style={{
        overflowX: 'hidden',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
      p="xl"
    >
        <Views />
    </Box>
  );
}
