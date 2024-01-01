import { Box, Typography } from '@mui/joy';

export default function BlogContent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: '0.75rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.25rem 0.75rem',
          borderRadius: '0.25rem',
          backgroundColor: 'var(--Yellow, #F4D04E)',
        }}
      >
        <Typography
          sx={{
            color: 'var(--Black, #111)',
            fontSize: '14px',
            fontWeight: 800,
            lineHeight: '150%',
          }}
        >
          Learning
        </Typography>
      </Box>

      <Typography
        sx={{
          color: 'var(--Black, #111)',
          fontSize: '14px',
          lineHeight: '150%',
        }}
      >
        Published 21 Dec 2023
      </Typography>

      <Typography
        sx={{
          alignSelf: 'stretch',
          color: 'var(--Black, #111)',
          fontSize: '1.5rem',
          fontWeight: 800,
          lineHeight: '150%',
          '&:hover, &:focus, &:active': {
            cursor: 'pointer',
            color: 'var(--Yellow, #F4D04E)',
          },
        }}
      >
        HTML & CSS foundations
      </Typography>

      <Typography
        sx={{
          alignSelf: 'stretch',
          color: 'var(--Black, #7F7F7F)',
          lineHeight: '150%',
        }}
      >
        These languages are the backbone of every website, defining structure, content, and presentation.
      </Typography>
    </Box>
  );
}
