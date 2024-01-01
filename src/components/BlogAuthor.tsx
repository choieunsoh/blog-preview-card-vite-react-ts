import { Box, Typography } from '@mui/joy';
import AuthorImage from '../assets/image-avatar.webp';

export default function BlogAuthor() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <img src={AuthorImage} alt="Blog Author" style={{ borderRadius: '100%', width: '2rem', height: '2rem' }} />

      <Typography
        sx={{
          color: 'var(--Black, #111)',
          fontSize: '14px',
          fontWeight: 800,
          lineHeight: '150%',
        }}
      >
        Greg Hooper
      </Typography>
    </Box>
  );
}
